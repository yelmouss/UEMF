// Différentes manières de créer des objets en JavaScript

// 1- En utilisant une fonction (voir 1.4.orient object.js)

// 2- En utilisant le mot-clé class
class Personne {
    constructor(nom, age) {
        this.nom = nom; // Propriété publique
        this.age = age; // Propriété publique
    }
    sePresenter() {
        console.log("Je suis", this.nom, "et j'ai", this.age, "ans");
    }
}
let p = new Personne("MEHDI", 32);
p.sePresenter(); // Affiche : Je suis MEHDI et j'ai 32 ans

// 3- En utilisant des accolades {}
let o = {}; // Objet vide
let o2 = {
    name: "ali",
    age: 20,
    address: "fez",
    salut: () => {
        console.log('hi');
    }
};
console.log(o2, typeof(o2)); // Affiche l'objet et son type
o2.salut(); // Appelle la méthode salut et affiche : hi

// 4- En utilisant new Object()
let o3 = new Object(); // Crée un objet vide
console.log(o3, typeof(o3)); // Affiche l'objet et son type

// NB: 
// Ajouter des attributs
p.telf = "0235345346"; // Ajoute un nouvel attribut à l'objet p
console.log(p); // Affiche l'objet p avec le nouvel attribut

// Supprimer un attribut
delete p.age; // Supprime l'attribut age de l'objet p
console.log(p); // Affiche l'objet p sans l'attribut age