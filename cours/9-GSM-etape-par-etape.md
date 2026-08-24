# Cours GSM — l'attachement d'un mobile, étape par étape

> De la **synchro radio** au **premier appel voix**, chaque étape que franchit un
> téléphone GSM pour s'attacher à un réseau. Pour chacune : ce qui est
> **nécessaire**, puis **deux cadres** — la version **`shunt_legit`** (l'hôte
> démodule) et la version **DSP natif** (le vrai baseband Calypso), telles que
> [qemu-calypso](8-QEMU-Calypso.md) les mesure.

```tip

Ce cours suit la séquence réelle mesurée sur le banc `shunt_legit` du 2026-08-24 :
`synchro FB → synchro SB → sysinfo → camp → RACH → canal dédié → authentification
→ chiffrement A5/1 → Location Update → appel voix → SMS`. À droite de chaque
étape, l'état du **mode natif**, où le DSP fait lui-même le travail.

```

## La chaîne complète, d'un coup d'œil

```mermaid
flowchart TD
    A["1 · Synchro FB<br/>fréquence"] --> B["2 · Synchro SB / SCH<br/>temps + BSIC"]
    B --> C["3 · System Information<br/>BCCH"]
    C --> D["4 · Camp<br/>C1 / C2 / C3"]
    D --> E["5 · Accès RACH<br/>CHANNEL REQUEST"]
    E --> F["6 · Canal dédié<br/>Immediate Assignment → SDCCH"]
    F --> G["7 · Authentification<br/>COMP128v1"]
    G --> H["8 · Chiffrement<br/>A5/1"]
    H --> I["9 · Location Update Accept<br/>+ TMSI"]
    I --> J["10 · Appel voix<br/>TCH/F"]
    I --> K["11 · SMS<br/>MO / MT"]
```

### État par étape — shunt vs natif

| # | Étape | `shunt_legit` | DSP natif |
|---|-------|:---:|:---:|
| 1 | Synchro FB | ✅ | ✅ *(résolu 2026-08-24)* |
| 2 | Synchro SB / SCH | ✅ | 🔧 *mur actuel* |
| 3 | System Information | ✅ | ⬜ |
| 4 | Camp (C3) | ✅ | ⬜ |
| 5 | Accès RACH | ✅ | ⬜ |
| 6 | Canal dédié (SDCCH) | ✅ | ⬜ |
| 7 | Authentification | ✅ | ⬜ |
| 8 | Chiffrement A5/1 | ✅ | ⬜ |
| 9 | Location Update Accept | ✅ | ⬜ |
| 10 | Appel voix TCH/F | ✅ | ⬜ |
| 11 | SMS MO / MT | ✅ | ⬜ |

✅ mesuré · 🔧 en cours · ⬜ bloqué en aval du mur SCH (natif)

---

## Rappels de couche physique GSM

Avant la première étape, le socle. Le GSM 900/1800 découpe le temps en **trames
TDMA** de 8 slots, et empile ces trames en multitrames.

```mermaid
flowchart TD
    HF["Hyperframe · 2 715 648 trames TDMA (~3h28)"] --> SF["Superframe · 1326 trames"]
    SF --> M51["Multitrame 51 (contrôle)<br/>FCCH · SCH · BCCH · CCCH · SDCCH"]
    SF --> M26["Multitrame 26 (trafic)<br/>TCH · SACCH"]
    M51 --> TF["Trame TDMA · 8 timeslots (4,615 ms)"]
    M26 --> TF
    TF --> TS["Timeslot · 1 burst (577 µs)"]
```

Chaque **timeslot** transporte un *burst* de 156,25 bits. Les canaux logiques
sont multiplexés sur ces slots :

```mermaid
flowchart LR
    subgraph Diffusion["Canaux de diffusion (downlink)"]
        FCCH["FCCH · fréquence"]
        SCH["SCH · synchro + BSIC"]
        BCCH["BCCH · System Info"]
    end
    subgraph Commun["Canaux communs"]
        RACH["RACH · accès (uplink)"]
        AGCH["AGCH · assignation (downlink)"]
        PCH["PCH · paging"]
    end
    subgraph Dedie["Canaux dédiés"]
        SDCCH["SDCCH · signalisation"]
        TCH["TCH/F · voix"]
        SACCH["SACCH · mesures"]
    end
    Diffusion --> Commun --> Dedie
```

