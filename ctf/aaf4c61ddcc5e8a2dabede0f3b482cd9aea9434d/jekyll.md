# Guide : Installer Jekyll et créer une page GitHub Pages avec `github.io`

**Jekyll** est un générateur de site statique qui fonctionne parfaitement avec GitHub Pages, une plateforme qui permet d'héberger des sites web directement depuis un dépôt GitHub. Voici un guide complet pour installer Jekyll sur Ubuntu et créer un site GitHub Pages avec une URL `github.io`.

---

### 1. Prérequis

Avant d'installer Jekyll, vous devez avoir quelques éléments installés sur votre machine Ubuntu.

#### a. Installer Ruby

Jekyll est écrit en Ruby, donc vous devez d'abord installer Ruby et les dépendances nécessaires.

Ouvrez un terminal et exécutez les commandes suivantes pour installer Ruby et les dépendances :

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
```

#### b. Configurer les chemins d'accès à Ruby

Pour éviter des problèmes de permission lors de l'installation de Jekyll et des gems, il est recommandé de configurer un dossier spécifique pour les gems Ruby. Ajoutez ces lignes à votre fichier `.bashrc` (ou `.zshrc` si vous utilisez Zsh) pour configurer le répertoire d'installation de vos gems :

```bash
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Cela crée un répertoire `~/.gem` où les gems Ruby seront installés.

#### c. Installer Jekyll et Bundler

Une fois Ruby installé, vous pouvez installer Jekyll et Bundler (un gestionnaire de dépendances pour Ruby) via la commande suivante :

```bash
gem install jekyll bundler
```

### 2. Créer un nouveau site Jekyll

#### a. Créer un nouveau projet Jekyll

Une fois Jekyll installé, vous pouvez créer un nouveau site en utilisant la commande suivante :

```bash
jekyll new mon-site
```

Cette commande crée un répertoire appelé `mon-site` avec la structure de base d'un site Jekyll, y compris les fichiers nécessaires pour démarrer. 

#### b. Accéder au répertoire du site

Accédez au dossier du site que vous venez de créer :

```bash
cd mon-site
```

#### c. Lancer le serveur local Jekyll

Vous pouvez maintenant tester votre site localement. Pour cela, lancez le serveur Jekyll :

```bash
bundle exec jekyll serve
```

Le serveur démarre par défaut sur `http://localhost:4000`. Ouvrez votre navigateur et allez à cette adresse pour voir votre site localement.

### 3. Créer un dépôt GitHub pour votre site GitHub Pages

#### a. Créer un nouveau dépôt GitHub

1. Allez sur [GitHub](https://github.com/) et connectez-vous.
2. Créez un nouveau dépôt avec un nom du type `nom-utilisateur.github.io` (remplacez `nom-utilisateur` par votre nom d'utilisateur GitHub).

**Important** : Le nom du dépôt doit être exactement `nom-utilisateur.github.io` pour que GitHub Pages fonctionne.

#### b. Initialiser un dépôt Git dans votre répertoire local

Dans le répertoire du site Jekyll (`mon-site`), initialisez un dépôt Git :

```bash
git init
```

#### c. Ajouter le dépôt distant

Ajoutez l'URL de votre dépôt GitHub comme dépôt distant :

```bash
git remote add origin https://github.com/nom-utilisateur/nom-utilisateur.github.io.git
```

#### d. Ajouter et valider les fichiers

Ajoutez tous les fichiers de votre projet au dépôt Git et faites un commit :

```bash
git add .
git commit -m "Premier commit de mon site Jekyll"
```

#### e. Pousser les fichiers sur GitHub

Enfin, poussez les fichiers sur GitHub :

```bash
git push -u origin master
```

### 4. Configurer GitHub Pages

Une fois les fichiers poussés, vous devez activer **GitHub Pages** pour que votre site soit accessible en ligne.

1. Allez sur la page de votre dépôt GitHub (`https://github.com/nom-utilisateur/nom-utilisateur.github.io`).
2. Allez dans les **Paramètres** du dépôt.
3. Dans la section **GitHub Pages**, sélectionnez la branche `master` (ou `main` selon votre configuration) comme source pour GitHub Pages.
4. Enregistrez les modifications.

### 5. Accéder à votre site

Une fois que vous avez poussé le site sur GitHub et activé GitHub Pages, votre site sera accessible à l'URL suivante :

```
https://nom-utilisateur.github.io/
```

### 6. Personnaliser votre site Jekyll

#### a. Modifier la page d'accueil

La page d'accueil de votre site se trouve généralement dans le fichier `index.md` ou `index.html` dans le répertoire racine de votre projet Jekyll. Modifiez ce fichier pour personnaliser le contenu de votre page d'accueil.

#### b. Modifier la configuration du site

Le fichier `_config.yml` dans votre projet Jekyll est le fichier principal de configuration du site. Vous pouvez y modifier des paramètres comme le titre du site, la description, les liens de navigation, etc.

Exemple de fichier `_config.yml` :

```yaml
title: Mon Super Site
description: C'est mon site personnel construit avec Jekyll.
author: nom-utilisateur
theme: minima
```

### 7. Mettre à jour votre site

À chaque fois que vous apportez des modifications à votre site, vous devez valider ces modifications dans Git et les pousser vers GitHub.

1. Modifiez les fichiers sur votre machine.
2. Ajoutez les fichiers modifiés à Git :
   ```bash
   git add .
   ```
3. Faites un commit avec un message approprié :
   ```bash
   git commit -m "Mise à jour du site"
   ```
4. Poussez les modifications sur GitHub :
   ```bash
   git push origin master
   ```

### 8. Aller plus loin

- **Ajouter des pages supplémentaires** : Créez de nouvelles pages en ajoutant des fichiers `.md` ou `.html` dans le répertoire racine de votre projet.
- **Installer un thème Jekyll** : Jekyll dispose de nombreux thèmes que vous pouvez installer pour personnaliser l'apparence de votre site. Par exemple, vous pouvez installer le thème "Minima" qui est le thème par défaut, ou vous pouvez en choisir un autre depuis [Jekyll Themes](https://jekyllthemes.io/).

### Conclusion

En suivant ces étapes, vous avez installé Jekyll sur Ubuntu, créé un site localement, et l'avez déployé sur GitHub Pages. Vous avez désormais un site web accessible via l'URL `github.io`. N'hésitez pas à personnaliser et ajouter des fonctionnalités pour développer davantage votre site !
