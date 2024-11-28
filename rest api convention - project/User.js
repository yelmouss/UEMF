class User {
    constructor(id, name, city) {
        this.id = id; // Initialisation de l'ID de l'utilisateur
        this.name = name; // Initialisation du nom de l'utilisateur
        this.city = city; // Initialisation de la ville de l'utilisateur
    }

    toJson() {
        return JSON.stringify(this); // Conversion de l'objet utilisateur en chaîne JSON
    }
}

module.exports = User; // Exportation de la classe User pour l'utiliser dans d'autres fichiers

/*
let u = new User(1, "mehdi", "fez");
console.log(u.toJson()); // Exemple de création d'un utilisateur et affichage de sa représentation JSON
*/