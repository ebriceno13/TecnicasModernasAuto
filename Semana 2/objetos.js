const player = {}; //es un objeto vacio

const persona = {
    nombre: "K1k3",
    ciudad: "Heredia",
    vacaciones: 0
};

const jugador = {
    nombre: "K1k3",
    ciudad: "Heredia",
    vacaciones: 0,
    direccion: {
        provincia: "",
        canton: "",
        distrito: "",
        barrio: "",
        senhas: ""
    }
};

console.log(persona.nombre);
console.log(persona["nombre"]);

const array = new Array(jugador);
for (let index = 0; index < array.length; index++){
    const element = array[index];
    console.log(element.provincia);
}