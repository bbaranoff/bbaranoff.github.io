# Télécom &amp; SDR

```tip

Parcours **télécom & radio logicielle** : monter un réseau GSM complet, émuler un
baseband réel et casser A5/1 — adossé à des projets open-source réels
([`osmo_egprs`](https://github.com/bbaranoff/osmo_egprs),
[`qemu-calypso`](https://github.com/bbaranoff/qemu-calypso),
[`a51_tools`](https://github.com/bbaranoff/a51_tools)).

```

| # | Module | Contenu |
|---|--------|---------|
| 1 | [Lab GSM multi-opérateur](1-Lab-GSM-multiPLMN.md) | Monter *N* opérateurs GSM interconnectés en SS7/IP — [`osmo_egprs`](https://github.com/bbaranoff/osmo_egprs) |
| 2 | [Émulation du baseband Calypso](2-QEMU-Calypso.md) | Faire tourner le vrai firmware GSM sans matériel — [`qemu-calypso`](https://github.com/bbaranoff/qemu-calypso) |
| 3 | [GSM étape par étape](3-GSM-etape-par-etape.md) | L'attachement d'un mobile, étape par étape : *shunt* vs DSP natif |
| 4 | [Casser A5/1](4-A5-1-cracking.md) | De la capture `.cfile` au Kc — [`a51_tools`](https://github.com/bbaranoff/a51_tools) |

```note

Se lit dans l'ordre 1 → 2 → 3 → 4, mais chaque module est autonome. Le module 3
est le fil rouge : il déroule toute la procédure d'attachement GSM et confronte, à
chaque étape, la version qui *marche* (l'hôte démodule) à la version qui dit la
*vérité* (le vrai DSP Calypso).

```
