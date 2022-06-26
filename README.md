# Mediatheque

Médiathéque est un Poc Angular.

L'objectif de l'application est de simuler une ihm pour consulter les films et albums disponiblent dans une médiatéque.

Avertisement : 
L'application n'est pour le moment pas finalisée fonctionnellement.

Roadmap :
Médiatéque peut être envisagé comme une refonte du front office du projet Librairies : 
https://github.com/nicolasdotnet/libraries-upgrade

Médiathéque a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Prérequis
nodejs v16.14.2 

## Déploiement pour développeur

### Clonez le projet :

```
git clone https://github.com/nicolasdotnet/mediatheque.git
```

### Initialisation de l'application

Dans votre terminal à la racine du dossier de l'application, exécutez la commande : 
```
npm install
```
Cette commande va télécharger les modules nécessaire à l'application.

## Lancement de l'application

### serveur db/json

A la racine du dossier de l'application, exécutez la commande :
```
npm run start:db
```
Le serveur json-serveur sera lancé.

### serveur de l'application

A la racine du dossier de l'application, exécutez la commande :
```
ng serve -o
```
Le serveur de l'application Angular sera lancé.
Un onglet de votre navigateur par défault va s'ouvrir à l'url `http://localhost:4200/`.

L'application est opérationnelle !