/*Este Programa le muestra al usuario el precio del carro de acuerdo 
a la configuración de las opciones*/

const prompt = require('prompt-sync')();

var carro = {
 modelo: "Ford Mustang",  
 colorBasico: "negro",
 motor: {
     basico: "4 cilindros turbo",
     premium: "8 cilindros",
 },

 transmision: {
    manual: "6 velocidades",
    automatica: "7 velocidades"
 },

 precio: {
    configuracion1: 27999,
    configuracion2: 29999,
    configuracion3: 35999,
    configuracion4: 39999
 },

 ajusteDePrecio: 0, // se agrega 999$ si el color no es el color básico.
 costoFinal: 0, // suma el precio de acuerdo a la configuración más el ajuste por el color

 get color() {
    return this.colorBasico;
 },

 set color (nuevoColor) {
    this.colorBasico = nuevoColor;
 },

 ajustaPrecio (color) {
   if (color == "negro") {
      this.ajusteDePrecio = 0;
   } else if (color == "plateado" || color == "rojo" || color == "azul" || color == "gris") {
      this.ajusteDePrecio = 999;
      this.color = color;
   } else{
      console.log("Selección de color inválida");
   }
   return this.ajusteDePrecio;
},
calculaCostoFinal(){
   var motor = prompt("Elige el tipo de motor 4 o 8 cilindros-->  ");
   var transmision = prompt("Elige la transmisión: 6 caja manual, 7 caja automatica-->  ");
   var color = prompt("Elige el color: negro, plateado, rojo, azul, gris-->  ");
   
   if (motor == 4 && transmision == 6){
      this.costoFinal = this.precio.configuracion1 + this.ajustaPrecio(color);
   }
   else if (motor == 4 && transmision == 7){
      this.costoFinal = this.precio.configuracion2 + this.ajustaPrecio(color);
   }
   else if (motor == 8 && transmision == 6){
      this.costoFinal = this.precio.configuracion3 + this.ajustaPrecio(color);
   } else if (motor == 8 && transmision == 7){
      this.costoFinal = this.precio.configuracion4 + this.ajustaPrecio(color); 
   } else {
      console.log ("Selección de motor y transmisión inválida");  
   }
   return this.costoFinal;
}
};


// Ejecutamos el programa usando el objeto "carro".

console.log("***********************************************************************");
console.log ("El precio de su " + carro.modelo + " de color " + carro.color + " es de " + carro.calculaCostoFinal() + " dólares;");
console.log ("***********************************************************************");







