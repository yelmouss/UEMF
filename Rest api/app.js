const fs = require("fs"); // Importation du module filesystem (fs) pour travailler avec le système de fichiers
const http = require("http"); // Importation du module http pour créer un serveur HTTP
const PORT = 3000; // Définition du port sur lequel le serveur va écouter

const configServer = (request, response) => {
    // DELETE /users/id
    if (request.method == "DELETE" && request.url.startsWith("/users/")) {
        let id = request.url.split("/")[2]; // Extraction de l'ID de l'utilisateur à partir de l'URL
        fs.promises.readFile("./database.json") // Lecture du fichier database.json
            .then(data => data.toString()) // Conversion des données en chaîne de caractères
            .then(data => JSON.parse(data)) // Conversion de la chaîne JSON en objet JavaScript
            .then(data => { // data est maintenant l'objet users du fichier database.json
                let resultat = data.users.find(value => value.id == id); // Recherche de l'utilisateur par ID
                if (resultat) {
                    // Suppression de l'utilisateur
                    data.users = data.users.filter(val => val != resultat); // Filtrage des utilisateurs pour exclure celui à supprimer
                    fs.promises.writeFile("./database.json", JSON.stringify(data, null, 3)) // Écriture des nouvelles données dans le fichier
                        .then(() => {
                            response.setHeader("Content-Type", "application/json"); // Définition du type de contenu de la réponse
                            response.statusCode = 200; // Code de statut HTTP 200 (OK)
                            response.write(JSON.stringify(resultat)); // Écriture de l'utilisateur supprimé dans la réponse
                            response.end(); // Fin de la réponse
                        })
                        .catch(e => {
                            console.log(e); // Affichage de l'erreur dans la console
                            response.statusCode = 500; // Code de statut HTTP 500 (Erreur interne du serveur)
                            response.write("probleme au serveur"); // Message d'erreur
                            response.end(); // Fin de la réponse
                        });
                } else {
                    response.statusCode = 404; // Code de statut HTTP 404 (Non trouvé)
                    response.write("user avec id = " + id + " is not found !!!!!"); // Message d'erreur
                    response.end(); // Fin de la réponse
                }
            });
    }
    // GET /users/id => http://localhost:3000/users/5
    else if (request.method == "GET" && request.url.startsWith("/users/")) {
        let id = request.url.split("/")[2]; // Extraction de l'ID de l'utilisateur à partir de l'URL
        fs.promises.readFile("./database.json") // Lecture du fichier database.json
            .then(data => data.toString()) // Conversion des données en chaîne de caractères
            .then(data => JSON.parse(data)) // Conversion de la chaîne JSON en objet JavaScript
            .then(data => { // data est maintenant l'objet users du fichier database.json
                let resultat = data.users.find(value => value.id == id); // Recherche de l'utilisateur par ID
                if (resultat) {
                    response.setHeader("Content-Type", "application/json"); // Définition du type de contenu de la réponse
                    response.statusCode = 200; // Code de statut HTTP 200 (OK)
                    response.write(JSON.stringify(resultat)); // Écriture de l'utilisateur trouvé dans la réponse
                    response.end(); // Fin de la réponse
                } else {
                    response.statusCode = 404; // Code de statut HTTP 404 (Non trouvé)
                    response.write("user avec id = " + id + " is not found !!!!!"); // Message d'erreur
                    response.end(); // Fin de la réponse
                }
            });
    }
    // GET /users => http://localhost:3000/users?limit=5
    else if (request.method == "GET" && request.url.startsWith("/users")) {
        let limit = -1; // Initialisation de la limite à -1 (pas de limite)
        if (request.url.split("?").length != 1) { // Vérification de la présence de paramètres de requête
            let queryParams = request.url.split("?")[1].split("&"); // Extraction des paramètres de requête
            console.log(queryParams); // Affichage des paramètres de requête dans la console
            queryParams.forEach(val => {
                let clef = val.split("=")[0]; // Extraction de la clé du paramètre
                let value = val.split("=")[1]; // Extraction de la valeur du paramètre
                if (clef.toLowerCase() == "limit") {
                    limit = value; // Définition de la limite à partir du paramètre de requête
                }
            });
            console.log(limit); // Affichage de la limite dans la console
        }
        fs.promises.readFile("./database.json") // Lecture du fichier database.json
            .then(data => data.toString()) // Conversion des données en chaîne de caractères
            .then(data => JSON.parse(data)) // Conversion de la chaîne JSON en objet JavaScript
            .then(data => {
                if (limit == -1 || limit > data.users.length) // Vérification de la validité de la limite
                    limit = data.users.length; // Définition de la limite à la longueur de la liste des utilisateurs si nécessaire
                response.status = 200; // Code de statut HTTP 200 (OK)
                response.setHeader("Content-Type", "application/json"); // Définition du type de contenu de la réponse
                response.write(JSON.stringify(data.users.filter((val, index) => index < limit))); // Écriture des utilisateurs dans la réponse, en respectant la limite
            })
            .catch(e => {
                response.status = 500; // Code de statut HTTP 500 (Erreur interne du serveur)
                console.error(e); // Affichage de l'erreur dans la console
                response.write("sorry we have a server problem!"); // Message d'erreur
            })
            .finally(() => response.end()); // Fin de la réponse
    }
    // Route non trouvée
    else {
        response.statusCode = "404"; // Code de statut HTTP 404 (Non trouvé)
        response.write("not found !!!!!"); // Message d'erreur
        response.end(); // Fin de la réponse
    }
};

const server = http.createServer(configServer); // Création du serveur HTTP avec la configuration définie

server.listen(PORT, () => { // Démarrage du serveur
    console.log("server started at ", PORT); // Affichage d'un message indiquant que le serveur a démarré
});