Dans le baseband Calypso, cette couche 1 est justement ce que se partagent l'**ARM**
(ordonnancement, protocole) et le **DSP** (démodulation, corrélation) :

```mermaid
flowchart LR
    RF["RF downlink<br/>I/Q"] --> DSP["DSP C54x<br/>corrélation FB/SB, égalisation, Viterbi"]
    DSP <-->|"API RAM 0xFFD00000"| ARM["ARM7<br/>L1 osmocom-bb : FBSB, RACH, mesures"]
    ARM -->|"L1CTL"| L23["Layer 2/3<br/>mobile : RR / MM / CC / SMS"]
```

---

## Étape 1 — Synchro FB (Frequency Burst)

**Ce qui est nécessaire.** Le mobile ne connaît a priori ni la fréquence exacte de
la cellule ni sa base de temps. Le **FCCH** émet un *Frequency Burst* : un burst
de tout-zéros qui, après modulation GMSK, produit une **sinusoïde pure** à
`+67,7 kHz` de la porteuse. Le détecter cale l'**AFC** (correction de fréquence) et
donne un premier point d'ancrage temporel.

```mermaid
sequenceDiagram
    participant BTS
    participant MS as MS (L1)
    BTS->>MS: FCCH (Frequency Burst = ton pur)
    MS->>MS: corrélation → offset de fréquence (AFC)
    MS->>MS: estime la position TDMA grossière
    Note over MS: prêt à chercher le SCH
```

```note

**Cadre 1 — `shunt_legit` (l'hôte démodule).** ✅ Le FB est produit côté hôte et
présenté à l'ARM par intercept de lecture. Le corrélateur `corr_iq.py` doit
répondre `FCCH @1SPS PROPRE` (`dphi = +1,00 × π/2`). Compté **11** fois sur le run
de référence. Le firmware ARM tourne pour de vrai — mais le DSP est court-circuité.

```

```warning

**Cadre 2 — DSP natif.** ✅ **Résolu le 2026-08-24.** C'est désormais le **vrai DSP
mask-ROM** qui acquiert le FB : `FBDET-WR 0x0000 -> 0x0001` mesuré **437 fois**,
toutes écrites par la ROM à `PC=0x79e4`, **sans aucune injection**. L'ARM reçoit
des `FB1 (…): TOA=39, Power=-52dBm, Angle=-1Hz` réels et variables, calcule son
`fn_offset` et appelle `Synchronize_TDMA`.

```

---

## Étape 2 — Synchro SB / SCH (Synchronization Burst)

**Ce qui est nécessaire.** Une fois la fréquence calée, le **SCH** livre la synchro
**fine** : le numéro de trame (FN) réduit et le **BSIC** (Base Station Identity
Code). Sans SCH décodé, impossible de savoir *quand* on est dans l'hyperframe, donc
impossible de lire le BCCH.

```mermaid
sequenceDiagram
    participant BTS
    participant MS as MS (L1)
    BTS->>MS: SCH (Synchronization Burst)
    MS->>MS: égalisation + décodage → BSIC + FN réduit
    MS->>MS: verrouillage de la base de temps TDMA
    Note over MS: FN connu → peut lire le BCCH
```

```note

**Cadre 1 — `shunt_legit`.** ✅ Le SB est décodé par gr-gsm côté hôte. Mesuré
**22** fois : `=> SB 0x0125011c: BSIC=7 fn=3805`. La base de temps est verrouillée,
la lecture du BCCH peut commencer.

```

```danger

**Cadre 2 — DSP natif.** 🔧 **C'est le mur actuel.** La tâche SB s'exécute, mesure
un TOA plausible, écrit ses slots — mais `a_sch[0] = 0x8100`
(`B_BLUD | B_SCH_CRC`), donc `prim_fbsb.c:181` abandonne, et surtout `a_sch[3]`
sort **`0xf8d8`, constant sur 21/21 écritures** alors que 10 contenus de burst
distincts lui ont été présentés. *Un décodeur dont la sortie ne dépend pas de
l'entrée ne décode pas.* Hypothèse principale : on alimente la **sortie** du
démodulateur (`data[0x2a00]`) au lieu de son **entrée**. Tant que cette étape n'est
pas franchie, tout ce qui suit reste ⬜ en natif.

```

