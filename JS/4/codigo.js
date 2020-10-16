var valores = [true, 5, false, "hola", "adios", 2];

/*1.- Determinar cual de los dos elementos de texto es mayor*/
if(valores[3]>valores[4]){
	alert('Elemento de texto mayor = ' + valores[3]);
}else{
	alert('Elemento de texto mayor = ' + valores[4]);
}

/*2.- Utilizando exclusivamente los dos valores booleanos del array, 
determinar los operadores necesarios para obtener un resultado true 
y otro resultado false*/
alert('Operador para true validando true y false es: \n' + valores[0] + ' || ' + valores[2] + ' = ' + (valores[0] || valores[2]));
alert('Operador para falsevalidando true y false es: \n' + valores[0] + ' && ' + valores[2] + ' = ' + (valores[0] && valores[2]));

/*3.- Determinar el resultado de las cinco operaciones matemáticas 
realizadas con los dos elementos numéricos*/
alert('Suma: ' + valores[1] + ' + ' + valores[5] + ' = ' + (valores[1] + valores[5]));
alert('Resta: ' + valores[1] + ' - ' + valores[5] + ' = ' + (valores[1] - valores[5]));
alert('Multiplicación: ' + valores[1] + ' * ' + valores[5] + ' = ' + (valores[1] * valores[5]));
alert('División: ' + valores[1] + ' / ' + valores[5] + ' = ' + (valores[1] / valores[5]));
alert('Residuo: ' + valores[1] + ' % ' + valores[5] + ' = ' + (valores[1] % valores[5]));