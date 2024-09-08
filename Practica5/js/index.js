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
let miNombre = "Marco";
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
