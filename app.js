let numeroMaquina =Math.floor(Math.random()+(10-1)+1);
console.log(numeroMaquina);
let vidas = 5;
let numeroUser = parseInt(prompt("Ingresa un número del 1 al 10: "));
while(numeroMaquina !== numeroUser && vidas>1){
    vidas --;
    numeroUser = parseInt(prompt("El número no es correcto. Te quedan: " + vidas));

}
if(numeroMaquina === numeroUser){
    console.log("Ganaste");
}else{
    console.log("Perdiste y el numero era: " + numeroMaquina);
}