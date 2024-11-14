# Installation de Git sur Ubuntu

Avant tout, vous devez installer Git sur votre machine Ubuntu. Suivez les étapes ci-dessous.

#### Étape 1 : Mettre à jour les dépôts
Ouvrez un terminal et mettez à jour les paquets disponibles :
```bash
sudo apt update
```

#### Étape 2 : Installer Git
Ensuite, installez Git avec la commande suivante :
```bash
sudo apt install git
```

#### Étape 3 : Vérifier l'installation
Après l'installation, vérifiez que Git a été installé correctement en vérifiant sa version :
```bash
git --version
```

Si vous voyez la version de Git, cela signifie que l'installation a réussi.

#### Étape 4 : Configurer Git
Il est important de configurer votre nom d'utilisateur et votre email, car Git les utilisera pour les commits.

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

### 2. Utilisation de Git

#### a. **Initialiser un dépôt Git**
Dans un répertoire de projet, initialisez un dépôt Git :
```bash
git init
```

Cela crée un nouveau dépôt Git dans le répertoire actuel.

#### b. **Cloner un dépôt distant**
Si vous souhaitez cloner un projet depuis un dépôt distant (par exemple GitHub), utilisez la commande suivante :
```bash
git clone https://github.com/nom-utilisateur/nom-du-repository.git
```

### 3. Travailler avec des branches

#### a. **Vérifier les branches existantes**
Pour afficher la liste des branches locales et la branche actuellement active :
```bash
git branch
```

#### b. **Créer une nouvelle branche**
Pour créer et passer à une nouvelle branche, utilisez :
```bash
git checkout -b nouvelle-branche
```

#### c. **Changer de branche**
Si vous souhaitez passer à une autre branche existante :
```bash
git checkout nom-de-la-branche
```

#### d. **Fusionner une branche**
Si vous souhaitez fusionner une branche (par exemple `nouvelle-branche`) dans la branche active, utilisez :
```bash
git merge nouvelle-branche
```

### 4. Travailler avec des commits

#### a. **Ajouter des fichiers au staging area**
Avant de pouvoir valider (commit) des changements, vous devez ajouter les fichiers au *staging area* :
```bash
git add nom-du-fichier
```
Pour ajouter tous les fichiers modifiés :
```bash
git add .
```

#### b. **Committer les changements**
Pour committer les changements avec un message :
```bash
git commit -m "Message de commit"
```

#### c. **Vérifier l'historique des commits**
Pour voir les commits passés dans votre branche :
```bash
git log
```

### 5. Travailler avec des dépôts distants (Push/Pull)

#### a. **Pousser les changements (Push)**
Pour envoyer vos commits locaux vers un dépôt distant (par exemple sur GitHub), utilisez la commande `push` :
```bash
git push origin nom-de-la-branche
```

#### b. **Récupérer les changements (Pull)**
Pour récupérer et fusionner les changements du dépôt distant avec votre branche locale :
```bash
git pull origin nom-de-la-branche
```

### 6. Forker un dépôt (sur GitHub)

Le fork d'un dépôt est un processus où vous créez une copie d'un projet sur votre propre compte GitHub. Cela vous permet de travailler sur un projet sans affecter le dépôt original. Voici comment procéder :

1. Allez sur le dépôt GitHub que vous souhaitez forker.
2. Cliquez sur le bouton **Fork** en haut à droite.
3. Après le fork, clonez votre version du dépôt sur votre machine :
   ```bash
   git clone https://github.com/votre-utilisateur/nom-du-repository.git
   ```

### 7. **Force Push**

Parfois, vous pouvez avoir besoin de faire un *force push* (forcer l'écrasement des changements sur le dépôt distant). Cette opération peut être risquée, car elle remplace l'historique du dépôt distant. Utilisez cette commande avec prudence.

```bash
git push --force origin nom-de-la-branche
```

### 8. **Changer d'état de dépôt (Checkout)**

Le **checkout** est utilisé pour naviguer entre les commits, branches, ou même pour revenir à un état précédent d'un fichier.

#### a. **Revenir à un commit précédent**
Vous pouvez revenir à un commit spécifique en utilisant son hash :
```bash
git checkout <commit-hash>
```

#### b. **Revenir à un fichier spécifique**
Pour revenir à une version antérieure d'un fichier :
```bash
git checkout <commit-hash> -- chemin/vers/fichier
```

### Résumé des commandes importantes :

- **Cloner un dépôt distant** : `git clone <url-du-dépôt>`
- **Créer une branche** : `git checkout -b <nom-de-la-branche>`
- **Changer de branche** : `git checkout <nom-de-la-branche>`
- **Ajouter des fichiers** : `git add <fichier>`
- **Committer les fichiers** : `git commit -m "Message"`
- **Pousser les changements** : `git push origin <nom-de-la-branche>`
- **Récupérer les changements** : `git pull origin <nom-de-la-branche>`
- **Fusionner une branche** : `git merge <nom-de-la-branche>`
- **Faire un force push** : `git push --force origin <nom-de-la-branche>`
- **Vérifier l'état des fichiers** : `git status`
