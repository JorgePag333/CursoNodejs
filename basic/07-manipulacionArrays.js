/**
 * Manipulacion de Arrays
 * 
 */

//tipo foreach

var letras =['a','b','c','d','e'];
for(let i=0;i < letras.length;i++){
    const element = letras[i]
}
/**
 * Manipulacion de Arrays
 *
 */

//tipo foreach

var letras = ["a", "b", "c", "d", "e"];
for (let i = 0; i < letras.length; i++) {
  const elemento = letras[i];
  console.log(elemento);
}
letras.forEach((elemento) => {
  console.log(elemento);
});
letras.forEach((elemento) => console.log(elemento));

//push, shift  pop mutables
//push agrega
var letras = ["a", "b", "c", "d", "e"];

letras.push("f");
console.log(letras);

//shift primera letra
var letras = ["a", "b", "c", "d", "e"];

var letrita = letras.shift();
console.log(letras);
console.log(letrita);

//pop ulñtima letra
var letras = ["a", "b", "c", "d", "e"];

var ultimaLetra = letras.pop();
console.log(letras);
console.log(ultimaLetra);

//Elementos Inmutable(no modifica el origen) map

var estudiantes = ["Jorge", "Rocio", "Roberto", "Leandro"];

var asistencia = estudiantes.map((nombre) => {
  return {
    nombre: nombre,
    asistencia: false,
  };
});
console.log(estudiantes);
console.log(asistencia);

var estudiantes = ["Jorge", "Rocio", "Roberto", "Leandro"];

var asistencia = estudiantes.map((nombre) => `${nombre}:.`);
console.log(estudiantes);
console.log(asistencia);

var productos = [
  { nombre: "Remeras", valor: 3000 },
  { nombre: "Zapatillas", valor: 3500 },
  { nombre: "Camicetas", valor: 2000 },
  { nombre: "Chupunes", valor: 5000 },
  { nombre: "Calsas", valor: 3200 },
];

var precios = productos.map((producto) => producto.valor);

var impuestoProducto = productos.map((producto) => {
  return {
    ...producto,
    impuesto: 0.12,
  };
});

console.log(productos);
console.log(impuestoProducto);
console.log(precios);

//Filter(inmutable)

var estudiant = [
  { nombre: "Jorge", edad: 35, matriculado: false },
  { nombre: "Beto", edad: 25, matriculado: true },
  { nombre: "Rocio", edad: 15, matriculado: false },
  { nombre: "Romeo", edad: 30, matriculado: true },
  { nombre: "Julieta", edad: 12, matriculado: false },
];

//var filtrado = estudiant.filter( (estudiantess)=>estudiantess.edad >= 18 );
var filtrado = estudiant.filter(
  (estudiantess) => estudiantess.edad >= 18 && estudiantess.matriculado
);
console.log(estudiant);
console.log(filtrado);

//reduce

var calificaciones = [3, 5, 9, 10, 10];
var suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];

//salida
/*{
    21:3
    43:2
    18:2
    23:3
}*/

var resultado = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});
console.log(edades);
console.log(resultado);

var ventas = [
  { nombre: "camisetas", precio: 15, totalVentas: 10 },
  { nombre: "zapatillas", precio: 150, totalVentas: 8 },
  { nombre: "pantalon", precio: 20, totalVentas: 30 },
  //  {nombre,precio,totalVentas}
  //    {nombre,precio,totalVentas}
];

var resultado = ventas.reduce((acumulador, precio) => {
  let totalVentas = precio.precio * precio.totalVentas;
  acumulador[precio.nombre] = `$ ${totalVentas}`;
  return acumulador;
}, {});
console.log(ventas);
console.log(resultado);

var estudiant = [
  { nombre: "Jorge", edad: 35, matriculado: false },
  { nombre: "Beto", edad: 25, matriculado: true },
  { nombre: "Rocio", edad: 15, matriculado: false },
  { nombre: "Romeo", edad: 30, matriculado: true },
  { nombre: "Julieta", edad: 12, matriculado: false },
];

var resultado = estudiant
  .map((estudiante) => estudiante.matriculado)
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado += 1;
      } else {
        acumulador.nomatricilado += 1;
      }
      return acumulador;
    },
    { matriculado: 0, nomatricilado: 0 }
  );
console.log(resultado);

//SOME
//devuelve true si al menos 1 numero cumple con la condicion
// var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [1, 3, 5, 9];
var resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);

//every devuelve true si todos los elementos cumplen con la condicion caso contrario devuelve false

