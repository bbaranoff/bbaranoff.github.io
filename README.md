# bbaranoff.github.io

Portfolio et notes de recherche de **Bastien Baranoff** — *Cybersecurity in
Software Defined Radio*. Site Jekyll (thème read-the-docs) publié sur GitHub Pages :
<https://bbaranoff.github.io/>.

## Contenu

- **[Accueil](index.md)** — profil, expérience, contributions open-source et
  citations académiques.
- **[Cours](cours/)** — génie logiciel (Agile, UML, Git) **et** télécom/SDR :
  - [Lab GSM multi-opérateur](cours/7-Lab-GSM-multiPLMN.md) (`osmo_egprs`)
  - [Émulation du baseband Calypso](cours/8-QEMU-Calypso.md) (`qemu-calypso`)
  - [GSM étape par étape](cours/9-GSM-etape-par-etape.md)
  - [Casser A5/1](cours/10-A5-1-cracking.md) (`a51_tools`)
- **[Projets](projects/)** — IMSI catcher, chiffrement, redirection LTE→2G, LoRa, ADS-B…
- **[Archives](archives/)** — documents de référence.

## Développement local

```bash
bundle install
bundle exec jekyll serve   # http://127.0.0.1:4000
```

## Licence

Voir [LICENSE](LICENSE) (EUPL 1.2).
