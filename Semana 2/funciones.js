// Las funciones es un tipo de dato
// Tipos de datos: Number, String, Boolean, Undefined
typeof function() {}; // function

// Primera forma: Declaracion
// Sintaxis --> function escribirPrimeraForma(p1, p2) { secuencias }

function goodMorning(){
    return "Good morning!"
}
console.log(goodMorning());

// Segunda forma: Expresion
// Sintaxis --> var nombre = function(p1, p2) { secuencias }

const greetings = function goodfternoon(){
    return "Good Afternoon";
}

console.log(greetings());

// Tercera forma: Objeto
// Sintaxis --> new Function(p1, p2, code)
const bye = new Function("return 'Good Bye';");
console.log(bye());

/* Funciones Anónimas */
const car = function(){
    return "Volvo";
}
console.log(typeof car);
console.log(car());

/* Callbacks */

// Sample 1 - Callbacks
const funcB = function(){
    console.log("Function B Executed");
}
const funcA = function(callback){
    callback();
}
funcA(funcB);

// Sample 2 - Callbacks

const goodMessage = function(){
    console.log("Well Done..!!");
}
const errorMessage = function(){
    console.error("Bad Boy");
}
const calculate = function(callback, callbackError){
    let num = ~~(Math.random() * 5);

    if(num > 2) callback();
    else callbackError();
}
calculate(goodMessage, errorMessage);

/* Funciones Auto-ejecutables */

(function() {
    console.log("Soy una función auto-ejecutable");
})();

(function(nombre){
    console.log(`¡Hola, ${nombre}!`);
})("Keneth");

const f = (function(nombre){
    return `¡Hola, ${nombre}!`;
})("Jessica");
console.log(f);
console.log(typeof f);