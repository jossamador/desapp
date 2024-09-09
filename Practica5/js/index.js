"use strict";
let miVariable = "Hola mundo";
console.log(miVariable);
const person1 = {
    firstName1: "Juan",
    lastName1: "Perez",
    age: 25
};
let { firstName1, lastName1, age } = person1;
console.log(firstName1, ' ', lastName1, age);
let miNombre = ["M", "a", "r", "c", "o"];
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
const frutas = ["manzana", "pera", "uva"];
const [f1, f2, f3] = frutas;
console.log(f1, f2, f3);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, frutaB);
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let personaje1 = new Persona("Alberto", 25);
console.log(personaje1.nombre, personaje1.edad);
personaje1.edad = 25;
console.log(personaje1.nombre, personaje1.edad);
