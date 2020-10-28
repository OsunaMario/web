var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var digitos = prompt("Ingresa los números de tu DNI (sin letra)");
var letraUser = prompt("Ingresa la letra (último dígito de tu DNI)");

if (parseInt(digitos) < 0 || parseInt(digitos) > 99999999) {
alert("El número proporcionado no es válido")
}else{
	letraDNI = letras[(parseInt(digitos)%23)];
	if (letraUser != letraDNI) {
		alert("La letra ingresada no es correcta")
	}else{
		alert("El número y la letra son correctos")
	}
}