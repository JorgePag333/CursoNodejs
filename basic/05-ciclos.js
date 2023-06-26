/**
 * ciclos
 */

//while

var contador=0;
while (contador <100) {
    console.log((contador + 1 )+ ') ' +'Hola Mundo');
    contador++;
}

//do while
var contador=0;
do {
    console.log((contador + 1 )+ ') ' +'Hola Mundo');
    contador++;
} while (contador <10);

//for
for(var x =0;x < 100;x++){
    console.log((x + 1 )+ ') ' +'Hola Mundo');
}
//for in
var persona={
    nombre:'jorge',
    apellido:'Pages',
    edad:35
};

for (let key in persona) {
   /**  if (Object.hasOwnProperty.call(object, key)) {
        let element = object[key];
        
    }*/
    console.log(key,persona[key]);
}
//for of
var arreglo=[1,2,3,4,5];
for (let valor of arreglo) {
    console.log(valor);
}

var nombre='Jorge Pages';
for (let valor of nombre) {
    console.log(valor);
}
//for each

array.forEach(element => {
    
});