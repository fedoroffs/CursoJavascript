/*Este porgrama genera un número aleatorio e imprime una frase motivacional*/

const prompt = require('prompt-sync')();


/* La función genera un número entero entre 0 y 9 */



function generaNumero(){
    var numeroAleatorio = Math.floor(Math.random()*10);
    return numeroAleatorio;
}


function imprimeFrase (){
    var frasesMotivacionales = [

        "Nos convertimos en lo que pensamos - Earl Nightingale",
        "Aprende a ser feliz con lo que tienes mientras persigues lo que quieres.-Jim Rohn.",
        "La única diferencia entre un buen y mal día es tu actitud.- Dennis S. Brown",
        "Todos los problemas comienzan cuando empezamos a pensar lo que otros piensan de nosotros.- Bryant McGill",
        "El fracaso no es una opción. Todo el mundo tiene que triunfar - Arnold Schwarzenegger.",
        "No quiero ganarme la vida, quiero vivir - Oscar Wilde",
        "Lo que no te mata te hace más fuerte - Friedrich Nietzsche.",
        "No busques los errores, busca un remedio - Henry Ford",
        "Visión sin acción es un sueño. Acción sin visión es una pesadilla.- Proverbio chino.",
        "No tienes que ser grande para comenzar, pero tienes que comenzar para ser grande.- Zig Ziglar."
    ];
    console.log();

    do {
    var eleccion = prompt("¿Te gustaría ver una frase motivacional ?  ");
    console.log();

    if (eleccion == "si"){
        console.log("*******************************************************************");
        console.log(frasesMotivacionales[generaNumero()]);
        console.log("*******************************************************************");
        console.log();

    }else if (eleccion == "no") {
        console.log("*******************************************************************");
        console.log ("No hay Problema, ¡Que tengas un lindo día!")
        console.log("*******************************************************************");
        console.log();

    }else{
        console.log ("información inválida")
    }
} while (eleccion == "si");

}



imprimeFrase();








