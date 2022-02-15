/*
EJERCICIO A
El factorial de un número entero n es una operación 
matemática que consiste en multiplicar todos los factores 
n x (n-1) x (n-2) x ... x 1. Así, el factorial de 
5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120

Utilizando un bucle, crear un script que calcule 
el factorial de un número entero.
*/
let n = 5;
var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
console.log(total);

