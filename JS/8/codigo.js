var cadena = prompt('Escribe una frase y te diré si es palíndromo :)');
function palindromo(cadena) {
    let array = cadena.split(' ').join('').toLowerCase();
    let reverse = array.split('').reverse().join('');
    if (array == reverse) {
    	return 'Es palíndromo';
    }else{
    	return 'No es palíndromo';
    }
}
alert(palindromo(cadena));