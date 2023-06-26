/**
 * control de flujo
 */

//if
 var x= 4;
 var y = 6;
if(x >= y){
 console.log('numero es mayor');
}else{
    console.log('el numero es menor');
}

const MAYORIA_DE_EDAD=18;

var edad= 0;

if (edad > MAYORIA_DE_EDAD) {
    console.log('Es Mayor de edad');
}else if (edad === MAYORIA_DE_EDAD) {
    console.log('Tiene 18 años');
}else if(edad < MAYORIA_DE_EDAD && edad > 1){
    console.log('Es menor de Edad');
}
 else {
    console.log('edad no valida');
}

//switch

switch (edad) {
    case value:
        //codigo
        break;

    default:
        break;
}

var producto = 'naranjas';

switch (producto) {
    case 'papaya':
        console.log('La papaya vale $1 cada libra');
        break;
    case 'naranjas':
        console.log('La papaya vale $21 cada libra');
        break;
    case 'mango':
        console.log('La papaya vale $12 cada libra');
        break;
    case 'babana':
            console.log('La papaya vale $10 cada libra');
            break;
    case 'mansana':
        console.log('La papaya vale $8 cada libra');
        break;
        default:
            console.log('no disponemos de ese producto');
        break;
}