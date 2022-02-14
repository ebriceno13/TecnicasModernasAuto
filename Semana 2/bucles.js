/*Variables y constantes
    let num = 5; --> ambito a nivel de funcion
    var num2 = "6"; --> ambito global
    const --> Declaracion e Inicializacion en la misma linea de codigo

    Declaracion: var nombre; let apellido;
    Inicializacion: nombre = "Kenneth"; apellido = "Murillo";

    === ó !==
*/

console.log("WHILE")

//while
let iWhile = 0;
while(iWhile < 10){
    console.log("Valor de i: " + iWhile);
    console.log("Valor de i:", iWhile);
    iWhile = iWhile + 1;
}

console.log("FOR");

//for: standard
//for(inicializacion; condicion; incremento/decremento)
for(let iFor = 0; iFor < 10; iFor++){
    console.log("Valor de i:", iFor);
}

console.log("DO-WHILE");

//do-while
let iDo = 0;
let nums = '';
do{
    iDo++;
    nums = nums + iDo;
} while(iDo < 10);
console.log("SUM ", nums);

console.log("FOR-IN");

//for-in
var obj = {a:1, b:2, c:3 };

for(const prop in obj){
    console.log(`obj.${prop} = ${obj[prop]}`);
}

console.log("FOR-OF");

//for-of
let numbers = [10,35,12];
for(let num of numbers){
    num += 1;
    console.log("num:", num);
}

for(const num of numbers){
    console.log("num:", num);
}

let iString = "ucreativa";
for(let str of iString){
    console.log("Char:", str);
}

let iSet = new Set([1,2,3,3,2,1,1]);
for(let num of iSet){
    console.log("Num:", num);z
}

//Array functions --> forEach 

