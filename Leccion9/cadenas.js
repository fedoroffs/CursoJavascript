/*Este programa verfica si la contraseña es una clave válida*/ 

/*La función chequea si la clave tiene al menos 8 caracteres*/ 

function tieneOchoCaracteres(clave){
    if (clave.length < 8){
        return false;
    }
    return true;
}

/*La función chequea si la clave tiene espacios vacios*/

function noTieneEspacio (clave){
    let claveSinEspacio = clave.replace(" ", "");
    if (clave.length == claveSinEspacio.length){
        return true;
    }
    return false;
}


/*La función chequea si la clave tiene hay al menos dos digitos */

function tieneDigitos(clave){
    cuantosDigitos = 0;
    for (var i =0; i<clave.length; i++){
        if (!isNaN(clave[i])){
            cuantosDigitos ++; //lo mismo que cuantosDigitos = cuantosDigitos + 1;
        }
    }
    if(cuantosDigitos >= 2){
        return true;
    } 
    return false;
}

/*La función chequea si la clave tiene al menos una MAYUSCULA*/


function tieneMayuscula(clave) {
    var tieneMayuscula = false;
    if (clave !== clave.toLowerCase()){
        tieneMayuscula = true;
    } else {
        tieneMayuscula = false;
    }
    return tieneMayuscula;
}


/*La función chequea si la clave tiene los siguientes caracteres especiales "!@#$"*/

function tieneCaracterEspecial(clave){
    for (var i =0; i< clave.length; i++){
        if (clave[i] == "!" || clave[i] == "@" || clave[i]=="#" || clave[i] == "$") {
            return true;
        }
    }
 return false;
}

/*La función chequea si la clave tiene todos los requesitos*/

function chequeaClave (clave){
    var mensaje = " ";
    if (tieneOchoCaracteres(clave) && noTieneEspacio(clave) && tieneDigitos(clave) 
    && tieneDigitos(clave) && tieneCaracterEspecial(clave) && tieneMayuscula(clave)){
        mensaje = "Buen Trabajo, su contraseña satisface todos los requesitos";
    } else {
        mensaje = "Su contraseña no tiene los requesitos necesarios";
    }
    return mensaje;

}

console.log(chequeaClave("passworD2012@"));