---

## Étape 3 — System Information (BCCH)

**Ce qui est nécessaire.** Le **BCCH** diffuse en clair les *System Information*
(SI 1 à 4 notamment) : identité de cellule (LAI = MCC/MNC/LAC + CI), paramètres de
sélection (seuils C1/C2), organisation des canaux communs, voisines. Le mobile en a
besoin pour décider s'il peut camper.

```mermaid
flowchart LR
    BCCH["BCCH"] --> SI1["SI 1 · fréquences RACH"]
    BCCH --> SI2["SI 2 · voisines BCCH"]
    BCCH --> SI3["SI 3 · LAI, paramètres cellule"]
    BCCH --> SI4["SI 4 · sélection, CBCH"]
```

```note

**Cadre 1 — `shunt_legit`.** ✅ **16** System Information lues, dont
`New SYSTEM INFORMATION 4 (lai=001-01-1)`. Le mobile connaît la cellule.

```

```warning

**Cadre 2 — DSP natif.** ⬜ En attente : les SI transitent par le CCCH, dont le
décodage dépend de la synchro SCH (étape 2). Le test spécifique du natif est
`native_twl`, qui *donne* la synchro au DSP pour poser la seule question « le DSP
traite-t-il le SI ? » — critère : au moins une écriture `WATCH-ACD
DSP-opcode-write` de son propre opcode.

```

---

## Étape 4 — Camp (sélection de cellule C1 / C2 / C3)

**Ce qui est nécessaire.** Le mobile évalue la **qualité** de la cellule : `C1`
(critère de réception minimal, dérivé du RXLEV), `C2` (reselection) et vérifie
`C3`. Si le compte est bon, il **campe** — état `C3 camped normally` — et devient
joignable.

```mermaid
stateDiagram-v2
    [*] --> Recherche
    Recherche --> Mesure: FB+SB+BCCH OK
    Mesure --> Camp: C1>0 et C2/C3 OK
    Camp --> [*]: cell selection state = C3 camped normally
    Mesure --> Recherche: critère non tenu
```

```note

**Cadre 1 — `shunt_legit`.** ✅ **15** — `Going to camping (normal) ARFCN
514(DCS)`, puis `cell selection state: C3 camped normally`. Le **RXLEV serving** est
mesuré (`RLA_C -53 dBm`, C1/C2 > 0).

```

```warning

**Cadre 2 — DSP natif.** ⬜ Le **RXLEV serving est déjà ✅ en natif**, mais le camp
(C3) reste bloqué tant que le SCH n'est pas décodé (étape 2). La brique manque en
amont, pas ici.

```

---

## Étape 5 — Accès RACH (CHANNEL REQUEST)

**Ce qui est nécessaire.** Pour parler au réseau, le mobile émet un burst d'accès
sur le **RACH** (uplink) : un `CHANNEL REQUEST` court, avec une cause
d'établissement (ici *Location Update*) et une référence aléatoire. Il applique le
**slotted-ALOHA** — retransmission après un délai aléatoire en cas de collision.

```mermaid
sequenceDiagram
    participant MS
    participant BTS
    MS->>BTS: RACH · CHANNEL REQUEST (cause=LU, ref aléatoire)
    Note over MS,BTS: si collision → backoff aléatoire → retransmission
    BTS-->>MS: (traité en étape 6)
```

```note

**Cadre 1 — `shunt_legit`.** ✅ **3** — `CHANNEL REQUEST: 00 (Location Update with
NECI)`. L'uplink du mobile émulé atteint la BTS.

```

```warning

**Cadre 2 — DSP natif.** ⬜ En aval du mur SCH.

```

---

## Étape 6 — Canal dédié (Immediate Assignment → SDCCH)

**Ce qui est nécessaire.** La BTS répond sur l'**AGCH** par un `IMMEDIATE
ASSIGNMENT` qui déplace le mobile de l'accès commun vers un **SDCCH** — un canal
dédié où va se dérouler toute la signalisation (auth, chiffrement, LU).

```mermaid
sequenceDiagram
    participant MS
    participant BTS
    participant BSC
    MS->>BTS: RACH (étape 5)
    BTS->>BSC: CHANNEL REQUIRED
    BSC->>BTS: CHANNEL ACTIVATION (SDCCH)
    BTS->>MS: AGCH · IMMEDIATE ASSIGNMENT (SDCCH/TS)
    Note over MS,BSC: le dialogue passe désormais sur le SDCCH
