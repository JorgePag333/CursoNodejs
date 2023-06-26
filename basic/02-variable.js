/**
 * variables
 *
 * 3 formas de definir variables
 *
 * var
 * let
 * const
 */

//var

var nombre = "Jorge Pages"; // x=y
console.log(nombre);
var edad = 35;
console.log(edad);

var persona = {
  nombre: "Jorge",
  apellido: "Pages",
  edad: 35,
  direccion: {
    calle: "Palemon Huergo",
    numeroDeCasa: 232,
  },
  telefono: {
    celular: 15552445,
    fijo: 433718,
  },
  ciudadCompleta: ["chivilcoy", "buenos aires", "argentina", 6620],
};
console.log(persona);
{
  let apellido = "Pages";
  console.log(apellido);
}

{
  var apellido = "Pages";
  console.log(apellido);
}
console.log(apellido);

//const

const PI = 3.1416;
console.log(PI);

//templeString

var nombre = "Andres";

var saludo = `hola soy ${nombre}

como estas?

`;
console.log(saludo);
