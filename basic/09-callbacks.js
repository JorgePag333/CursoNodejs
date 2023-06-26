/**
 *
 * CallBacks
 */

//funcion sin collbacks

const suma = (a, b) => {
  return a + b;
};

var resultado = suma(1, 2);

console.log(resultado);

// funcion con Collbacks
const suma1 = (a, b, cb) => cb(a + b);

const imprimir = (data) => console.log(data);
suma1(1, 2, imprimir);

/****** */
/*
const getData = (cb) => {
  setTimeout( () =>
    cb({
      nombre: "Jorge",
      apellido: "Pages",
    }),
    4000
  );
};

const imprimirData =(data) => console.log(data);
getData(imprimirData)
*/
const getData = (cb,cbError) => {
    if(false){
    setTimeout( () =>
      cb({
        nombre: "Jorge",
        apellido: "Pages",
      }),
      4000
    );
    }else{
        cbError(new Error('No se pudo Obtener el dato '))}
  };
  
  const imprimirData =(data) => console.log(data);
  const errorHandler = (error)=> console.log(error);
  getData(imprimirData, errorHandler)

  