// En JavaScript, créer une fonction avec le mot-clé function signifie que vous êtes
// en train de créer un constructeur pour une classe qui porte le même nom que la fonction
// La différence entre une classe sans encapsulation et une classe avec encapsulation réside principalement dans la manière
//  dont les données (propriétés) sont protégées et accessibles.

// Dans une classe sans encapsulation, les propriétés sont publiques. Cela signifie qu'elles peuvent être directement accédées
//  et modifiées depuis l'extérieur de la classe. Voici un exemple :
// Exemple de classe sans encapsulation
function Personne(_name, _age) {
    this.name = _name; // public String name
    this.age = _age; // public int age
    this.sePresenter = function() {
        console.log("Je suis", this.name, "et j'ai", this.age, "ans");
    }
}

let p1 = new Personne("Mehdi", 32);
p1.age = -20; // On peut changer l'âge directement, même avec une valeur incorrecte
p1.sePresenter(); // Affiche : Je suis Mehdi et j'ai -20 ans



// Dans une classe avec encapsulation, les propriétés sont privées. Cela signifie qu'elles ne peuvent pas être directement
//  accédées ou modifiées depuis l'extérieur de la classe. On utilise des méthodes (getters et setters) pour accéder et modifier 
// ces propriétés de manière contrôlée. Voici un exemple :

// Exemple de classe avec encapsulation
function PersonneAvecEncapsulation(_name, _age) {
    let name = _name; // private String name
    let age = _age; // private int age

    this.sePresenter = function() {
        console.log("Je suis", name, "et j'ai", age, "ans");
    }

    this.setAge = function(_age) {
        if (_age > 0) {
            age = _age; // On change l'âge seulement si la valeur est positive
        }
    }

    this.getAge = function() {
        return age;
    }
}

let p2 = new PersonneAvecEncapsulation("Mehdi", 32);
console.log("Age =", p2.getAge()); // Affiche : Age = 32
p2.setAge(-20); // Essaye de changer l'âge à une valeur incorrecte
console.log("Age =", p2.getAge()); // Affiche : Age = 32 (l'âge n'a pas changé)
p2.setAge(20); // Change l'âge à une valeur correcte
console.log("Age =", p2.getAge()); // Affiche : Age = 20
p2.sePresenter(); // Affiche : Je suis Mehdi et j'ai 20 ans