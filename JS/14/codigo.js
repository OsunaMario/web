function muestraOculta(enlace,p_id) {
	
    var p = document.getElementById(p_id);

    if(p.style.display!="none"){

        p.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";

    }else{
        p.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    }
}