var numeros = [1, 3, 5, 9];
var resultado = numeros.every((numero) => numero % 2 === 1);
console.log(resultado);

//find-findIndex
//find
//devuelve el primer valor que ENCUENTRE     segun su parametro
var clientes = [
  { id: 1, nombre: "Adda" },
  { id: 2, nombre: "katrina" },
  { id: 3, nombre: "Dayana" },
  { id: 4, nombre: "Pamela" },
  { id: 1, nombre: "Michelle" },
];
var cliente = clientes.find((cliente) => cliente.id === 1);

var cliente1 = clientes.filter((cliente) => cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(cliente1);
//diferencia entre filter y find es
//{ id: 1, nombre: 'Adda' } find
// [ { id: 1, nombre: 'Adda' }, { id: 1, nombre: 'Michelle' } ] filter

//findIndex

var clientes = [
  { id: 1, nombre: "Adda" },
  { id: 2, nombre: "katrina" },
  { id: 3, nombre: "Dayana" },
  { id: 4, nombre: "Pamela" },
  { id: 1, nombre: "Michelle" },
];
var posicioncliente = clientes.findIndex((cliente) => cliente.id === 1);

console.log(clientes);
console.log(posicioncliente);
console.log(clientes[posicioncliente]);

//includes (si existe en el arreglo un elemento especifico y devolvera un valor booleano)

var mascota = ["gato", "perro", "conejo"];
var resultado = mascota.includes("o");
console.log(resultado);
console.log("Jorge".includes("or"));

//buscador filter e include
var buscador = (parametro) => {
  let clientes = [
    { id: 1, nombre: "Adda" },
    { id: 2, nombre: "katrina" },
    { id: 3, nombre: "Dayana" },
    { id: 4, nombre: "Pamela" },
    { id: 1, nombre: "Michelle" },
  ];
  return clientes.filter( (cliente) => cliente.nombre.includes(parametro))
};
console.log(buscador('a'));

//injoin

//join

var elementos = ['aire','fuego','agua']
console.log(elementos.join());

var elementos = ['aire','fuego','agua']
console.log(elementos.join(' '));
//archivos csb
var clientes = [
    { id: 1, nombre: "Adda" },
    { id: 2, nombre: "katrina" },
    { id: 3, nombre: "Dayana" },
    { id: 4, nombre: "Pamela" },
    { id: 1, nombre: "Michelle" },
  ];
  //console.log(clientes.join());
  var csvGenerator = (array,separador=',') => {
    let headers = Object.keys(array[0]).join(separador)
    let data =  array.map( (element) => Object.values(element).join(separador)  )
    console.log(headers);
    data.forEach(element => console.log(element))
  }
  //console.log(Object.values({ id: 1, nombre: "Adda" }));
  //console.log(Object.keys({ id: 1, nombre: "Adda" }));
  csvGenerator(clientes);

  // concat--sort--splice--slice

  //concat concatena los elementos del arreglo

  var array1 = [1,2,3,4,5];
  var array2 = [6,7,8,9,10];
  var array3 = array1.concat(array2);
  var array4 = [array1,array2];//este es el incorrecto
  var array5 = [...array1,...array2];


  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array4);
  console.log(array5);


  //Sort Ordena los elementos dentro de un array

  var array1 = [1,2,3,4,5,6,7,8,9,0];
  console.log(array1.sort());

  var meses =['Dic','Ene','Mar','Feb'];
  console.log(meses.sort());

  var array = [1,10000,21,30,4,9,2,65];
  var ordenado = array.sort((a,b)=> a-b)
  console.log(ordenado);

  var array = [1,10000,21,30,4,9,2,65];
  var ordenado = array.sort((a,b)=> b-a)
  console.log(ordenado);

  //splice

  var nombres= ['Jorge','Andres','Roberto'];
  nombres.splice(2);
  console.log(nombres);

  var nombres= ['Jorge','Andres','Roberto'];
  nombres.splice(1,1);
  console.log(nombres);

  var nombres= ['Jorge','Andres','Roberto'];
  nombres.splice(1,1,'Rocio');
  console.log(nombres);

  // slice

  var nombres= ['Jorge','Andres','Roberto'];
  var resultado = nombres.slice(1,2);//no incluye la ultima posicion
  console.log(nombres);
  console.log(resultado);

  var nombres= ['Jorge','Andres','Roberto'];
  var resultado = nombres.slice(1,3);//no incluye la ultima posicion
  console.log(nombres);
  console.log(resultado);