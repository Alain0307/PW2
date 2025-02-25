function suma(n1, n2){
    return parseInt(n1)+parseInt(n2);
}

function resta(n1, n2){
    return parseInt(n1)- parseInt(n2);
}

function multiplicacion(n1, n2){
    return parseInt(n1)*parseInt(n2);
}

function division(n1, n2){
    return parseInt(n1)/parseInt(n2);
}

let numero1 = prompt("Ingresa el numero1: ");
let numero2 = prompt("Ingresa el numero2: ");




let operacion = parseInt(prompt(`
    Operacion:
    1.- Suma
    2.- Resta
    3.- Multiplicacion
    4.- Division
    `));

switch(operacion){
    case 1:
        console.log(`La suma es: ${suma(numero1, numero2)}`);
        break;
    case 2:
        console.log(`La resta es: ${resta(numero1, numero2)}`);
        break;
    case 3:
        console.log(`La multiplicacion es: ${multiplicacion(numero1, numero2)}`);
        break;
    case 4:
        console.log(`La division es: ${division(numero1, numero2)}`);
        break;
}