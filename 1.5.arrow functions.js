// Les fonctions fléchées (arrow functions) sont une autre façon de créer des fonctions anonymes
// Contrairement aux fonctions normales (function), elles ne permettent pas de créer des classes

// Syntaxe de base :
// (parametres) => { contenu }
// Exemple : 
// (a, b) => { 
//    let somme = a + b; 
//    return somme;
// }

// Abréviations possibles :
// 1 - Les parenthèses () des arguments sont facultatives si on a un seul paramètre
// 2 - Les accolades {} du contenu sont facultatives si on a une seule instruction
// 3 - En l'absence des accolades {}, un return implicite est ajouté

// Exemple simple : 
// a => a > 0 
// Cela équivaut à : function(a) { return a > 0; } 
// Cette fonction détermine si un nombre est positif ou négatif

// Exemple détaillé :
let teste2 = (a) => {
    if (a > 0)
        return true;
    return false;
};

// Fonction normale :
function direBonjour() {
    console.log("Bonjour !");
}

// Fonction fléchée équivalente :
let direBonjourFlèche = () => console.log("Bonjour !");

// Exemple avec une seule instruction :
let doubler = x => x * 2;
console.log(doubler(4)); // Affiche : 8

// Exemple avec plusieurs instructions :
let addition = (a, b) => {
    let somme = a + b;
    return somme;
};
console.log(addition(3, 4)); // Affiche : 7

// Exemple avec une fonction normale :
function afficherMessage() {
    console.log("Salut !");
}

// Fonction fléchée équivalente :
let afficherMessageFlèche = () => console.log("Salut !");
afficherMessageFlèche(); // Affiche : Salut !

// Exemple avec une variable locale :
let afficherNombre = () => {
    let nombre = 10;
    console.log(nombre);
};
afficherNombre(); // Affiche : 10