```

```note

**Cadre 1 — `shunt_legit`.** ✅ **7** établissements de canal dédié. Le SDCCH est
monté, la signalisation de couche 3 peut commencer.

```

```warning

**Cadre 2 — DSP natif.** ⬜ En aval du mur SCH.

```

---

## Étape 7 — Authentification (COMP128v1)

**Ce qui est nécessaire.** Le réseau défie le mobile : il envoie un `AUTHENTICATION
REQUEST` avec un **RAND** de 128 bits. La SIM calcule `A3/A8(RAND, Ki)` — ici
**COMP128v1** — et renvoie **SRES** (32 bits) dans `AUTHENTICATION RESPONSE`, tout
en dérivant la clé de session **Kc** (64 bits) utilisée ensuite pour le
chiffrement.

```mermaid
sequenceDiagram
    participant MS
    participant MSC
    participant HLR
    MSC->>HLR: demande de tuples (GSUP)
    HLR-->>MSC: RAND / SRES / Kc (A3A8 = COMP128v1, Ki)
    MSC->>MS: AUTHENTICATION REQUEST (RAND)
    MS->>MS: SRES, Kc = COMP128v1(RAND, Ki)
    MS->>MSC: AUTHENTICATION RESPONSE (SRES)
    Note over MSC: SRES attendu == SRES reçu ?
```

```note

**Cadre 1 — `shunt_legit`.** ✅ **3** cycles `AUTHENTICATION REQUEST/RESPONSE`,
`gsup:rx:auth_tuples = 10`, `algo 2G = COMP128v1`,
`Ki = 00112233445566778899aabbccdd0101`. La **signature COMP128v1 est lisible dans
le Kc** : `f7 3a 48 77 98 59 5c 00` — l'octet final nul et les deux bits de poids
faible du précédent à zéro trahissent les **54 bits utiles sur 64** (faiblesse
connue de COMP128v1).

```

```warning

**Cadre 2 — DSP natif.** ⬜ En aval du mur SCH.

```

---

## Étape 8 — Chiffrement A5/1

**Ce qui est nécessaire.** Muni de **Kc**, le réseau ordonne le chiffrement de la
voie radio : `CIPHERING MODE COMMAND (algo=A5/1)`. Le mobile bascule sa couche 1 en
A5/1 et confirme par `CIPHERING MODE COMPLETE`. À partir de là, l'air est chiffré.

```mermaid
sequenceDiagram
    participant MS
    participant BSC
    BSC->>MS: CIPHERING MODE COMMAND (sc=1, algo=A5/1)
    MS->>MS: active A5/1 avec Kc (dérivé étape 7)
    MS->>BSC: CIPHERING MODE COMPLETE
    Note over MS,BSC: voie radio chiffrée
```

```note

**Cadre 1 — `shunt_legit`.** ✅ **7 × `CIPHERING MODE COMMAND (sc=1, algo=A5/1
cr=1)`** + 7 × `COMPLETE`. Côté BSC : `encryption a5 1`. Le chiffrement est bien
actif sur l'interface air.

```

```warning

**Cadre 2 — DSP natif.** ⬜ En aval du mur SCH.

```

---

## Étape 9 — Location Update Accept (+ TMSI)

**Ce qui est nécessaire.** Signalisation authentifiée et chiffrée, le réseau
accepte l'enregistrement : `LOCATION UPDATING ACCEPT`, met à jour le VLR/HLR et
réalloue un **TMSI** (identité temporaire) pour ne plus exposer l'IMSI en clair.

```mermaid
sequenceDiagram
    participant MS
    participant MSC
    participant HLR
    MS->>MSC: LOCATION UPDATING REQUEST
    MSC->>HLR: UPDATE LOCATION (GSUP)
    HLR-->>MSC: INSERT SUBSCRIBER DATA / ACK
    MSC->>MS: LOCATION UPDATING ACCEPT (lai=001-01-1)
    MSC->>MS: TMSI REALLOCATION COMMAND
    MS->>MSC: TMSI REALLOCATION COMPLETE
```

```note

**Cadre 1 — `shunt_legit`.** ✅ **1** — `LOCATION UPDATING ACCEPT (lai=001-01-1)`,
TMSI réalloué (ex. `0719E3FE`). Le mobile est **enregistré** et joignable.

