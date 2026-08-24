# Cours

```tip

Deux parcours réunis ici : un socle **génie logiciel** (méthodes agiles, UML, Git)
et un parcours **télécom & SDR** qui monte un réseau GSM complet, émule un baseband
réel et casse A5/1 — le tout adossé à des projets open-source réels.

```

## Parcours génie logiciel

| # | Module | Contenu |
|---|--------|---------|
| 1 | [Méthodes Agiles](1-Agile.md) | Scrum, Kanban, XP — cadres et cérémonies |
| 2 | [TP Agile](2-Agile-TP.md) | Organiser un projet de site portfolio en équipe |
| 3 | [Introduction à l'UML](3-UML.md) | Modélisation, diagrammes de classes et de séquence |
| 4 | [TP UML](4-UML-TP.md) | Modéliser un site web |
| 5 | [Introduction à Git](5-Git.md) | Versionnement, branches, collaboration |
| 6 | [TP Git](6-Git-TP.md) | De l'inscription GitHub à la mise en production |

## Parcours télécom & SDR

| # | Module | Contenu |
|---|--------|---------|
| 7 | [Lab GSM multi-opérateur](7-Lab-GSM-multiPLMN.md) | Monter *N* opérateurs GSM interconnectés en SS7/IP — [`osmo_egprs`](https://github.com/bbaranoff/osmo_egprs) |
| 8 | [Émulation du baseband Calypso](8-QEMU-Calypso.md) | Faire tourner le vrai firmware GSM sans matériel — [`qemu-calypso`](https://github.com/bbaranoff/qemu-calypso) |
| 9 | [GSM étape par étape](9-GSM-etape-par-etape.md) | L'attachement d'un mobile, étape par étape : *shunt* vs DSP natif |
| 10 | [Casser A5/1](10-A5-1-cracking.md) | De la capture `.cfile` au Kc — [`a51_tools`](https://github.com/bbaranoff/a51_tools) |

```note

Le parcours télécom se lit dans l'ordre 7 → 8 → 9 → 10, mais chaque module est
autonome. Le module 9 est le fil rouge : il déroule toute la procédure
d'attachement GSM et confronte, à chaque étape, la version qui *marche* (l'hôte
démodule) à la version qui dit la *vérité* (le vrai DSP Calypso).

```
