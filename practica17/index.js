const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(_.chunk(array, 2));

let arreglo = ["Juan", "Ana", "Pedro", "Maria", "Luis", "Carlos", "Jose", "Luisa", "Marta", "Lucia"];
console.log(_.chunk(arreglo, 2));

let array1 = ["Spider-Man", "IronMan", "Hulk", "Thor", "Capitan America", "Black Widow", "Doctor Strange", "Black Panther"];
let array2 = ["Batman", "Superman", "Flash", "Wonder Woman", "Aquaman", "Cyborg", "Green Lantern", "Martian Manhunter"];
console.log(_.concat(array1, array2));

let array3 = ["El Chavo", "Quico", "Don Ramon", "Dona Florinda", "Profesor Jirafales", "Senor Barriga", "Nona Clotilde", "Godinez"];
let array4 = ["El Chapulin Colorado", "El Doctor Chapatín", "El Rascabuches", "El Peterete", "El Chanfle", "El Botija", "El Chompiras", "El Chavo"];
console.log(_.difference(array3, array4));

let array5 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// drop elimina los primeros n elementos de un arreglo
console.log(_.drop(array5, 5));

const numeroAleatorio = _.random(0, 100);
console.log(numeroAleatorio);

const saludar = () => {
    console.log("Hola mundo");
};

const saludarMayito = _.once(saludar);
saludarMayito();
saludarMayito();
saludarMayito();

const users = [
    { usuario: 'Mayito', edad: 20},
    { usuario: 'Carlitos', edad: 16},
    { usuario: 'Jorgito', edad: 22},
    { usuario: 'Pablito', edad: 30}
];

const sortedUsers = _.sortBy(users, ['edad']);
console.log(sortedUsers);

const obtieneNumero = () => {
    return _.random(0, 100);
};

let resultado = _.times(5, obtieneNumero);
console.log(resultado);

// Reto1 
// Crear un arreglo con 100 números aleatorios y mostrar los números pares e impares en arreglos diferentes

const numerosAleatorios = _.times(100, () => _.random(0, 100));

// Filtrar los números pares e impares
const numerosPares = _.filter(numerosAleatorios, (num) => num % 2 === 0);
const numerosImpares = _.filter(numerosAleatorios, (num) => num % 2 !== 0);

console.log("Números pares:", numerosPares);
console.log("Números impares:", numerosImpares);

// Reto2
// Crear un arreglo con 100 números aleatorios y mostrar los números primos y no primos en arreglos diferentes

const esPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const numerosAleatoriosPrimos = _.times(100, () => _.random(0, 100));

// Filtrar los números primos y no primos
const numerosPrimos = _.filter(numerosAleatoriosPrimos, esPrimo);
const numerosNoPrimos = _.filter(numerosAleatoriosPrimos, (num) => !esPrimo(num));

console.log("Números primos:", numerosPrimos);
console.log("Números no primos:", numerosNoPrimos);

// Reto3
// Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra "A" y los que no en arreglos diferentes

let nombres = ["Ana", "Pedro", "Alberto", "Juan", "Alicia", "Carlos", "Andrea", "Marta", "Andrés", "Luis"];

const nombresConA = _.filter(nombres, (nombre) => nombre.startsWith("A"));
const nombresSinA = _.filter(nombres, (nombre) => !nombre.startsWith("A"));

console.log("Nombres que empiezan con 'A':", nombresConA);
console.log("Nombres que no empiezan con 'A':", nombresSinA);
