// Comment déclarer une fonction
// function nomDeLaFonction(parametres) {
//     // ce que fait la fonction
// }

// Deux types de fonctions : fonction nommée et fonction anonyme
// Exemple de fonction nommée
function direBonjour() {
    console.log("Bonjour !");
}
direBonjour(); // Appelle la fonction et affiche "Bonjour !"

// Exemple de fonction anonyme
let direSalut = function() {
    console.log("Salut !");
};
direSalut(); // Appelle la fonction et affiche "Salut !"

// Toutes les fonctions retournent une valeur. Par défaut, elles retournent undefined si aucune valeur n'est spécifiée.
function retourneRien() {
    // pas de return
}
let resultat = retourneRien();
console.log(resultat); // => undefined

function retourneVingt() {
    return 20;
}
let resultat2 = retourneVingt();
console.log(resultat2); // => 20

// Paramètres
// Les paramètres sont des valeurs que l'on peut passer à une fonction
// Les paramètres peuvent avoir des valeurs par défaut
function addition(a = 1, b = 2) {
    return a + b;
}
console.log(addition(1, 5)); // Utilise 1 et 5, résultat : 6
console.log(addition(1)); // Utilise 1 et la valeur par défaut 2, résultat : 3
console.log(addition()); // Utilise les valeurs par défaut 1 et 2, résultat : 3
console.log(addition(4, 5)); // Utilise 4 et 5, résultat : 9

// Utilisation de l'objet arguments
// arguments est un objet qui contient tous les paramètres passés à la fonction
function addition2(a = 1, b = 2) {
    console.table(arguments); // Affiche tous les paramètres passés
}
console.log(addition2(1, 5, 54, 654, 657, 45, 456));

// Calcul de la moyenne avec arguments
function moyenne() {
    let somme = 0;
    for (let i = 0; i < arguments.length; i++) {
        somme += arguments[i];
    }
    return somme / arguments.length;
}
console.log(moyenne(10, 20, 30)); // Calcule la moyenne des valeurs passées

// Utilisation des paramètres rest
let moyenne2 = function(x, ...notes) { // rest parameter
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.length;
};
console.log(moyenne2(10, 20, 30)); // Calcule la moyenne des valeurs passées après le premier paramètre