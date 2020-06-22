/*Este Programa calcula el puntaje promedio de una encuesta para
4 marcas de Gaseosas. Incluye el resultado de 6 personas*/


var resultadosEncuesta = [[2, 4, 5, 2, 1, 3], [5, 2, 2, 5, 5, 2],[5, 4, 5, 2, 5, 1], [4, 4, 1, 2, 5, 3]];

const GASEOSAS = resultadosEncuesta.length; // 4 gaseosas
const PERSONAS = resultadosEncuesta[0].length; // 6 personas

var matrizPuntajeGaseosas = new Array(GASEOSAS).fill(0); // lo mismo que [0, 0, 0, 0]
var matrizPuntajePersonas = new Array(PERSONAS).fill(0); // lo mismo que [0, 0, 0, 0, 0, 0]


var puntajePorGaseosa = 0;

for (var i = 0; i < GASEOSAS; i++){
    for(var j = 0; j < PERSONAS; j++){   
        puntajePorGaseosa = puntajePorGaseosa + resultadosEncuesta[i][j];
        matrizPuntajePersonas[j]= matrizPuntajePersonas[j] + resultadosEncuesta[i][j];    
    }
    matrizPuntajeGaseosas[i] = puntajePorGaseosa;
    puntajePorGaseosa = 0;
}

console.log(matrizPuntajeGaseosas);
console.log(matrizPuntajePersonas);


for (var i = 0; i < GASEOSAS; i ++){
    console.log("Gaseosa # " + (i+1) + " puntaje promedio: " + (matrizPuntajeGaseosas[i]/PERSONAS).toFixed(2));
    
}

console.log();
console.log ("****************************************************************************");
console.log();

for (var j = 0; j < PERSONAS; j++) {
    console.log("Persona # " + (j+1) + " puntaje promedio: " + (matrizPuntajePersonas[j]/GASEOSAS).toFixed(2));
}







