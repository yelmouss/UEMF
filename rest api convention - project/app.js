const fs = require("fs"); // Importation du module filesystem (fs) pour travailler avec le système de fichiers
const http = require("http"); // Importation du module http pour créer un serveur HTTP
const User = require("./User"); // Importation de la classe User
const UserPersistence = require("./persistence"); // Importation de la classe UserPersistence
const PORT = 3000; // Définition du port sur lequel le serveur va écouter

const userPersistence = new UserPersistence("./database.json"); // Création d'une instance de UserPersistence

const configServer = async (request, response) => {
    await userPersistence.load1(); // Chargement des données de la base de données

    // DELETE /users/id
    if (request.method == "DELETE" && request.url.startsWith("/users/")) {
        let id = request.url.split("/")[2]; // Extraction de l'ID de l'utilisateur à partir de l'URL
        let user = userPersistence.users.list.find(u => u.id == id); // Recherche de l'utilisateur par ID
        if (user) {
            userPersistence.users.list = userPersistence.users.list.filter(u => u.id != id); // Suppression de l'utilisateur
            await fs.promises.writeFile(userPersistence.dbPath, JSON.stringify(userPersistence.users, null, 2)); // Écriture des nouvelles données dans le fichier
            response.setHeader("Content-Type", "application/json"); // Définition du type de contenu de la réponse
            response.statusCode = 200; // Code de statut HTTP 200 (OK)
            response.write(JSON.stringify(user)); // Écriture de l'utilisateur supprimé dans la réponse
            response.end(); // Fin de la réponse
        } else {
            response.statusCode = 404; // Code de statut HTTP 404 (Non trouvé)
            response.write("user avec id = " + id + " is not found !!!!!"); // Message d'erreur
            response.end(); // Fin de la réponse
        }
    }
    // GET /users/id => http://localhost:3000/users/5
    else if (request.method == "GET" && request.url.startsWith("/users/")) {
        let id = request.url.split("/")[2]; // Extraction de l'ID de l'utilisateur à partir de l'URL
        let user = userPersistence.users.list.find(u => u.id == id); // Recherche de l'utilisateur par ID
        if (user) {
            response.setHeader("Content-Type", "application/json"); // Définition du type de contenu de la réponse
            response.statusCode = 200; // Code de statut HTTP 200 (OK)
            response.write(JSON.stringify(user)); // Écriture de l'utilisateur trouvé dans la réponse
            response.end(); // Fin de la réponse
        } else {
            response.statusCode = 404; // Code de statut HTTP 404 (Non trouvé)
            response.write("user avec id = " + id + " is not found !!!!!"); // Message d'erreur
            response.end(); // Fin de la réponse
        }
    }
    // GET /users => http://localhost:3000/users?limit=5
    else if (request.method == "GET" && request.url.startsWith("/users")) {
        let limit = -1; // Initialisation de la limite à -1 (pas de limite)
        if (request.url.split("?").length != 1) { // Vérification de la présence de paramètres de requête
            let queryParams = request.url.split("?")[1].split("&"); // Extraction des paramètres de requête
            queryParams.forEach(val => {
                let clef = val.split("=")[0]; // Extraction de la clé du paramètre
                let value = val.split("=")[1]; // Extraction de la valeur du paramètre
                if (clef.toLowerCase() == "limit") {
                    limit = value; // Définition de la limite à partir du paramètre de requête
                }
            });
        }
        if (limit == -1 || limit > userPersistence.users.list.length) // Vérification de la validité de la limite
            limit = userPersistence.users.list.length; // Définition de la limite à la longueur de la liste des utilisateurs si nécessaire
        response.statusCode = 200; // Code de statut HTTP 200 (OK)
        response.setHeader("Content-Type", "application/json"); // Définition du type de contenu de la réponse
        response.write(JSON.stringify(userPersistence.users.list.slice(0, limit))); // Écriture des utilisateurs dans la réponse, en respectant la limite
        response.end(); // Fin de la réponse
    }
    // Route non trouvée
    else {
        response.statusCode = 404; // Code de statut HTTP 404 (Non trouvé)
        response.write("not found !!!!!"); // Message d'erreur
        response.end(); // Fin de la réponse
    }
};

const server = http.createServer(configServer); // Création du serveur HTTP avec la configuration définie

server.listen(PORT, () => { // Démarrage du serveur
    console.log("server started at ", PORT); // Affichage d'un message indiquant que le serveur a démarré
});