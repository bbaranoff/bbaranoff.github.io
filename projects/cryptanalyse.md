# Cryptanalyse — TEA1 & DST80

> Deux chiffrements du monde réel ramenés à un **brute-force GPU pratique** :
> **TEA1** (radio professionnelle TETRA) et **DST80** (clés de voiture / RFID).
> Voir aussi [Casser A5/1](../cours/telco/4-A5-1-cracking.md) et la
> [vue d'ensemble des attaques radio](0-abstract_radio.md).

```danger

**Cadre légal.** Ces outils sont fournis à des fins **éducatives et de recherche en
cybersécurité**. Intercepter ou décoder des communications, ou cloner un
transpondeur, **sans autorisation** est illégal dans la plupart des juridictions.
L'utilisateur est seul responsable de l'usage qu'il en fait.

```

---

# TEA1 — brute-force de clé (OpenCL)

Outil de recherche de clé pour **TEA1**, l'un des chiffrements de la radio
professionnelle **TETRA**. Il exploite la puissance parallèle du **GPU** via
**OpenCL** pour parcourir l'intégralité de l'espace de clé **32 bits** en un temps
record.
Dépôt : [`tea1-cracker`](https://github.com/bbaranoff/tea1-cracker).

## Principe — attaque à texte clair connu (KPA)

TEA1 est un chiffrement **de flux** : `chiffré = clair ⊕ keystream`. Si l'on dispose
d'un fragment du flux chiffré **et** que l'on connaît (ou devine) le clair
correspondant, on isole le **keystream** ; le cracker teste alors les clés
candidates jusqu'à reproduire ce keystream.

- **Reconstruction de l'IV** — `build_iv` reconstitue le vecteur d'initialisation à
  partir des paramètres de trame (timeslot, frame number, direction…).
- **Parallélisation GPU** — l'espace de clés est découpé en *batches* ; le kernel
  OpenCL teste des milliers de clés simultanément.
- **Validation 64 bits** — au lieu de 32 bits, le script vérifie **64 bits** de
  keystream pour éliminer les collisions (« fausses alertes ») et garantir que la
  clé trouvée est l'unique bonne clé.

## Utilisation

Prérequis : un **GPU compatible OpenCL**, Python 3 (`pyopencl`, `numpy`).

```bash
python crack_tea1.py <TN> <HN> <MN> <FN> <SN> <Direction> <Keystream_Hex>
```

- `TN` `HN` `MN` `FN` `SN` — numéros de trames et slots (Time / Hyper / Macro /
  Frame numbers).
- `Direction` — `0` (uplink) ou `1` (downlink).
- `Keystream_Hex` — les 16 premiers caractères hexadécimaux du keystream extrait.

```bash
python tea1_opencl_crack.py 1 110 30 06 1 0 0BE7FE9AE1EA459F866919C9E2EA1E11A77A4493D658A419...
```

## Impact & limites

- **Vitesse** — tout l'espace 32 bits en quelques **minutes** (voire secondes) sur
  un GPU milieu de gamme, contre plusieurs heures sur CPU.
- **Sécurité** — avec seulement ~**32 bits** d'entropie effective (faiblesse de
  classe *backdoor*, cf. *TETRA:BURST*), TEA1 ne résiste pas à une analyse
  computationnelle moderne.
- **Limite** — il faut identifier au moins **8 octets** de clair connu (en-têtes
  LLC / IP) pour extraire le keystream.

---

# DST80 — reversing & brute-force (OpenCL)

Récupération des clés **TI DST80** (*Digital Signature Transponder* — immobiliseurs
et clés mains-libres automobile / RFID) via **OpenCL**. Démontre comment des
faiblesses d'architecture et des **constantes constructeur** ramènent la marge
théorique de **80 bits** à un brute-force **pratique**.
Dépôt : [`dst80_reversing`](https://github.com/bbaranoff/dst80_reversing) —
d'après [*Dismantling DST80* (Wouters et al., IACR TCHES 2020)](https://tches.iacr.org/index.php/TCHES/article/view/8546).

## Pourquoi c'est cassable

La clé de 80 bits est scindée en deux moitiés de 40 bits — **KL** (Key Left) et
**KR** (Key Right). Mais l'entropie réellement déployée est bien moindre :

- **Contrainte de symétrie** — souvent `KR = complément inversé de KL` : l'espace
  est **divisé par deux**.
- **Constantes constructeur** — sur les 80 bits, ~**32 bits** sont des constantes
  fixes propres au fabricant.
- **Espace réduit** — en combinant, la complexité tombe à ~**2³²** (selon les
  constantes connues).

### Stratégie en paliers (méthode IACR)

1. **Constantes inconnues** — sur un GPU d'entrée (RTX 3050 Ti), retrouver une clé
   complète avec un octet inconnu prend ~**300 min (5 h)**.
2. **Constantes connues** — l'espace tombe à ~**1 min**.
3. **Changement de constructeur** — on ré-extrait les constantes **une** fois, puis
   retour à ~1 min par clé.

**Matériel** — GPU OpenCL (NVIDIA / AMD / Intel) ; testé sur RTX 3050 Ti à
~**35 Mkeys/s**.

## Scripts

| Fichier | Rôle |
|---|---|
| `dst80_fast.py` | recherche rapide avec octet constructeur fixe (`0x2f`) |
| `dst80_constructor.py` | passe deux octets constructeur (`m2`, `m1`) en arguments |
| `dst80_reverse.py` | recherche pleine (jusqu'à 5 octets) pour identifier les constantes inconnues |
| `dst80_constants.py` | récupère les **constantes constructeur** à partir d'un **numéro de série** connu — espace 2²⁴ |
| `generate.py` | générateur de **signature 24 bits** (dérive KR depuis KL) |
| `*.cl` | kernels OpenCL (simulation du chiffre DST80) |

## Utilisation

```bash
pip install -r requirements.txt

# recherche rapide (suffixe constructeur connu 0x2f)
python dst80_fast.py <c1> <t1> <c2> <t2>

# octets constructeur connus (ex. d1 2f)
python dst80_constructor.py <c1> <t1> <c2> <t2> d1 2f

# découverte pleine (5 octets variables)
python dst80_reverse.py <c1> <t1> <c2> <t2> 4228250625
```

### Générateur de signature

`generate.py` calcule la **réponse 24 bits** d'un défi DST80, en dérivant
automatiquement **KR** depuis **KL** (`KR` = inverse octet par octet de `KL`) :

```text
python generate.py --kl 0xdeadbeef00 --challenge 0xcafebabe00
  Key Left (KL)    0xdeadbeef00
  Key Right (KR)   0xff10415221
  Challenge        0xcafebabe00
  SIGNATURE (RES)  0xaeecc2
```

Récupération de clé à **deux défis** (RTX 4090, ~26 s sur 2³²) :

```text
python dst80_reverse.py 0xcafebabe00 0xaeecc2 0xcafebabe01 0x6a1bfc 4228250625
Bruteforcing with GPU : NVIDIA GeForce RTX 4090 Laptop GPU
100%|██████████████████████| 4228250625/4228250625 [00:26<00:00, 157150855 keys/s]
1 MATCH TROUVÉ : kl=0xdeadbeef00, kr=0xff10415221
```

### Récupération des constantes (numéro de série connu)

`dst80_constants.py` est l'étape d'**extraction des constantes** de l'attaque en
paliers — la contrepartie logicielle d'un dump par *firmware glitching*. Contrairement
aux autres scripts, il ne suppose **pas** la diagonale `KR = revcomp(KL)` : il prend
le **numéro de série** du transpondeur (lisible publiquement) comme entrée fixe et
brute-force uniquement les **constantes constructeur**, dérivant KL et KR via
`derive_keys(serial, c0, c1, c2)`. Comme l'entropie d'un schéma dérivé du numéro de
série vit entièrement dans ces constantes, l'espace s'effondre à **2²⁴** (~0,1 s sur
RTX 4090). Une fois les constantes connues, tout transpondeur du même constructeur
se calcule **directement** depuis son numéro de série — plus aucun brute-force.

```bash
python dst80_constants.py <serial> <c1> <t1> <c2> <t2>
# espace par défaut : 2^24 (3 octets de constante) — passer 4294967296 pour 2^32
```

```warning

**Vous devez fournir la dérivation.** Le bloc `derive_keys()` de
`dst80_constants.cl` est livré comme **placeholder illustratif** et ne correspond à
aucun constructeur réel. Remplacez-le par la vraie fonction de diversification de
clé rétro-conçue du fabricant cible (Wouters et al., *Dismantling DST80*, IACR TCHES
2020) avant tout usage sur des captures réelles. Validez d'abord le harnais de bout
en bout : générez deux paires défi/réponse depuis un numéro de série + des
constantes connus, puis confirmez que le script retrouve **exactement** ces
constantes.

```
