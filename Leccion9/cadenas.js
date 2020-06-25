/*Este programa verifica si la contraseña es una clave válida*/ 

/*La función chequea si la clave tiene al menos 8 caracteres*/ 
/*
function tieneOchoCaracteres(clave){
    if (clave.length < 8){
        return false;
    }
    return true;
}



function noTieneEspacio (clave){
    let claveSinEspacio = clave.replace(" ", "");
    if (clave.length == claveSinEspacio.length){
        return true;
    }
    return false;
}




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




function tieneMayuscula(clave) {
    var tieneMayuscula = false;
    if (clave !== clave.toLowerCase()){
        tieneMayuscula = true;
    } else {
        tieneMayuscula = false;
    }
    return tieneMayuscula;
}




function tieneCaracterEspecial(clave){
    for (var i =0; i< clave.length; i++){
        if (clave[i] == "!" || clave[i] == "@" || clave[i]=="#" || clave[i] == "$") {
            return true;
        }
    }
 return false;
}



function chequeaClave (clave){
    var mensaje = " ";
    if (tieneOchoCaracteres(clave) && noTieneEspacio(clave) && tieneDigitos(clave) 
    && tieneDigitos(clave) && tieneCaracterEspecial(clave) && tieneMayuscula(clave)){
        mensaje = "Buen Trabajo, su contraseña cumple todos los requisitos";
    } else {
        mensaje = "Su contraseña no tiene los requisitos necesarios";
    }
    return mensaje;

}

console.log(chequeaClave("passworD2012@"));
console.log(chequeaClave("password"));
console.log(chequeaClave("pas23sword"));
console.log(chequeaClave("pas23Sword"));
console.log(chequeaClave("pas23 Sword"));




*/


