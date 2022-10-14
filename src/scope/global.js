// variables CLASE #1

var a; // declarando una variable
var b = "b"; // declaramos y asignamos
b = "bb"; // reasignación
a = "aa"; // redeclaración

// Global Scope
var fruit = "Apple";

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function crountries() {
  contry = "Colombia"; // la variable se convierte en global
  console.log(contry);
}

crountries();
console.log(contry);
