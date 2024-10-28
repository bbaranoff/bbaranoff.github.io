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

### Conclusion

Ce TP vous a guidé à travers le processus de création d’un site web statique pour un portfolio. Cela vous permet de mettre en valeur vos compétences, vos projets, et de vous familiariser avec les technologies web fondamentales. N'hésitez pas à explorer et à personnaliser votre site selon vos préférences !
