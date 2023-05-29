/**
 * funciones
 */

//funcion declarativa
/*
function nombredelafuncion(){
    //cuerpo de la funcion
}*/

function saludo() {
  console.log("hola soy Jorge");
}

saludo();

function saludo(nombre) {
  console.log("hola soy ", nombre);
}
saludo("Jorge");

function saludo(nombre) {
  return `hola soy ${nombre}`;
}
var saludar = saludo("Jorge");
console.log(saludar);
console.log(saludo("jorge andres pages"));

/**
 * Funciones de exprecion o anonimas
 */

var suma = function (a, b) {
  return a + b;
};

console.log(suma(25, 650));

//funcion de exprecion flecha o  arrow function

var resta = (a, b) => {
  return a - b;
};
console.log(resta(675,25));

var multiplicar =(a,b)=> a * b;
console.log(multiplicar(2,2));