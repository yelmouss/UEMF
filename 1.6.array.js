// Les tableaux (arrays) en JavaScript

// Un tableau est un objet spécial qui peut contenir plusieurs valeurs dans une seule variable.
// Les tableaux sont dynamiques (leur taille peut changer) et hétérogènes (ils peuvent contenir des valeurs de types différents).

// Syntaxe pour créer un tableau :
let tab = new Array(); // Utilisation du constructeur Array
let tab2 = []; // Utilisation de la syntaxe littérale

console.log(typeof(tab)); // Affiche : object
console.log(typeof(tab2)); // Affiche : object

// Exemple de tableau hétérogène :
let tab3 = [1, 24, 55, "salut", [1, 2], true, () => { console.log("salut") }, function() { console.log('ok') }];
console.table(tab3); // Affiche le tableau sous forme de table
tab3[6](); // Appelle la fonction à l'index 6
tab3[6] = 20; // Change la valeur à l'index 6
console.table(tab3); // Affiche le tableau modifié

// Propriété length
// La propriété length donne la taille du tableau (le nombre d'éléments qu'il contient)
tab = [1, 20, 0, 3];
console.log("taille", tab.length); // Affiche : taille 4

// Méthodes / Fonctions pour les tableaux

// 1- forEach
// La méthode forEach permet d'exécuter une fonction pour chaque élément du tableau
// Exemple classique avec une boucle for :
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}
console.log("---------");
// Utilisation de forEach :
tab.forEach((value, index) => console.log(value, index));

// 2- Ajouter des éléments
// push ajoute un élément à la fin du tableau
// unshift ajoute un élément au début du tableau
tab.push(99); // Ajoute 99 à la fin
tab.unshift(-20); // Ajoute -20 au début
console.table(tab); // Affiche le tableau modifié

// 3- Recherche
// find retourne le premier élément qui satisfait une condition
let res = tab.find((value) => value > 5);
console.log(res); // Affiche le premier élément > 5

// findLast retourne le dernier élément qui satisfait une condition
res = tab.findLast((value) => value > 5);
console.log(res); // Affiche le dernier élément > 5

// findIndex retourne l'index du premier élément qui satisfait une condition
res = tab.findIndex((value) => value > 5);
console.log(res); // Affiche l'index du premier élément > 5

// findLastIndex retourne l'index du dernier élément qui satisfait une condition
res = tab.findLastIndex((value) => value > 5000);
console.log(res); // Affiche l'index du dernier élément > 5000 (ou -1 si aucun élément ne satisfait la condition)

// 4- Filtrer
// filter retourne un nouveau tableau contenant tous les éléments qui satisfont une condition
res = tab.filter((value) => value > 5);
console.log(res); // Affiche un tableau avec les éléments > 5

// 5- Map
// map retourne un nouveau tableau avec les résultats de l'application d'une fonction à chaque élément
res = tab.map((value) => value + 10);
console.log(res); // Affiche un tableau avec chaque élément augmenté de 10

// 6- Trier
// sort trie les éléments du tableau selon une fonction de comparaison
console.log(tab); // Affiche le tableau original
let tab3 = tab.sort((a, b) => b - a); // Trie les éléments en ordre décroissant
console.log(tab3); // Affiche le tableau trié