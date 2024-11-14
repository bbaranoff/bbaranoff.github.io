# Diagrammes

### 1. **Diagramme de cas d'utilisation (Use Case Diagram)**

Le **diagramme de cas d'utilisation** montre les interactions entre les utilisateurs (acteurs) et les différentes fonctionnalités du système. Dans le contexte d'un portfolio, les acteurs peuvent être un visiteur du site, un administrateur ou un développeur.

#### Exemple de cas d'utilisation pour un portfolio :

- **Visiteur** : 
  - Consulter la page "À propos"
  - Explorer les projets (par exemple, les projets GitHub)
  - Télécharger le CV
  - Contacter le propriétaire via un formulaire (si activé)
  
- **Administrateur** (le propriétaire du portfolio) : 
  - Ajouter ou modifier des projets
  - Mettre à jour le CV ou la bio
  - Personnaliser l'apparence du site

**Diagramme de cas d'utilisation** :

```mermaid
           +------------------+
           |   Visiteur       |
           +------------------+
                  |
         +-------------------+
         |  Consulter le     |
         |  portfolio        |
         +-------------------+
                  |
+-----------------+-----------------+
|                 |                 |
|     Consulter  |  Télécharger le  |
|   la bio       |     CV           |
|                 |                 |
+-----------------+-----------------+
         |
+------------------------+
|   Explorer les projets |
|   GitHub               |
+------------------------+
```

### 2. **Diagramme de classes (Class Diagram)**

Le **diagramme de classes** permet de représenter les entités principales du système et leurs relations. Pour un portfolio web, les principales entités pourraient être :

- **Portfolio** : la classe principale représentant le site web.
- **Page** : représente une page du portfolio (par exemple, "À propos", "Projets", "Contact").
- **Projet** : chaque projet ou expérience que vous souhaitez afficher.
- **CV** : un fichier que vous souhaitez mettre à disposition pour téléchargement.
- **ContactForm** : une classe représentant les informations d'un formulaire de contact (si vous en avez un).

#### Exemple de diagramme de classes pour un portfolio :

```mermaid
+-----------------+        +-------------------+        +------------------+
|    Portfolio    |<>------>|       Page        |<>------>|     Projet       |
+-----------------+        +-------------------+        +------------------+
| -titre : string  |        | -nom : string      |        | -nom : string    |
| -description : string     | -contenu : string  |        | -description : string |
| -theme : string |        +-------------------+        | -url : string     |
+-----------------+                                      +------------------+
        |
        |
  +-----------------+  
  |      CV         |  
  +-----------------+  
  | -fichier : PDF  |  
  +-----------------+
```

Dans ce diagramme :

- Un **portfolio** est composé de plusieurs **pages**, chacune ayant un titre et un contenu. Les pages peuvent inclure des informations comme des projets.
- Un **projet** a un nom, une description, et un lien URL (vers un dépôt GitHub, par exemple).
- Le **CV** est un fichier PDF, et il peut être associé à un lien de téléchargement.
  
### 3. **Diagramme de séquence (Sequence Diagram)**

Le **diagramme de séquence** montre l'interaction entre les différents composants du système dans un ordre chronologique. Pour un portfolio, cela pourrait illustrer un scénario comme l'affichage de la page "Projets".

#### Exemple de diagramme de séquence : Visualisation des projets

```mermaid
Utilisateur              Serveur GitHub               Serveur Web Jekyll
    |                          |                             |
    |      Demande page        |                             |
    | -----------------------> |                             |
    |                          |  Récupère projets           |
    |                          | ------------------------->  |
    |                          |                             |
    |                          |    Envoie les projets       |
    |                          | <-------------------------  |
    |  Affiche les projets     |                             |
    | <----------------------- |                             |
```

Dans ce diagramme, un utilisateur visite la page des projets de votre portfolio. Le serveur web (Jekyll) va récupérer les projets depuis un serveur GitHub (ou une autre source de données) et les afficher sur la page.

### 4. **Diagramme d'activités (Activity Diagram)**

Le **diagramme d'activités** représente le flux de travail ou les processus dans un système. Cela peut être utile pour décrire des actions comme la soumission d'un formulaire de contact ou la mise à jour des informations sur le portfolio.

#### Exemple de diagramme d'activités pour la soumission d'un formulaire de contact :

```mermaid
[Début] --> [Remplir le formulaire] --> [Valider le formulaire]
                |                             |
                |--> [Formulaire valide ?] <--|
                |                             |
                |--Oui--> [Envoyer le message]
                |                             |
                |--> Non--> [Afficher erreur]
                |
              [Fin]
```

Dans ce diagramme, le processus commence par le remplissage du formulaire de contact. Si le formulaire est validé, le message est envoyé, sinon une erreur est affichée.

### 5. **Diagramme de composants (Component Diagram)**

Le **diagramme de composants** peut être utilisé pour représenter l'architecture du site web et ses composants majeurs. Par exemple, vous pouvez avoir des composants tels que le serveur web (hébergé sur GitHub Pages), le générateur Jekyll, les composants front-end (HTML/CSS/JS), et les liens externes (vers votre GitHub, LinkedIn, etc.).

#### Exemple de diagramme de composants :

```mermaid
+--------------------+
|  Serveur Web       | <-- hébergé sur GitHub Pages
|  (GitHub Pages)    |
+--------------------+
        |
        v
+----------------------+
|  Site Jekyll (HTML/CSS)|
+----------------------+
        |
        v
+------------------+
|   Composants JS  |
|   (Formulaires,  |
|   Animations)    |
+------------------+
        |
        v
+--------------------+
|   Liens externes   | <-- (GitHub, LinkedIn, etc.)
+--------------------+
```

### Conclusion

Pour un portfolio personnel en ligne, les diagrammes UML les plus importants incluent généralement :

- **Diagramme de cas d'utilisation** : pour montrer les interactions des utilisateurs avec le site.
- **Diagramme de classes** : pour modéliser les entités principales comme les pages, les projets et le CV.
- **Diagramme de séquence** : pour illustrer des interactions spécifiques, comme l'affichage des projets.
- **Diagramme d'activités** : pour représenter les flux de travail comme la soumission d'un formulaire de contact.
- **Diagramme de composants** : pour visualiser l'architecture du site web.

Ces diagrammes aident à mieux structurer le développement du portfolio et à clarifier les relations entre ses différentes parties. Vous pouvez les adapter en fonction de la complexité de votre site et de vos objectifs.
