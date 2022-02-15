/*
EJERCICIO D
Se te solicita elevar al cuadrado cada dígito de un número y luego 
concatenarlos todos juntos.
Por ejemplo, si tomamos 9119 y llamamos nuestra función con este número, 
la función debería devolver 811181, porque 9 al cuadrado es 81, 
1 al cuadrado es 1, 1 al cuadrado es 1 y 9 al cuadrado es 81

Ejemplo: fn(9119) // 811181

Nota: La función acepta un número entero y retorna un entero
*/
function squareDigits(num){

    let numStr = num + "";
    let total = "";
  
    for(let i in numStr){
      total += (parseInt(numStr[i])**2 + "");
    }
  
    return parseInt(total);
  }
  console.log(squareDigits(9119));