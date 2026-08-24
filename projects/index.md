# Projets

```tip

Projets de cybersécurité en **radio logicielle** (SDR) — réseaux mobiles 2G→5G,
cryptanalyse et radio bas-débit. Le code vit sur
[github.com/bbaranoff](https://github.com/bbaranoff) ; la théorie est traitée dans
les [cours](../cours/).

```

## Les projets

### 📡 Télécom & SDR

| Projet | En bref |
|--------|---------|
| [2G IMSI Catcher](1-IMSI_Catcher.md) | Monter une fausse BTS Osmocom et capturer les IMSI. Théorie et lab complet : [cours Télécom](../cours/telco/). |
| [Redirection LTE/5G-NSA → 2G](3-Redirect.md) | Forcer une victime d'un réseau moderne vers une couche GSM/EDGE non sûre. *Travail cité en recherche académique.* |
| [Impersonation](4-Impersonnate.md) | Usurper un abonné sur le réseau, avec Osmocom. |

### 🔓 Cryptanalyse

| Projet | En bref |
|--------|---------|
| [Casser A5/1](2-Encryption.md) | Récupérer le **Kc** d'une session GSM chiffrée. Méthode détaillée dans le cours [Casser A5/1](../cours/telco/4-A5-1-cracking.md). |

### 📻 Radio

| Projet | En bref |
|--------|---------|
| [LoRa](5-LoRa.md) | LoRaWAN / The Things Network : passerelle, end-device, remontée de données. |
| [ADS-B](6-Adsb.md) | Réception et décodage des trames avions ADS-B en SDR. |
| [APOGÉ](7-Apogee.md) | Agriculture de précision : capteurs, LoRa et gestion de l'eau/pesticides. |

### ➕ Catalogue complet

**[Projets divers](8-Divers.md)** — l'ensemble de mes dépôts publics, classés en
**Télécom**, **Cryptanalyse**, **IA** et **Radio**, avec les projets épinglés du
profil GitHub.

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
