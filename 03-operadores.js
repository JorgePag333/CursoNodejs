/**
 * operadores
 */

/**
 * operadores de asignacion
 */
var x = 2;
var y = true;

//operadores de asignacon de adicion

var x=2;
var y=1;

x +=y;// x = x + y
console.log(x);

//operador de resta

var x = 1;
var y =3;

x -= y;
console.log(x);

//operador de multiplicacion
var x = 1;
var y =3;

x *= y;// x = x * y
console.log(x);

//operador de divicion
var x = 1;
var y =3;

x /= y;// x = x / y
console.log(x);
//moulo
var x = 1;
var y =3;

x %= y;// x = x % y
console.log(x);

//operdador de potemcia
var x = 1;
var y =3;

x **= y;// x = x ** y
console.log(x);

/**
 *
 * comparadoes
 */
//==
console.log(3 == 3);
console.log(3 == "3");

//!=

console.log(3 != 3);

//operador estrictamente igual

console.log(3 === 3);

console.log(3 === "3");

//operador estrictamente desigual

console.log(3 !== 3);

console.log(3 !== "3");

// operadores >,<, >=,<=

//operador estrictamente igual

console.log(3 > 3);

console.log(3 <= 3);
console.log(3 >= 3);

console.log(3 < 3);

/**
 *
 * operadores aritmeticos
 *
 * +
 * -
 * *
 * /
 * %
 */

 console.log(3 + 3);
 console.log(3 - 3);
 console.log(3 / 3);
 
 console.log(3 * 3);
 console.log(3 ** 3);
 
 console.log(3 % 3);
 
 //operadores de incremento ++
 var numero = 0;
 console.log(++numero);
 
 console.log(numero++);
 console.log(numero);
 // operadores de  decremento --
 
 var numero = 4;
 console.log(--numero);
 
 console.log(numero--);
 console.log(numero);
 
 /**
  *
  * operadoresLogicos
  */
 
 // AND
 console.log(true && true);
 console.log(2 > 3 && 1 <= 2);
 //or
 console.log(true || falso);
 console.log(false || false);
 //not
 console.log(!true);
 console.log(!false);
 
 /**
  *
  * operador de concatenacion (+)
  */
 
 var Nombre = "jorge";
 var apellido = "Pages";
 var nombrecompleto = Nombre + " " + apellido;
 
 console.log(nombrecompleto);
 
 /**
  * operador condicional (condicion ? val1 : val2)
  */
 
 console.log(3 > 5 ? "el numero es mayor" : "Es Menor");
 console.log(7 > 5 ? "el numero es mayor" : "Es Menor");
 
 //operador de desestruracion
 
 var persona = {
   nombre: "jorge",
   apellido: "Pages",
 };
 
 var { nombre } = persona;
 
 console.log(nombre);
 console.log(persona);
 
 var { nombre:xyz } = persona;
 
 console.log(xyz);
 console.log(persona);
 
 //operador de desestruracion para arrays
 
 var persona = [
      "jorge", "Pages",
   ]
 var  [primera,ultima] = persona;
 
 console.log(primera);
 console.log(ultima);
 
 // operador de miembro o acceso de propiedad
 
 //notacion por .
   var persona ={
     nombre:'jorge',
     apellido : 'Pages',
     segundoNombre:'Andres'
   }
   console.log(persona.segundoNombre);
 
   // notacion por corchetes
   var persona ={
     nombre:'jorge',
     apellido : 'Pages',
     segundoNombre:'Andres'
   }
   console.log(persona['nombre']);
   // notacion por corchetes en arreglo
 
   var arreglo =[24,25,26,24,25,27,28]
 
   console.log(arreglo[6]);
 
   //Operador de determinacion de tipo(typeof)
 
   console.log(typeof true);
   console.log(typeof 'hola');
   console.log(typeof 25);