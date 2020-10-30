var cadena = prompt('Ingrese una cadena');

alert(revisar(cadena));

function revisar(cadena){

	if (cadena === cadena.toUpperCase()) {
		return 'La cadena tiene solo mayúsculas';
	}else if (cadena === cadena.toLowerCase()) {
		return 'La cadena tiene solo minúsculas';
	}else{
		return 'La cadena tiene mayúsculas y minúsculas';
	}
}