# Bastien Baranoff — SDR & Cybersécurité

```tip

The quieter you become, the more you are able to hear

```

> **Labo public de cybersécurité en radio logicielle (SDR).** Cours, projets et
> outils — du **GSM** au **baseband émulé**, de la **cryptanalyse** à la **LoRa**.
> Tout est reproductible ; le code vit sur
> [github.com/bbaranoff](https://github.com/bbaranoff).

## 🛰️ À la une — GSM de A à Z, sans matériel

Deux projets open-source qui, ensemble, montent **un réseau GSM complet** et **émulent le baseband d'un vrai téléphone** — puis un cours qui déroule chaque étape.

- **[`qemu-calypso`](https://github.com/bbaranoff/qemu-calypso)** — émule le baseband **TI Calypso** (Motorola C1xx / Compal E88) dans QEMU : un **ARM** exécute le firmware osmocom-bb *non patché* et un **DSP TMS320C54x** exécute la *vraie mask-ROM TI*, reliés par la mailbox `0xFFD00000`.
- **[`osmo_egprs`](https://github.com/bbaranoff/osmo_egprs)** — un réseau GSM **multi-opérateur** interconnecté en **SS7/IP**, entièrement conteneurisé (« un DHCP pour SS7 »).

```danger

**Point d'avancement (2026-08-24).** En mode `shunt_legit`, la pile GSM tourne **de bout en bout** — camp, Location Update, auth COMP128v1, **A5/1**, SMS et **appel voix avec audio**. En mode `native`, **le Frequency Burst est désormais acquis par le vrai DSP** (437 transitions mesurées, sans injection) ; le mur suivant est le décodage du SCH.

```

## 🗺️ Plan du site

### 📚 Cours

- **[Méthodes](cours/methodes/)** — Agile · UML · Git
- **[Télécom & SDR](cours/telco/)** —
  [Lab GSM multi-opérateur](cours/telco/1-Lab-GSM-multiPLMN.md) ·
  [Émulation du baseband Calypso](cours/telco/2-QEMU-Calypso.md) ·
  [GSM étape par étape](cours/telco/3-GSM-etape-par-etape.md) ·
  [Casser A5/1](cours/telco/4-A5-1-cracking.md)

### 🧪 Projets

- **[Vue d'ensemble des attaques radio](projects/0-abstract_radio.md)** — le panorama
- **[Telco Stuff](projects/telco.md)** — redirection LTE/5G-NSA → 2G · impersonation
- **[Radio Stuff](projects/radio_stuff.md)** — LoRa (traqueur GPS) · ADS-B
- **[Cryptanalyse](projects/cryptanalyse.md)** — TEA1 · DST80
- **[QEMU-Calypso](projects/qemu-calypso.md)** — émulation du baseband GSM
- **[Catalogue complet](projects/)** — tous les dépôts, classés par domaine

### 🎨 & 👤

[Exemples](exemples/) (wallpapers) · **[Who am I ?](whoami.md)** (parcours, expérience,
contributions) · [Archives](archives/) · [Privacy](privacy.md)

## Cité en recherche académique

Mon travail sur les attaques de redirection LTE est référencé dans une publication de
la **Gdańsk University of Technology** (2021), qui a utilisé mon image Docker et cite
mon GitHub en référence **[29]**. Détails et autres mentions →
**[Who am I ?](whoami.md)**.

---

*Nouveau ici ? Commence par le [cours GSM étape par étape](cours/telco/3-GSM-etape-par-etape.md)
ou l'[abstract des attaques radio](projects/0-abstract_radio.md). Pour me connaître :
[Who am I ?](whoami.md).*
