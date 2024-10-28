# How do this Portfolio was built ?

Créer un site web statique pour un portfolio est un projet passionnant qui permet de mettre en valeur vos compétences et réalisations. Voici un plan de travail (TP) détaillé pour vous guider à travers le processus, depuis la conception jusqu'à la mise en ligne.

### Objectifs du TP
- Créer un site web statique pour présenter votre portfolio.
- Utiliser HTML, CSS et éventuellement JavaScript pour améliorer l’interactivité.
- Apprendre à organiser les fichiers et à structurer le contenu.
- Déployer le site sur une plateforme gratuite (comme GitHub Pages).

### 1. **Planification du Contenu**

Avant de commencer à coder, il est important de planifier le contenu de votre portfolio. Voici quelques sections que vous pourriez inclure :

- **Page d'accueil :** Présentation brève, photo, et slogan.
- **À propos :** Une section sur vous-même, vos compétences et votre expérience.
- **Projets :** Un portfolio de vos travaux, avec des descriptions et des liens vers chaque projet.
- **Compétences :** Liste de vos compétences techniques et outils que vous maîtrisez.
- **Contact :** Un formulaire de contact ou des informations sur la façon de vous joindre.

### 2. **Conception du Site**

#### a. **Wireframe**
Créez un wireframe (croquis) de votre site. Cela peut être fait sur papier ou à l'aide d'outils en ligne comme Figma ou Adobe XD. Définissez la mise en page et l'organisation des sections.

#### b. **Choix des Couleurs et des Polices**
Sélectionnez une palette de couleurs et des polices qui correspondent à votre style. Utilisez des outils comme Adobe Color ou Google Fonts pour vous aider dans ce choix.

### 3. **Développement du Site**

#### a. **Structure de Fichiers**
Organisez vos fichiers de projet. Voici une structure de base :

```
/portfolio
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── css
│   └── styles.css
│
├── js
│   └── scripts.js
│
└── images
    ├── profile.jpg
    └── project1.jpg
```

#### b. **HTML**
Créez le fichier `index.html` et ajoutez la structure de base HTML. Voici un exemple de squelette :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Mon Portfolio</title>
</head>
<body>
    <header>
        <h1>Bienvenue sur mon Portfolio</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="about.html">À propos</a></li>
                <li><a href="projects.html">Projets</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>À propos de moi</h2>
            <p>Une brève description de vous-même.</p>
        </section>
        
        <section>
            <h2>Mes Projets</h2>
            <ul>
                <li><a href="#">Projet 1</a></li>
                <li><a href="#">Projet 2</a></li>
            </ul>
        </section>
    </main>
    
    <footer>
        <p>© 2024 Mon Nom</p>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>
```

#### c. **CSS**
Créez un fichier `styles.css` pour styliser votre site. Voici un exemple simple :

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #35424a;
    color: #ffffff;
    padding: 10px 0;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

a {
    color: #ffffff;
    text-decoration: none;
}
```

#### d. **JavaScript (optionnel)**
Si vous souhaitez ajouter de l'interactivité, créez un fichier `scripts.js`. Par exemple, vous pourriez ajouter un script pour gérer un formulaire de contact.

### 4. **Test du Site**

Une fois le développement terminé, ouvrez le fichier `index.html` dans votre navigateur pour tester le site. Vérifiez que toutes les pages s'affichent correctement et que les liens fonctionnent.

### 5. **Déploiement du Site**

#### a. **Hébergement sur GitHub Pages**
1. **Créer un dépôt GitHub :** Créez un nouveau dépôt et téléversez vos fichiers.
2. **Activer GitHub Pages :** Allez dans les paramètres du dépôt, trouvez la section "GitHub Pages" et choisissez la branche `main` pour déployer votre site.
3. **Accéder à votre site :** Votre site sera accessible à une URL comme `https://votre_nom_utilisateur.github.io/nom_du_depot`.

### 6. **Améliorations (optionnelles)**

- Ajoutez des animations CSS pour rendre le site plus attrayant.
- Intégrez des outils de référencement pour améliorer la visibilité du site.
- Utilisez des frameworks CSS comme Bootstrap pour un design réactif.

Pour ajouter le thème Jekyll *RTD* (Read the Docs) à votre site GitHub Pages, suivez ces étapes :

### 1. Créer un dépôt GitHub pour votre site

Si vous n'avez pas encore de dépôt pour héberger votre site, créez un dépôt sur GitHub, idéalement nommé `<votre-utilisateur>.github.io`. Ce nom de dépôt est important car il détermine l’URL de votre site, qui sera accessible à l'adresse `https://<votre-utilisateur>.github.io`.

### 2. Configurer Jekyll dans le dépôt

Si Jekyll n'est pas encore configuré, commencez par installer Jekyll localement, ce qui vous permettra de tester les modifications avant de les publier. Sinon, assurez-vous d'avoir un fichier `Gemfile` à la racine de votre dépôt, avec la configuration suivante :

```ruby
source "https://rubygems.org"
gem "jekyll"
gem "jekyll-theme-rtd"
```

### 3. Configurer le thème dans `_config.yml`

Dans le fichier `_config.yml` de votre dépôt, ajoutez le thème Jekyll RTD en modifiant ou en ajoutant l'entrée `theme` :

```yaml
theme: jekyll-theme-rtd
```

Ce fichier `_config.yml` peut également inclure d'autres options de configuration pour personnaliser le site, comme le titre du site, la description, etc.

### 4. Installer les dépendances et tester localement

Dans le terminal, exécutez les commandes suivantes pour installer les dépendances et tester votre site localement :

```bash
bundle install
bundle exec jekyll serve
```

Cela lancera votre site en local, accessible à l'adresse `http://localhost:4000`, pour vérifier que le thème s'affiche correctement.

### 5. Pousser le code sur GitHub

Une fois les modifications testées, poussez le code vers votre dépôt GitHub :

```bash
git add .
git commit -m "Ajout du thème Jekyll RTD"
git push origin main
```

Après cela, GitHub Pages devrait automatiquement générer votre site en utilisant le thème *RTD*.

### 6. Vérifier la publication

Accédez à `https://<votre-utilisateur>.github.io` pour voir votre site en ligne avec le thème *RTD*. Le déploiement peut parfois prendre quelques minutes.

Et voilà ! Votre site GitHub Pages utilise maintenant le thème *RTD*.
