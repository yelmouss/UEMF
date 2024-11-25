// Les callbacks en JavaScript

// Un callback est une fonction que l'on passe en paramètre à une autre fonction
// Cela permet de déléguer une partie du travail à une autre fonction

// Exemple simple de devinette sans callback
let devinette = (nbr) => {
    let luckyNbr = Math.floor(Math.random() * 10) + 1;
    if (nbr == luckyNbr)
        console.log("you win");
    else
        console.log("unlucky !");
}
devinette(3);


// La ligne de code let luckyNbr = Math.floor(Math.random() * 10) + 1; génère un nombre aléatoire entre 1 et 10. Voici une explication détaillée :

// Math.random() :

// Cette fonction retourne un nombre flottant (décimal) aléatoire compris entre 0 (inclus) et 1 (exclus).
// Math.random() * 10 :

// En multipliant le résultat de Math.random() par 10, on obtient un nombre flottant compris entre 0 (inclus) et 10 (exclus).
// Math.floor() :

// Cette fonction arrondit un nombre flottant à l'entier inférieur le plus proche. Par exemple, Math.floor(4.7) retourne 4.
// Math.floor(Math.random() * 10) :

// Cette combinaison génère un nombre entier compris entre 0 (inclus) et 9 (inclus).
// + 1 :

// En ajoutant 1 au résultat, on obtient un nombre entier compris entre 1 (inclus) et 10 (inclus).

// Problème : Le traitement en cas de réussite ou d'échec est figé
// Solution : Utiliser des callbacks pour déléguer le traitement

// Exemple de devinette avec callbacks
let devinetteAmeliore = (nbr, successFn, echecFn) => {
    let luckyNbr = Math.floor(Math.random() * 5) + 1;
    if (nbr == luckyNbr)
        successFn(); // Appelle la fonction de succès
    else
        echecFn(luckyNbr); // Appelle la fonction d'échec avec le nombre chanceux
}

// Création des fonctions de succès et d'échec
let successFn = () => {
    console.log("Bravo, tu as gagné !");
}

let echecFn = (luckyNbr) => {
    console.log("Dommage, le bon numéro était", luckyNbr);
}

// Appel de la devinette améliorée avec des callbacks
devinetteAmeliore(3, successFn, echecFn);