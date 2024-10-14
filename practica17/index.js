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
}

const saludarMayito = _.once(saludar, 1);
saludarMayito();
saludarMayito();
saludarMayito();

const users = [
    { usuario: 'Mayito', edad: 20},
    { usuario: 'Carlitos', edad: 16},
    { usuario: 'Jorgito', edad: 22},
    { usuario: 'Pablito', edad: 30}
];

const sortedUsers = _.sortBy(users, ['edad'] ['asc']);
console.log(sortedUsers);

const obtieneNumero = () => {
    return _.random(0, 100);
}

let resultado = _.times(5, obtieneNumero);
console.log(resultado);

// Reto1 
// Crear un arreglo con 100 numeros aleatorios y mostrar los numeros pares e impares en arreglos diferentes

// Reto2
// Crear un arreglo con 100 numeros aleatorios y mostrar los numeros primos y los no primos en arreglos diferentes

// Reto3
// Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra "A" y los que no en arreglos diferentes