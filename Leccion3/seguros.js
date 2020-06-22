/*Programa para mostrar el costo de seguro de auto
de acuerdo con la edad y el género del consumidor*/
const prompt = require('prompt-sync')();

var categoria1A = 2500; //16-25 años, hombre
var categoria1B = 2350; //16-25 años, mujer
var categoria2A = 2000; // 26-39 años hombre
var categoria2B = 1850; // 26-39 años mujer
var categoria3A = 1500; // >=40 años  hombre
var categoria3B = 1250; // >=40 años  mujer

var edad = prompt("¿Cual es su edad?");
var genero = prompt("Elija su genero-ingrese 1 para hombre, 2 para mujer ");


if((edad < 16) && (genero == 1 || genero ==2)){
    console.log("Todavia no puede comprar seguro de auto");
} else if(edad <=25 && genero == 1){
    console.log("El precio de su poliza es: " + categoria1A);
} else if (edad <=25 && genero ==2){
    console.log("El precio de su poliza es: " + categoria1B);
} else if (edad <=39 && genero ==1){
    console.log("El precio de su poliza es: " + categoria2A);
} else if (edad <=39 && genero ==2){
    console.log("El precio de su poliza es: " + categoria2B);
} else if (edad >=40 && edad<=85 && genero == 1){
    console.log("El precio de su poliza es: " + categoria3A);
} else if (edad >=40 && edad <=85 && genero ==2){
    console.log("El precio de su poliza es: " + categoria3B);
} else if (edad>85 && (genero ==1 || genero ==2)) {
    console.log ("Lo sentimos no tenemos polizas disponibles")
} else {
    console.log ("Informacion invalida, por favor intente de nuevo");
}


