/*Este programa calcula cuantos años tiene una persona
 y chequea si hay cumpleaños el mes corriente*/

var estudiantes = {

    "Juan": new Date(2003, 1, 22),
    "Adrian": new Date(2002, 9, 25),
    "Carolina": new Date(2003, 4, 9),
    "Alberto": new Date(2001, 3, 20),
    "Roberto": new Date(2002, 4, 15),
    "Alejandro": new Date(2003, 4, 30),
    "Luna": new Date(2002, 11, 3),
    "Maria": new Date(2003, 8, 11),
    "Carlos": new Date(2001, 4, 9 ),
    "Jasmin": new Date(2004, 4, 25) 
};


function calculaEdad(fecha){

    let fechaDeHoy = new Date();
    let fechaNacimiento = new Date(fecha);
    let edadCalculada = fechaDeHoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMes = fechaDeHoy.getMonth() - fechaNacimiento.getMonth();
    
    //reducimos la edad por un año si es que no pasó el día del cumpleaños.

    if ((diferenciaMes < 0) || ( diferenciaMes === 0) && (fechaDeHoy.getDate() < fechaNacimiento.getDate())){
        edadCalculada = edadCalculada - 1;
    }

    return edadCalculada;
}

//Imprimimos cuantos años tiene cada estudiante usando una plantilla de cadena de texto

for (persona in estudiantes) {
    console.log(` ${persona} tiene ${calculaEdad(estudiantes[persona])} años.`);
}

//Chequea si hay un cumpleaños en el mes corriente

function chequeaCumpleanos(){
 var fechaHoy = new Date();
 for(persona in estudiantes) {
    
    var x = fechaHoy.getMonth() - estudiantes[persona].getMonth();
    var y = estudiantes[persona].getDate() - fechaHoy.getDate();
    var numCumpleanos = 0;

    if(x == 0 && y > 0) {
    console.log(`faltan ${y} dias para el cumpleaños de ${persona}`); 
    numCumpleanos++;
    }
    if (x == 0 && y == 0){
         console.log (`!Atención! Hoy es el cumpleaños de ${persona}`);
         numCumpleanos++;
        }
  }
 if (numCumpleanos == 0){
      console.log ("No hay cumpleaños este mes.");
  }  
}

chequeaCumpleanos();