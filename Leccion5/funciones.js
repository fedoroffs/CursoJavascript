/*Este programa calcula el costo de vender un producto
en MercadoLibre (Mexico) de acuerdo al precio del producto
y el tipo de servicio (gratuito, clasico, premium). */


const prompt = require('prompt-sync')();


function calculaCosto (precioProducto, tipoDeServicio){
var tarifa = 0;
if (precioProducto <= 499 && tipoDeServicio == 1 && precioProducto>=0) {
    tarifa = 5 + 0.13 * precioProducto;
}else if (precioProducto <=499 && tipoDeServicio == 2 && precioProducto>=0){
    tarifa = 0.13 * precioProducto;
}else if (precioProducto > 499 && tipoDeServicio == 1 ){
    tarifa = 5 + 0.175 * precioProducto; 
} else if (precioProducto > 499 && tipoDeServicio == 2){
    tarifa = 0.175 * precioProducto;
} else if (tipoDeServicio == 0) {
    tarifa = 0;
} else {
    console.log ("Información inválida, inténtalo de nuevo");
    tarifa = 0;
}
return tarifa;
}

var calculaGanancia = (precioProducto, tarifa) => precioProducto - tarifa;

function imprimeMensaje(){
let precioProducto = prompt("¿Cual es el Precio del Producto? ");
let tipoDeServicio = prompt("Elige el servicio: gratuito -> 0 , clasico -> 1 , premium -> 2 ");
let tarifa = calculaCosto(precioProducto, tipoDeServicio);
let ganancia = calculaGanancia(precioProducto, tarifa);
console.log("******************************************************");
console.log ("El costo final para vender su producto es: " + tarifa + " pesos");
console.log ("******************************************************");
if (isNaN(ganancia) || tipoDeServicio !=0 || tipoDeServicio !=1 || tipoDeServicio !=2){ 
    console.log("Información Inválida, inténtalo de nuevo");
} else {
    console.log ("Su Ganancia es de " + ganancia + " pesos");
}
console.log();
console.log("*******************************************************");
console.log("Gracias por Usar Nuestros Servicios!");
}

imprimeMensaje();