```

```warning

**Cadre 2 — DSP natif.** ⬜ En aval du mur SCH. C'est l'étape charnière : en natif,
c'est elle qui **expire** (`T3211`) quand on lance par la mauvaise porte, faute de
la chaîne complète.

```

---

## Étape 10 — Appel voix (TCH/F)

**Ce qui est nécessaire.** Pour la voix, le réseau bascule le mobile sur un
**TCH/F** (Traffic Channel Full-rate). La signalisation d'appel **CC** (Call
Control) déroule `SETUP → CALL PROCEEDING → ALERTING → CONNECT`, puis le codec
plein débit (**FR**) transporte l'audio via RTP/MGW.

```mermaid
sequenceDiagram
    participant A as 10001 (appelant)
    participant NET as MSC / MGW
    participant B as 10002 (appelé)
    A->>NET: SETUP
    NET->>B: SETUP
    B->>NET: CALL CONFIRMED
    B->>NET: ALERTING
    NET->>A: ALERTING
    B->>NET: CONNECT
    NET->>A: CONNECT
    A->>NET: CONNECT ACK
    Note over A,B: état ACTIVE · audio codec FR (GAPK)
```

```note

**Cadre 1 — `shunt_legit`.** ✅ Appel **10001 ↔ 10002** abouti — les machines à
états CC des deux côtés atteignent `ACTIVE`, audio **GAPK codec `fr`** dans les
deux sens. Les deux abonnés sont sur **deux cellules distinctes** (un QEMU Calypso,
un faketrx) : c'est un vrai appel inter-cellules.

```

```warning

**Cadre 2 — DSP natif.** ⬜ En aval du mur SCH.

```

---

## Étape 11 — SMS (MO / MT)

**Ce qui est nécessaire.** Le SMS voyage sur la signalisation (SDCCH/SACCH), pas sur
un canal voix. **MO** (Mobile Originated) : le mobile émet un `SMS-SUBMIT` remonté
au SMSC ; **MT** (Mobile Terminated) : le SMSC pousse un `SMS-DELIVER` vers le
mobile. Chaque sens est acquitté (`CP-ACK`, `RP-ACK`).

```mermaid
sequenceDiagram
    participant MS
    participant MSC
    participant SMSC
    Note over MS,SMSC: MO — mobile → réseau
    MS->>MSC: CP-DATA (SMS-SUBMIT)
    MSC->>SMSC: MO-forwardSM
    SMSC-->>MSC: RP-ACK
    MSC-->>MS: CP-ACK
    Note over MS,SMSC: MT — réseau → mobile
    SMSC->>MSC: MT-forwardSM (SMS-DELIVER)
    MSC->>MS: CP-DATA
    MS-->>MSC: RP-ACK
```

```note

**Cadre 1 — `shunt_legit`.** ✅ Les **deux sens, 0 erreur**. La boîte de réception
du mobile (`~/.osmocom/bb/sms.txt`) contient bien les messages MO et MT.

```

```warning

**Cadre 2 — DSP natif.** ⬜ En aval du mur SCH.

```

---

## Synthèse

```mermaid
flowchart LR
    subgraph SHUNT["shunt_legit — ✅ de bout en bout"]
        direction TB
        s1["FB"] --> s2["SB"] --> s3["SI"] --> s4["camp"] --> s5["RACH"] --> s6["SDCCH"] --> s7["auth"] --> s8["A5/1"] --> s9["LU"] --> s10["voix + SMS"]
    end
    subgraph NATIF["DSP natif — la frontière du réel"]
        direction TB
        n1["FB ✅<br/>2026-08-24"] --> n2["SB / SCH 🔧<br/>mur actuel"] --> n3["reste ⬜"]
    end
```

Le mode `shunt_legit` **prouve la pile complète** (le firmware ARM tourne
réellement), mais gr-gsm démodule : il ne dit rien du DSP. Le mode `native`
**dit la vérité sur l'acquisition** — et il vient de franchir le **FB**. La
prochaine victoire, c'est le **SCH**.

---

*Modules liés : [7 — Lab GSM multi-opérateur](7-Lab-GSM-multiPLMN.md) ·
[8 — Émulation du baseband Calypso](8-QEMU-Calypso.md).*
