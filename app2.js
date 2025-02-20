let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
let numero3 = parseInt(prompt("Ingrese el tercer numero: "));

if(numero1 === numero2 && numero2 === numero3 ){
    console.log("Los tres numeros son iguales");
}else if(numero1 === numero2 | numero1 === numero3 | numero2 === numero3){
    console.log("Hay dos numeros iguales");
}else{
    console.log("No hay números iguales");
}

let mayor = numero1;

if(numero2 > mayor){
    mayor = numero2;
}
if(numero3 > mayor){
    mayor = numero3;
}
console.log("El numero mayor es: " + mayor);