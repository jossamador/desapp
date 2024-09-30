const { nombre, apellido, edad } = require('./datos');
const obtenerDatos = require('./obtenerDatos');

console.log(obtenerDatos(nombre, apellido, edad)); // { nombre: 'Juan', apellido: 'Perez', edad: 25 }