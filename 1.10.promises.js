const fs = require("fs");

// Les promesses en JavaScript

// Motivation : répondre à la problématique du "callback hell"
// Une manière plus adéquate pour gérer l'exécution synchrone et asynchrone

// Exemple de fonction qui retourne une promesse
let promisePairFct = () => new Promise((resolve, reject) => {
    let luckyNbr = Math.floor(Math.random() * 1000) + 1;
    setTimeout(() => {
        if (luckyNbr % 2 == 0)
            resolve(luckyNbr);
        else
            reject("Échec : impossible de trouver un nombre pair !");
    }, 3000);
});

// Exécution de la promesse de manière asynchrone
console.log("Début");
promisePairFct().then((data) => {
    console.log("Le nombre pair est", data);
}).catch((err) => {
    console.log("Erreur :", err);
}).finally(() => {
    console.log("Fin de l'exécution asynchrone");
});
console.log("Fin");

// Exécution de la promesse de manière synchrone avec async/await
const executePromise = async () => {
    console.log("Début");
    try {
        let res = await promisePairFct(); // Vous récupérez le resolve(value)
        console.log("Succès :", res);
    } catch (e) {
        console.error("Erreur :", e);
    }
    console.log("Fin de l'exécution synchrone");
};
executePromise();

// Utilisation des promesses avec fs (file system)

// Callback (asynchrone)
fs.readFile("./data.json", (err, data) => {
    if (err) {
        console.log("Erreur :", err);
    } else {
        let todos = JSON.parse(data);
        console.log("Nombre de todos (callback) :", todos.length);
    }
});

// Promesse (asynchrone)
fs.promises.readFile("./data.json").then((data) => {
    let todos = JSON.parse(data);
    console.log("Nombre de todos (promesse) :", todos.length);
}).catch((err) => console.log("Erreur :", err));

// Mode synchrone avec async/await
const readFileSync = async () => {
    try {
        let data = await fs.promises.readFile("./data.json");
        let todos = JSON.parse(data);
        console.log("Nombre de todos (async/await) :", todos.length);
    } catch (err) {
        console.log("Erreur :", err);
    }
};
readFileSync();

// Mode synchrone classique
try {
    let data = fs.readFileSync("./data.json");
    let todos = JSON.parse(data);
    console.log("Nombre de todos (sync) :", todos.length);
} catch (err) {
    console.log("Erreur :", err);
}

// Exemple supplémentaire d'utilisation des promesses avec async/await
const main = () => {
    console.log("avant lecture");

    // Promesse (asynchrone)
    fs.promises.readFile("./data.json").then((data) => {
        let todos = JSON.parse(data);
        console.log(todos.length);
    }).catch((err) => console.log(err));

    console.log("apres lecture");
};

// Exécution synchrone avec async/await
const main2 = async () => {
    console.log("Début");

    try {
        let data = await fs.promises.readFile("./data.json");
        let todos = JSON.parse(data);
        console.log(todos.length);
    } catch (e) {
        console.log(e);
    }

    console.log("Fin");
};
main2();