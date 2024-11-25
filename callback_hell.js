// Callback Hell :
// Le terme "callback hell" fait référence à une situation où les callbacks sont imbriqués les uns dans les autres, rendant 
// le code difficile à lire et à maintenir. Cela se produit souvent lorsqu'on travaille avec des opérations asynchrones en JavaScript,
// Dans cet exemple, nous avons trois fonctions f1, f2, et f3 qui prennent un nombre, effectuent une opération asynchrone,
//  puis appellent une fonction de succès (successFn) ou une fonction d'échec (echecFn).

// Exemple avec des callbacks (callback hell)
let f1 = (nbr, successFn, echecFn) => {
    setTimeout(() => successFn(nbr + 1), 2000);
}
let f2 = (nbr, successFn, echecFn) => {
    setTimeout(() => successFn(nbr * 2), 3000);
}
let f3 = (nbr, successFn, echecFn) => {
    setTimeout(() => successFn(nbr - 1), 4000);
}
let main = () => {
    let x = 5;
    f1(x, (x2) => {
        f2(x2, (x3) => {
            f3(x3, (x4) => { console.log(x4); }, () => { });
        }, () => { });
    }, () => { });
}
// main();

// Explication :
// Les fonctions f1, f2, et f3 prennent un nombre, effectuent une opération asynchrone (simulée par setTimeout),
// puis appellent successFn avec le résultat ou echecFn en cas d'erreur.
// La fonction main montre comment ces fonctions peuvent être imbriquées, ce qui peut rendre le code difficile à lire et à maintenir.
// C'est ce qu'on appelle le "callback hell".

// Exemple avec des promesses
let ff1 = (nbr) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(nbr + 1), 2000);
});
let ff2 = (nbr) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(nbr * 2), 3000);
});
let ff3 = (nbr) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(nbr - 1), 4000);
});
let main2 = () => {
    let x = 5;
    ff1(x)
    .then(data => ff2(data))
    .then(data => ff3(data))
    .then(data => console.log(data))
    .catch(err => console.log("Erreur :", err));
}
main2();

// Explication :
// Les fonctions ff1, ff2, et ff3 retournent des promesses qui se résolvent après une opération asynchrone (simulée par setTimeout).
// La fonction main2 utilise ces fonctions avec des promesses pour effectuer les opérations de manière séquentielle.
// Les résultats sont passés d'une fonction à l'autre à l'aide de .then.
// Les erreurs sont gérées avec .catch.
// Les promesses permettent de gérer les opérations asynchrones de manière plus lisible et maintenable.