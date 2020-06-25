/*Este programa calcula el cumpleaños de una persona*/


var estudiantes = {

    "0001": new Date(2003, 1, 22),
    "0002": new Date(2002, 9, 25),
    "0003": new Date(2003, 4, 9),
    "0004": new Date(2001, 3, 20),
    "0005": new Date(2002, 4, 15),
    "0006": new Date(2003, 5, 6),
    "0007": new Date(2002, 11, 3),
    "0008": new Date(2003, 8, 11),
    "0009": new Date(2001, 4, 9 ),
    "1000": new Date(2004, 3, 20) 
};



function calculaEdad(fecha){

    let fechaDeHoy = new Date();
    let fechaNacimiento = new Date (fecha);
    let edadCalculada = fechaDeHoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMes = fechaDeHoy.getMonth() - fechaNacimiento.getMonth();

    if ((diferenciaMes < 0) || ( diferenciaMes === 0)&&(fechaDeHoy.getDate()< fechaNacimiento.getDate())){
        edadCalculada = edadCalculada - 1;
    }

    return edadCalculada;
}

for (persona in estudiantes) {
    console.log( persona + " tiene " + calculaEdad(estudiantes[persona]) + " años");
}


