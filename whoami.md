# Who am I ?

```tip

The quieter you become, the more you are able to hear

```

> Parcours, expérience et l'ensemble de mes contributions open-source. Le labo et
> les cours sont sur la [page d'accueil](index.md).

## Profile

| | |
|---|---|
| **Name** | Bastien Baranoff |
| **Focus** | Cybersecurity in Software Defined Radio |
| **Location** | Paris, France |
| **Email** | [bastienbaranoff@gmail.com](mailto:bastienbaranoff@gmail.com) |
| **GitHub** | [bbaranoff](https://github.com/bbaranoff) |
| **LinkedIn** | Bastien Baranoff |
| **Website** | [bbaranoff.github.io](https://bbaranoff.github.io/) |

## Languages

French — native · English — professional.

## Career

Physics → Electronics → Computer → Embedded → **Software Defined Radio**.

## Education

| Degree | Institution | Years |
|--------|-------------|-------|
| MSc, Electronics & Computers | University of Perpignan via Domitia | 2011–2013 |
| BSc, Computer Science | University of Perpignan via Domitia | 2020–2021 |

## Experience

| Role | Organization | Year | Notes |
|------|--------------|------|-------|
| Cybersecurity Research | Penthertz | 2024 | |
| Lecturer | University of Perpignan via Domitia | 2024 | |
| Developer | PROMES-CNRS | 2021 | LoRa(WAN) connection testing |
| Developer | Tata Advanced Systems | 2020 | Mobile security assessment |
| Teacher | Lycée Déodat de Séverac | 2017 | Éducation nationale |
| Electrical Engineering | PROMES-CNRS | 2013 | Junior research |

## Employers

<a href="https://www.tataadvancedsystems.com/"><img src="assets/tata.png" alt="Tata Advanced Systems" width="200"></a>
<a href="https://www.promes.cnrs.fr/"><img src="assets/cropped-PROMES-LONG-petit-pour-web.jpg" alt="PROMES-CNRS" width="200"></a>
<a href="https://penthertz.com/"><img src="assets/Penthertz_logo.png" alt="Penthertz" width="200"></a>
<a href="https://univ-perp.fr/"><img src="assets/upvd.png" alt="University of Perpignan" width="200"></a>

## Featured

- **MyriadRF** — [OTA OpenBSC setup, 80 Msps from a LimeSDR Mini, a satellite hunt & more](https://myriadrf.org/news/ota-openbsc-setup-scripts-80msps-from-a-limesdr-mini-a-satellite-hunt-and-more/) (×2).
- **X / Twitter** — [a clip in action](https://x.com/i/status/1763577169865826734).

## Cited in academic research

**M. Gronau, A. Bysewski, K. Kobierzyński, A. Trzebiatowski, J. Filipiak**,
*"Evaluation of 4G-LTE security and realization of a test stand for redirection
attack"*, **Gdańsk University of Technology**, Dept. of Radio Communication Systems
and Networks, 2021 — the team used my published Docker image and tooling for the LTE
redirection attack, citing my GitHub as reference **[29]**.
[Project page](https://projektgrupowy.eti.pg.gda.pl/editions/16/projects/4170/presentations/109).

Technical write-up — **Osmocom Forum** :
[Porting QEMU to Layer1 highram ELF in a no-RF Osmocom Network-in-the-Box](https://discourse.osmocom.org/t/porting-qemu-to-layer1-highram-elf-in-a-no-rf-osmocom-network-in-the-box-environment/).

## Open-source contributions

A selection of my public repositories, grouped by field. Full list on
[github.com/bbaranoff](https://github.com/bbaranoff) — projects détaillés dans la
[section Projets](projects/).

### 📡 LTE / 5G — downgrade & redirection

| Project | Description |
|---------|-------------|
| [LTE-Redirection_Attack](https://github.com/bbaranoff/LTE-Redirection_Attack) | Force a target UE onto an unsafe network (cited in academic research above). |
| [openlte](https://github.com/bbaranoff/openlte) | OpenLTE stack used as a base for redirection research. |
| [srslte_to_gsm](https://github.com/bbaranoff/srslte_to_gsm) | Downgrade path from srsLTE-based LTE to GSM. |
| [openLTE2GSM](https://github.com/bbaranoff/openLTE2GSM) | LTE → GSM redirection workflow. |
| [redir5Gted2Gsm](https://github.com/bbaranoff/redir5Gted2Gsm) | Redirect from 5G-NSA down to GSM. |
| [redirect0r](https://github.com/bbaranoff/redirect0r) | Dockerized redirection LTE/5G-NSA → EDGE/GSM. |
| [NSA_LTE_redirect_to_EDGE](https://github.com/bbaranoff/NSA_LTE_redirect_to_EDGE) | Full 5G-NSA → EDGE workflow. |
| [LTE-Cell-ScannerBladeRF2](https://github.com/bbaranoff/LTE-Cell-ScannerBladeRF2) | LTE cell scanner for BladeRF 2.0. |

### 📶 2G / GSM — Osmocom, BTS & baseband

| Project | Description |
|---------|-------------|
| [qemu-calypso](https://github.com/bbaranoff/qemu-calypso) | QEMU emulation of the TI Calypso baseband (ARM + DSP). |
| [osmo_egprs](https://github.com/bbaranoff/osmo_egprs) | Multi-operator GSM network over SS7/IP, containerized. |
| [telco_install_sh](https://github.com/bbaranoff/telco_install_sh) | One-shot install scripts for a full 2G network-in-the-box. |
| [srsran_4G_RTE](https://github.com/bbaranoff/srsran_4G_RTE) | IMSI catcher, reloaded. |
| [osmo-GUI](https://github.com/bbaranoff/osmo-GUI) | Web front-end for an Osmocom network-in-the-box. |
| [osmocombb-ansible](https://github.com/bbaranoff/osmocombb-ansible) | Ansible automation for OsmocomBB / CalypsoBTS. |
| [HeArTbReAkEr](https://github.com/bbaranoff/HeArTbReAkEr) | Subscriber impersonation with Osmocom. |
| [calypsogprs](https://github.com/bbaranoff/calypsogprs) | GPRS support files for CalypsoBTS. |
| [OpBTS-LimeMini](https://github.com/bbaranoff/OpBTS-LimeMini) | OpenBTS on a LimeSDR Mini. |

### 🔐 Cryptanalysis

| Project | Description |
|---------|-------------|
| [a51_tools](https://github.com/bbaranoff/a51_tools) | A5/1 known-plaintext attack + rainbow tables (Kraken/deka). |
| [A53](https://github.com/bbaranoff/A53) | CUDA-accelerated A5/3 (KASUMI) cracker. |
| [tea1-cracker](https://github.com/bbaranoff/tea1-cracker) | OpenCL brute-force of the TETRA TEA1 cipher. |
| [dst80_reversing](https://github.com/bbaranoff/dst80_reversing) | Reversing the DST80 automotive keyless cipher (ex-[dst80](https://github.com/bbaranoff/dst80)). |

### 🐞 Vulnerability research

| Project | Description |
|---------|-------------|
| [CVE-2022-0847](https://github.com/bbaranoff/CVE-2022-0847) | "Dirty Pipe" Linux local privilege escalation PoC. |
| [CVE-2023-4863](https://github.com/bbaranoff/CVE-2023-4863) | libwebp heap buffer overflow PoC. |
| [brute_ubuntu_lpe](https://github.com/bbaranoff/brute_ubuntu_lpe) | Ubuntu local privilege escalation brute forcing. |

### ☎️ Signaling & fraud

| Project | Description |
|---------|-------------|
| [callerid_spoofing](https://github.com/bbaranoff/callerid_spoofing) | Methodology to spoof caller ID. |
| [2RFA](https://github.com/bbaranoff/2RFA) | Catching 2FA codes over RF (PoC). |

### 🛰️ SDR, IoT & misc

| Project | Description |
|---------|-------------|
| [software-defined-radio](https://github.com/bbaranoff/software-defined-radio) | Source of software-defined-radio.com. |
| [ttn-gps](https://github.com/bbaranoff/ttn-gps) | LoRaWAN / The Things Network GPS tracker. |
| [llm-bridge](https://github.com/bbaranoff/llm-bridge) | Bridge between telco tooling and a local LLM (Ollama). |
| [telco_story](https://github.com/bbaranoff/telco_story) | A written story of the telecommunications journey. |
