// JSON = JavaScript Object Notation
// JSON est un format utilisé pour représenter des données de manière structurée, comme des objets en JavaScript.

// Syntaxe de base du JSON :
// Un objet JSON est écrit entre accolades { }.
// Les données sont écrites sous forme de paires clé:valeur.
// La clé (ou nom de la propriété) est toujours une chaîne de caractères (texte) entourée de guillemets "".
// La valeur peut être un nombre, une chaîne de caractères, un booléen (true/false), un objet ou un tableau.

// Exemple d'objet JSON :
let jsonString = `
{
    "nom": "Alice",
    "age": 25,
    "estEtudiant": true,
    "adresse": {
        "ville": "Paris",
        "codePostal": "75000"
    },
    "hobbies": ["lecture", "natation", "cinéma"]
}
`;

// Conversion d'une chaîne JSON en objet JavaScript
let objet = JSON.parse(jsonString);
console.log(objet); // Affiche l'objet JavaScript

// Conversion d'un objet JavaScript en chaîne JSON
let jsonString2 = JSON.stringify(objet);
console.log(jsonString2); // Affiche la chaîne JSON