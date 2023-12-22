# Programme de test pierre-papier-ciseau

## Node.JS
Pour le projet, j'ai du installer **Node.Js** afin de pouvoir lancer la simuation
du programme dans la console

### Etape 1 : 
#### Pour créer le projet
mkdir nom-du-projet
cd nom-du-projet
### Etape 2 :
#### Pour init le projet Node.js
npm init -y 
### Etape 3 :
- créer un dossier src/index.js
- créer un .gitignore
- modifier le package.json

## Phase de programmation du jeu
### Consulter la doc
Avec la doc fournis, créer le jeu

## Création et init des tests unitaires
### Mocha et Chai
Pour les tests unitaires j'ai choisis les bibliothèques Mocha et Chai
### Mocha
- C'est un framework de test JS flexible qui prend en charge les tests BDDD et TDD
- Il permet des execution asynchrone si besoin
- Il est compatible avec Chai
- Il fait des rapports de tests détaillés
- Il est prix en charge par les navigateur
### Chai
C'est une bibliotheque d'assertions pour Node?JS + navigateur. Elle prend en charges les assertions "expect" "should" et "assert"
- Compatible avec Mocha 
- Possibilité de créer des assertions personnalisées.

### Installation
npm install --save-dev mocha chai
### Créer le code pour les tests unitaires
 - Test du choix aléatoire des joueurs
 - Test de la fonction gagner
 - Test du déroulement de la partie : * determination du vainqueur du tour et de la partie
 ### Lancement des tests
 Il faut se mettre à la racine du projet
 puis command : npm test

 Mocha Chai va normalement scanner le projet à la recherche du dossier test
 et executer les scripts .test.js à l'interrieur de celui ci

Tous les tests sont au ✔

![image_test](image_test.jpg)

**Ce projet a été réalisé par Loan et Noé**

