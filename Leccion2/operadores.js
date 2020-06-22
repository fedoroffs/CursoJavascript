//Un programa para calcular el cambio en
//billetes de 10 dolares
//billetes de 5 dolares
//billetes 1 un dolar
// monedas de 25 centavos (quarter)
//monedas de 10 centavos (dime)
//monedas de 5 centavos (nickel)
// monedas de 1 centavo (cent)

const prompt = require('prompt-sync')();
var msj1 = "Billetes de Diez Dolares: ";
var msj2 = "Billetes de Cinco Dolares: ";
var msj3 = "Billetes de Un Dolar: ";
var msj4 = "Monedas de 25 centavos(quarters): ";
var msj5 = "Monedas de 10 centavos (dimes): ";
var msj6 = "Monedas de 5 centavos (nickels): ";
var msj7 = "Centavos: ";

var factura = parseFloat(prompt("¿Cual es el monto total de la factura? "), 10);
var pago = parseFloat(prompt("¿Cuanto le han pagado? "), 10);
var cambio = pago - factura;
// 50 - 32.80 = 17.20
var billeteDeDiez = Math.trunc(cambio/10); // 17.20/10 = 1.720;
cambio = cambio%10 // 7.20
var billeteDeCinco = Math.trunc(cambio/5);// 7.20/5 = 1.44
cambio%=5;//7.20 mod 5 = 2.2
var billeteDeUno = Math.trunc(cambio/1); // 2.2/1 = 2.2
cambio%= 1; // 2.2mod1 = 0.2

var quarter = Math.trunc(cambio/0.25);// 0.2/0.25 = 0.8
cambio%= 0.25; // 0.2 mod 0.25 = 0.2

var dime = Math.trunc(cambio/0.10);// 0.2/0.10 =2
cambio%= 0.10;// 0.2mod0.10 = 0

var nickel = Math.trunc(cambio/0.05);// 0/0.05 = 0
cambio%= 0.05;// 0 mod 0.05 = 0;

var centavos = Math.trunc(cambio/0.01); //0/0.01 = 0

console.log("****************************************");
console.log(msj1 + billeteDeDiez);
console.log(msj2 + billeteDeCinco);
console.log(msj3 + billeteDeUno);
console.log(msj4 + quarter);
console.log(msj5 + dime);
console.log(msj6 + nickel);
console.log(msj7 + centavos);
console.log("***************************************");
console.log ("¡Gracias" + " " + "por" + " " + "su compra!")
