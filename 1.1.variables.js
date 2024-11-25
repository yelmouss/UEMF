// Les variables en JavaScript

// Les variables sont non typées
// => On n'a pas besoin de spécifier le type au moment de la déclaration
// => On peut passer d'un type à l'autre sans problème
var x = 10;
console.log(x, typeof(x)); // number
x = "salam";
console.log(x, typeof(x)); // string

// Déclaration de variables
// Il existe trois mots-clés pour déclarer des variables : var, let, et const

// var : Déclare une variable avec une portée globale ou de fonction
var v1 = 10; // portée globale

// let : Déclare une variable avec une portée de bloc
let v2 = 10; // portée de bloc

// const : Déclare une constante avec une portée de bloc
const V3 = 10; // portée de bloc

// Exemple de portée de bloc avec let
if (1 == 1) {
    let nbr = 20;
    console.log("au sein du if", nbr); // 20
}
try {
    console.log("apres if", nbr); // ReferenceError: nbr is not defined
} catch (e) {
    console.log(e.message);
}

// Exemple de portée globale avec var
if (1 == 1) {
    var nbr2 = 20;
    console.log("au sein du if", nbr2); // 20
}
console.log("apres if", nbr2); // 20

//------ Conventions -------
// 1- Les noms de variables commencent par une minuscule (sauf pour les constantes)
// 2- Le premier caractère de chaque mot suivant commence par une majuscule (camelCase)
// Exemple : let nbrEtudiantPresent
// NB: const => tout en majuscules
// Exemple : const PI = 3.14

// Types de données en JavaScript
/*
number : Représente les nombres, qu'ils soient entiers ou flottants
string : Représente les chaînes de caractères
boolean : Représente les valeurs vraies ou fausses (true ou false)
object : Représente des objets, qui sont des collections de paires clé-valeur
function : Représente des fonctions, qui sont des blocs de code réutilisables
undefined : Représente une variable qui a été déclarée mais n'a pas encore reçu de valeur
bigInt : Représente des entiers de grande taille
*/