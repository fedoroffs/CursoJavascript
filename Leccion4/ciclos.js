/*Un juego que le pide al usuario que adivine un número entre 0 y 10
el usuario tiene tres intentos */


const prompt = require('prompt-sync')();

var numeroSecreto = Math.trunc((Math.random() * 10) + 1);

var numeroUsuario = prompt("ADIVINA UN NÚMERO ENTRE 0 Y 10, 99 PARA TERMINAR EL JUEGO: ");
var intentos = 1;

while(true){
    if (intentos ==3){
        console.log ("SOLAMENTE PUEDE INTENTAR 3 VECES");
        break;
    } else if (numeroUsuario < numeroSecreto) {
        numeroUsuario = prompt("El NÚMERO SECRETO ES MAYOR, ELIGE OTRO ");
        intentos++;
        
    } else if (numeroUsuario == 99) {
        console.log ("EL JUEGO TERMINÓ. GRACIAS POR JUGAR");
        break;
    } else if(numeroUsuario > numeroSecreto) {
        numeroUsuario = prompt ("EL NÚMERO SECRETO ES MENOR, ELIGE OTRO ");
        intentos++;
        
    } else if (numeroUsuario == numeroSecreto) {
        console.log ("¡FELICIDADES, GANÓ EL JUEGO!");
        break;

    } else {
        console.log ("INFORMACIÓN INVÁLIDA");
        break;
    }
} 





/*
var tasaImpuesto = 25; //variable Global
function calculaBaseImpuesto(compra){
    if(compra <=1000){
        var baseImpuesto = 5;
        baseImpuesto = 1 + tasaImpuesto/100; //baseImpuesto es local
               
    }else{
        let baseImpuestoAjustado = 10;
        baseImpuestoAjustado = 1 + (tasaImpuesto +5)/100;
        //baseImpuestoAjustado es visible solamente en este bloque         
    }
    console.log(baseImpuesto); // 1.25
    console.log(baseImpuestoAjustado);// ReferenceError: baseImpuestoAjustado is not defined    
}
var x = calculaBaseImpuesto(1000);


*/


/*
var tasaImpuesto = 25; //variable global
function calculaBaseImpuesto (){
    var baseImpuesto = 1500; //variable local
    baseImpuesto = 1 + tasaImpuesto/100;
    return baseImpuesto;
}
console.log(tasaImpuesto); // 25
console.log(baseImpuesto); //ReferenceError: baseImpuesto is not defined
*/




