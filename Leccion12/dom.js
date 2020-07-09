
// La funciones que abren el enlace y muestra la información de contacto

function abreEnlace(){
	window.open ("https://www.motofichas.com/marcas/bmw/k-1300-r-12");
}

function muestraContacto() {
    //consiguimos la referencia al bloque de contacto
	var infoContacto = document.getElementById("contenedor");
	//determinamos si el bloque es visible
	var visibilidad = infoContacto.style.display;
	//consiguimos la referencia al botón mostrar Contacto;
	var botonContacto = document.getElementById("boton");

	if (visibilidad == "block") {
		//si la información de contacto es visible, ocúltalo
		infoContacto.style.display ="none";
        // cambia el nombre del boton a "mostrar contacto"
		botonContacto.innerHTML = "Contacto";


	} else {
		// si la información de contacto no es visible, muéstralo
		infoContacto.style.display = 'block';
		//cambia el nombre del boton a "ocultar"
		botonContacto.innerHTML = "ocultar";
	}
}

