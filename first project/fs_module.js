const fs = require("fs"); // Importation du module filesystem (fs)

// Écriture de fichier en mode asynchrone avec promesses
fs.promises.writeFile("./data.txt", "salut uemf") // Écriture de "salut uemf" dans le fichier "data.txt"
    .then(() => {
        console.log("success"); // Affiche "success" si l'écriture est réussie
    })
    .catch(e => console.error(e)); // Affiche une erreur si l'écriture échoue

// Écriture de fichier en mode asynchrone avec callback
fs.writeFile("./data2.txt", "salut uemf", (err) => { // Écriture de "salut uemf" dans le fichier "data2.txt"
    if (err) // Vérifie s'il y a une erreur
        return console.error(err); // Affiche l'erreur et arrête l'exécution de la fonction
    console.log("success2"); // Affiche "success2" si l'écriture est réussie
});

// Écriture de fichier en mode synchrone
try {
    fs.writeFileSync("./data3.txt", "salut uemf"); // Écriture de "salut uemf" dans le fichier "data3.txt"
    console.log("success3"); // Affiche "success3" si l'écriture est réussie
} catch (e) {
    console.error(e); // Affiche une erreur si l'écriture échoue
}

// Différence entre mode synchrone et asynchrone :
// En mode synchrone, on ne peut pas passer à l'instruction suivante sans terminer l'instruction actuelle.
// En mode asynchrone, les instructions peuvent être exécutées sans attendre la fin de l'instruction actuelle.