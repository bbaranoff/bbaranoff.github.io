# Projets

```tip

Catalogue unifié de mes projets de cybersécurité en **radio logicielle** (SDR) —
pages détaillées et dépôts, mélangés par domaine. Vue d'ensemble des attaques :
[Abstract radio](0-abstract_radio.md). Théorie : [cours](../cours/). Code :
[github.com/bbaranoff](https://github.com/bbaranoff).

```

## 📡 Télécom & réseaux mobiles

| Projet / dépôt | Description |
|----------------|-------------|
| [**2G IMSI Catcher**](1-IMSI_Catcher.md) | Fausse BTS Osmocom, capture d'IMSI — le 2G n'authentifie pas le réseau. Théorie & lab : [cours Télécom](../cours/telco/). |
| [osmo_egprs](https://github.com/bbaranoff/osmo_egprs) | Réseau GSM **multi-opérateur** interconnecté en SS7/IP, conteneurisé (« un DHCP pour SS7 »). → [cours](../cours/telco/1-Lab-GSM-multiPLMN.md) |
| [srsran_4G_RTE](https://github.com/bbaranoff/srsran_4G_RTE) | « IMSI catcher reloaded », sur srsRAN_4G. |
| [telco_install_sh](https://github.com/bbaranoff/telco_install_sh) | Scripts d'installation d'un *network-in-the-box* 2G complet. |
| [osmo-GUI](https://github.com/bbaranoff/osmo-GUI) | Front-end web (node.js / socket.io) pour un Osmocom *Network-in-the-Box*. |
| [osmocombb-ansible](https://github.com/bbaranoff/osmocombb-ansible) | Automatisation **Ansible** d'OsmocomBB / CalypsoBTS. |
| [OpBTS-LimeMini](https://github.com/bbaranoff/OpBTS-LimeMini) | OpenBTS-UMTS patché pour **LimeSDR Mini**. |
| [calypsogprs](https://github.com/bbaranoff/calypsogprs) | Fichiers **GPRS** pour CalypsoBTS. |
| [**Impersonation**](4-Impersonnate.md) · [HeArTbReAkEr](https://github.com/bbaranoff/HeArTbReAkEr) | Usurpation d'abonné sur le réseau (Osmocom, Docker). |
| [**Redirection LTE/5G-NSA → 2G**](3-Redirect.md) | Forcer une victime d'un réseau moderne vers GSM/EDGE. *Cité en recherche académique.* |
| [NSA_LTE_redirect_to_EDGE](https://github.com/bbaranoff/NSA_LTE_redirect_to_EDGE) | Environnement SDR **complet** LTE(4G) → EDGE(2G) via Osmocom + srsRAN_4G patché, conteneurisé. |
| [redirect0r](https://github.com/bbaranoff/redirect0r) | Redirection LTE/5G-NSA → EDGE/GSM en `docker compose`. |
| [redir5Gted2Gsm](https://github.com/bbaranoff/redir5Gted2Gsm) | Redirection 5G-NSA → GSM (base srsRAN). |
| [srslte_to_gsm](https://github.com/bbaranoff/srslte_to_gsm) | Downgrade d'un LTE srsLTE vers GSM. |
| [openLTE2GSM](https://github.com/bbaranoff/openLTE2GSM) | Workflow d'installation de la redirection LTE → GSM. |
| [LTE-Redirection_Attack](https://github.com/bbaranoff/LTE-Redirection_Attack) | Le PoC de redirection **d'origine** (historique — voir les versions récentes ci-dessus). |
| [LTE-Cell-ScannerBladeRF2](https://github.com/bbaranoff/LTE-Cell-ScannerBladeRF2) | Scanner de cellules LTE pour **BladeRF 2.0**. |
| [callerid_spoofing](https://github.com/bbaranoff/callerid_spoofing) | Méthodologie de spoof du **caller ID** (SIP, option CLIP no-screening). |
| [2RFA](https://github.com/bbaranoff/2RFA) | PoC de capture de codes **2FA** en RF. |

## 🔓 Cryptanalyse

| Projet / dépôt | Description |
|----------------|-------------|
| [**Casser A5/1**](2-Encryption.md) | Récupérer le **Kc** d'une session GSM chiffrée. Méthode : [cours](../cours/telco/4-A5-1-cracking.md). |
| [a51_tools](https://github.com/bbaranoff/a51_tools) | Attaque **A5/1** à plaintext connu + tables arc-en-ciel (Kraken/deka). |
| [A53](https://github.com/bbaranoff/A53) | Cracker **A5/3** (KASUMI) accéléré **CUDA** — bench 2³² clés, table coût/temps. |
| [tea1-cracker](https://github.com/bbaranoff/tea1-cracker) | Brute-force **OpenCL** de la clé **TEA1** (TETRA) : espace de 32 bits épuisé par KPA. |
| [dst80_reversing](https://github.com/bbaranoff/dst80_reversing) | Suite OpenCL de récupération de clés **TI DST80** — le 80 bits ramené à un brute-force pratique (ex-[dst80](https://github.com/bbaranoff/dst80)). |
| [testa3a8](https://github.com/bbaranoff/testa3a8) | Bancs de test des algos **A3/A8** (COMP128). |

## 📻 Radio & SDR

| Projet / dépôt | Description |
|----------------|-------------|
| [**LoRa**](5-LoRa.md) · [lora](https://github.com/bbaranoff/lora) | LoRaWAN de bout en bout ; automatisation d'install **ChirpStack + ThingsBoard**. |
| [ttn-gps](https://github.com/bbaranoff/ttn-gps) | Traqueur **GPS** via LoRaWAN / The Things Network. |
| [**ADS-B**](6-Adsb.md) | Réception et décodage des trames avions ADS-B en SDR. |
| [**APOGÉ**](7-Apogee.md) | Agriculture de précision : capteurs, LoRa, gestion de l'eau/pesticides. |
| [software-defined-radio](https://github.com/bbaranoff/software-defined-radio) | Code source de [software-defined-radio.com](https://software-defined-radio.com). |
| [scripts-rPi](https://github.com/bbaranoff/scripts-rPi) | Scripts SDR pour Raspberry Pi. |

## 🧠 IA

| Projet / dépôt | Description |
|----------------|-------------|
| [llm-bridge](https://github.com/bbaranoff/llm-bridge) | Pont entre l'outillage télécom et un **LLM local** (Ollama). |
| [telco_ml](https://github.com/bbaranoff/telco_ml) | **Machine learning** appliqué au télécom. |
| [emotions](https://github.com/bbaranoff/emotions) | Détection d'émotions (Python). |

## 🐞 Sécurité système & CVE

| Projet / dépôt | Description |
|----------------|-------------|
| [CVE-2022-0847](https://github.com/bbaranoff/CVE-2022-0847) | PoC « **Dirty Pipe** » — élévation de privilèges locale Linux. |
| [CVE-2023-4863](https://github.com/bbaranoff/CVE-2023-4863) | PoC dépassement de tas **libwebp**. |
| [brute_ubuntu_lpe](https://github.com/bbaranoff/brute_ubuntu_lpe) | Brute-force d'élévation de privilèges Ubuntu. |

## Panorama des protocoles radio

Un protocole, au sens informatique, est « un ensemble de règles régissant l'échange
ou la transmission de données entre appareils » ([Oxford](https://www.oed.com/)). Le
but : faire voyager une information de A vers B (et souvent retour), sous
contraintes — énergie, portée, débit utile, **sécurité**, latence et taux d'erreur.

| Protocole | Usage principal |
|-----------|-----------------|
| RFID | Traçabilité / échange d'information statique |
| NFC | Opérations bancaires / échange d'information statique |
| GSM · GPRS · EDGE | Appels / SMS / Internet |
| UMTS · HSPA · HSPA+ | Appels / SMS / Internet |
| LTE · LTE-Advanced | Appels / SMS / Internet / IoT |
| 5G SA · NSA | Appels / SMS / Internet / IoT |
| Wi-Fi | Internet / LAN / appels (VoWiFi) |
| Bluetooth | Échange de données / appairage |
| LoRa · SigFox | Échange de données / IoT |
| GPS · Galileo | Géolocalisation |

```note

Le détail des couches GSM (trame TDMA, bursts, canaux logiques, procédure
d'attachement) et le plan de fréquences des opérateurs sont traités dans le cours
[GSM étape par étape](../cours/telco/3-GSM-etape-par-etape.md). Tables arc-en-ciel
A5/1 : [infocon.org](https://infocon.org/rainbow%20tables/A51/).

```
