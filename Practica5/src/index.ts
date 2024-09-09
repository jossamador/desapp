import { get } from "http";

let miVariable: string = "Hola mundo";
console.log(miVariable);

const person1 = {
    firstName1: "Juan",
    lastName1: "Perez",
    age: 25
};

let {firstName1, lastName1, age} = person1;
console.log(firstName1, ' ', lastName1, age);

let miNombre = ["M", "a", "r", "c", "o"];
let [a1, a2, a3, a4, a5]: string[] = miNombre;
console.log(a1, a2, a3, a4, a5);

const frutas: string[] = ["manzana", "pera", "uva"];
const [f1, f2, f3] = frutas;
console.log(f1, f2, f3);

let [frutaA,,,frutaB]= frutas;
console.log(frutaA,frutaB);

class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    
    getEdad(): number {
        return this.edad;
        

    }
}


let personaje1 = new Persona("Alberto", 25);
console.log(personaje1.edad);
console.log(personaje1.nombre);
personaje1.edad = 25;
console.log(personaje1.edad);

let personaje2 = new Persona("Juan", 30);
personaje2.edad++;
console.log(personaje2.getEdad());

