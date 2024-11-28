const fs = require("fs"); // Importation du module filesystem (fs) pour travailler avec le système de fichiers

class UserPersistence {
    constructor(dbPath) {
        this.dbPath = dbPath; // Chemin vers le fichier de base de données
        this.users = {}; // Initialisation de l'objet users
    }

    load1() {
        return new Promise((resolve, reject) => {
            fs.promises.readFile(this.dbPath) // Lecture du fichier de base de données
                .then(data => JSON.parse(data.toString())) // Conversion des données en objet JavaScript
                .then(data => {
                    this.users = data; // Stockage des données dans l'objet users
                    resolve(); // Résolution de la promesse
                })
                .catch(e => {
                    console.log(e, "impossible d'initialiser data"); // Affichage de l'erreur
                    reject(e); // Rejet de la promesse
                });
        });
    }

    async load2() {
        try {
            let data = await fs.promises.readFile(this.dbPath); // Lecture du fichier de base de données
            data = JSON.parse(data.toString()); // Conversion des données en objet JavaScript
            this.users = data; // Stockage des données dans l'objet users
            return true; // Retourne true si la lecture est réussie
        } catch (e) {
            console.log(e); // Affichage de l'erreur
            return false; // Retourne false si la lecture échoue
        }
    }

    async insert(user) {
        this.users.list.push(user); // Ajout de l'utilisateur à la liste
        await fs.promises.writeFile(this.dbPath, JSON.stringify(this.users, null, 2)); // Écriture des nouvelles données dans le fichier
        return user; // Retourne l'utilisateur inséré
    }

    delete(id) {
        // Méthode pour supprimer un utilisateur par ID
    }

    update(id, user) {
        // Méthode pour mettre à jour un utilisateur par ID
    }

    get(id) {
        // Méthode pour obtenir un utilisateur par ID
    }

    getAll() {
        // Méthode pour obtenir tous les utilisateurs
    }
}

let main = async () => {
    let userPersistence = new UserPersistence("./database.json"); // Création d'une instance de UserPersistence
    await userPersistence.load1(); // Chargement des données de la base de données
    userPersistence.insert({ id: 5454, name: "ali", city: "fez" }) // Insertion d'un nouvel utilisateur
        .then((u) => { console.log("inserted with success", u); }) // Affichage du succès de l'insertion
        .catch(e => console.log(e)); // Affichage de l'erreur en cas d'échec
    console.log("fin"); // Affichage de "fin" pour indiquer la fin du processus
};

main(); // Exécution de la fonction main