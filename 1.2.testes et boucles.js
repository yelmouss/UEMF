// Les tests en JavaScript
// En JavaScript, il existe deux types de tests d'égalité :
// 1. Utilisation de l'opérateur == (double égal)
// => Compare les valeurs en négligeant le type (conversion de type implicite)
let x = 10;
let y = "10";
if (x == y) {
    console.log("égalité avec =="); // Cette condition est vraie car 10 est égal à "10" après conversion de type
}

// 2. Utilisation de l'opérateur === (triple égal)
// => Compare les valeurs en prenant en considération le type (pas de conversion de type)
if (x === y) {
    console.log("égalité avec ==="); // Cette condition est fausse car 10 (number) n'est pas égal à "10" (string)
}

// Les boucles en JavaScript
// Les boucles permettent de répéter une série d'instructions plusieurs fois. Il existe trois types de boucles principales :

// 1. La boucle for
// Utilisée lorsque le nombre d'itérations est connu à l'avance
for (let i = 0; i < 5; i++) {
    console.log("for loop iteration:", i);
}

// 2. La boucle while
// Utilisée lorsque le nombre d'itérations n'est pas connu à l'avance et dépend d'une condition
let j = 0;
while (j < 5) {
    console.log("while loop iteration:", j);
    j++;
}

// 3. La boucle do...while
// Semblable à la boucle while, mais s'assure que le bloc de code est exécuté au moins une fois
let k = 0;
do {
    console.log("do...while loop iteration:", k);
    k++;
} while (k < 5);