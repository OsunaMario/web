var entero = prompt('Escribe un número entero y te diré si es par o impar');

alert(paroimpar(entero));

function paroimpar(x) {
	if (x%2==0) {
		return 'Es par';
	}else{
		return 'Es impar';
	}
}