/*
Node.js est un environnement d'exécution pour JavaScript (ce n'est pas un langage ou un framework).
Node.js is a JavaScript runtime environment.
Il est basé sur V8 (le moteur JavaScript développé par Google).
Node.js est un programme écrit en C++ et basé sur V8.
=> Créé par Ryan Dahl en 2009.
=> Permet de faire sortir JavaScript du navigateur et de l'exécuter n'importe où.
La dernière version (version 22).
==> Installation : télécharger le package Node.js.
==> NPM : Node Package Manager permet d'utiliser des modules tiers (3rd party modules).
*/

// Exemple simple d'utilisation de Node.js pour créer un serveur web
const http = require('http');

// Crée un serveur qui répond "Hello, World!" à chaque requête
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// Le serveur écoute sur le port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Le serveur tourne sur http://127.0.0.1:3000/');
});