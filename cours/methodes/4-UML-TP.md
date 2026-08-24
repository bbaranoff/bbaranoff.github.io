# UML Travaux Pratiques

## Créer un diagramme de classe pour la création d'un site web

Description des classes du diagramme UML

1. **Page** : Classe principale représentant chaque page du site.
   - Attributs : `titre`, `url`, `contenu`
   - Méthodes : `afficher()`

2. **Contenu** : Contient le texte, les images, et les vidéos qui seront affichés sur chaque page.
   - Attributs : `texte`, `image`, `video`
   - Méthodes : `afficherTexte()`, `afficherImage()`, `afficherVideo()`

3. **Menu** : Classe pour gérer le menu de navigation entre les pages.
   - Attributs : `listePages`
   - Méthodes : `afficherMenu()`

4. **Footer** : Contient des informations de bas de page.
   - Attributs : `texteCopyright`, `liensExternes`
   - Méthodes : `afficherFooter()`

5. **Style** : Définit le style CSS utilisé par les différentes pages.
   - Attributs : `couleurFond`, `police`, `marge`
   - Méthodes : `appliquerStyle()`


## Créer un Diagramme de Séquence UML pour une Navigation de Page

Dans ce diagramme, l'utilisateur interagit avec la page, ce qui entraîne des appels de différentes méthodes pour afficher le contenu, le menu de navigation, et le pied de page.

Scénario : Chargement et Affichage d'une Page Web Statique

1. **Acteurs principaux** : `Utilisateur`, `Page`, `Contenu`, `Menu`, `Footer`, `Style`.
2. **Flux d'interaction** : L'utilisateur accède à une page, et la page appelle les différentes sections et le style pour se charger correctement.

Déroulement du Scénario

Voici les étapes d'interaction :

1. **Utilisateur** accède à la page via son navigateur.
2. La **Page** reçoit la requête et déclenche l'affichage.
3. **Page** appelle **Menu** pour afficher les liens de navigation.
4. **Page** appelle **Contenu** pour afficher le texte, les images et/ou les vidéos.
5. **Page** appelle **Footer** pour ajouter le pied de page.
6. **Page** applique **Style** pour styliser le contenu.

Un autre diagramme utile pour la conception d’un site web statique est le **diagramme de composants UML**. Ce diagramme montre les différentes parties d'un site web en tant que composants indépendants et décrit comment ils sont reliés entre eux. Ce type de diagramme est particulièrement utile pour visualiser les modules principaux du site et leur organisation.

## Créer un Diagramme de Composants UML pour un Site Web Statique

Un site web statique est souvent composé de plusieurs composants, comme les pages, les éléments de navigation, le contenu statique, le style CSS, et les fichiers de configuration. Voici les composants essentiels et leurs relations.

Principaux Composants

1. **Page Web (Index, About, Contact)** : Représente chaque page principale du site, telles que la page d'accueil (`index.html`), la page "À propos" (`about.html`), et la page de contact (`contact.html`).
2. **Menu** : Composant de navigation qui contient les liens vers les différentes pages.
3. **Contenu Statique** : Contient les images, textes et autres éléments statiques affichés sur les pages.
4. **Footer** : Composant pour le pied de page.
5. **CSS** : Définit le style général du site avec des fichiers CSS.
6. **Configuration** : Contient des fichiers de configuration, tels que `config.json` pour les paramètres du site.

Relations entre Composants

- **Dépendance** : Les pages web dépendent du menu, du footer, du contenu statique, et des fichiers CSS pour un affichage complet et stylisé.
- **Connexion** : Les pages sont liées entre elles via le composant Menu.

Un autre diagramme pertinent pour la conception d’un site web statique est le **diagramme de déploiement UML**. Ce diagramme montre l'architecture de déploiement physique du site web, notamment où les fichiers sont stockés et comment ils sont distribués entre différents serveurs ou environnements.

## Créer un Diagramme de Déploiement

Le diagramme de déploiement met en évidence l'architecture d'hébergement du site, souvent composée de plusieurs composants de stockage et de distribution.

Principaux Nœuds

1. **Client (Navigateur)** : Représente le dispositif de l’utilisateur final, où le site est affiché via un navigateur.
2. **Serveur Web** : Héberge les fichiers HTML, CSS, JavaScript, et autres contenus statiques. Peut être un serveur Nginx, Apache ou hébergé sur une plateforme cloud (comme AWS S3, Firebase Hosting).
3. **CDN (Content Delivery Network)** : Distribue le contenu statique (images, vidéos, fichiers CSS et JavaScript) à partir de serveurs proches de l’utilisateur pour réduire les temps de chargement.
4. **Serveur DNS** : Traduit le nom de domaine du site (ex : www.monsite.com) en adresse IP pour que le client puisse accéder au serveur web.

## Créer un Diagramme de votre choix (Bonus)
