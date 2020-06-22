const prompt = require('prompt-sync')();

var factura = prompt("Cual es el monto total de la factura?");
var porcentajePropina = prompt("Cuanta propina desea dejar");

var mensaje1 = 'Total sin propina: ';
var mensaje2 = 'Propina: ';
var mensaje3 = 'Total + Propina: ';

//Calculamos la Propina basada en el porcentaje

var propina = factura*(porcentajePropina/100);
var sumaTotal = Number(factura) + Number(propina);

console.log(mensaje1 + factura + " dolares");
console.log(mensaje2 + propina + " dolares");
console.log(mensaje3 + sumaTotal + " dolares");

