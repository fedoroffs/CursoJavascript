/*Este programa calcula la nota final de un cuurso*/

const prompt = require('prompt-sync')();


function calculaPromedio(notas) {
    var suma =0;
    if (notas.length === 0){
         throw new Error ("la matriz no puede estar vacía");
     }

    if (notas.length < 5) {
         throw new RangeError ("El curso tiene 5 calificaciones");
    }

     for ( var i =0; i < notas.length; i ++){
         if(isNaN(notas[i])){
             throw new TypeError (notas[i] + " no es un número");

         }

         if (notas[i]<0) {
             throw new RangeError ("no se pueden colocar valores negativos");
         }
         suma = suma + notas[i];
     }    
     var promedio = suma / notas.length;
    return promedio;
}

try {

    var x = calculaPromedio ([10, 20, 30, 40, 50]);
    console.log ("La nota final en el curso es de: " + x + " puntos");
    console.log ("************************************************************************");
    if (x< 70){
        console.log ("Lamentablemente no pasó este curso, tiene que estudiar más.");
        console.log ("************************************************************************");
    }
    else {
        console.log ("¡Felicidades, pasó el curso, buen trabajo!");
        console.log ("*******************************************************************");
    }
} catch (error) {
  console.log(error);

} finally{
    console.log ("¡Gracias por usar nuestro programa!");
    console.log ("************************************************************************");
}

