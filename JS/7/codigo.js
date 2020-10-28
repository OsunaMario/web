var x = prompt("Introduce un número para calcular su factorial");
if (x == 0) {
	alert("Introduzca un número diferente a 0 :(");
}else{
	if (x<0) {
		var factorial = x;
		var i = -1;
		for (i;i>x;i--){
			factorial = factorial * (x-i);
		}
		alert("Factorial de " + x + " = " + factorial);
	}else{
		if (x>0) {
			var factorial = x;
			var i = 1;
			for (i;i<x;i++){
				factorial = factorial * (x-i);
			}
		alert("Factorial de " + x + " = " + factorial);
		}
	}
}