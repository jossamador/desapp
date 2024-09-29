"use strict";
console.log("Hola codespaces");
const nuevoHeroe = "Flash";
function returnName() {
    return nuevoHeroe;
}
const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es:', typeof otraVariable);
// Parametros obligatorios
const nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};
const tuNombre = nombreCompleto('Clark', 'Kent');
console.log(tuNombre);
const nombreCompleto2 = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};
const tuNombre2 = nombreCompleto2('Checo');
console.log(tuNombre2);
const nombreCompleto3 = (nombre, apellido, mayusculas = false) => {
    if (mayusculas) {
        return `${nombre} ${apellido}`.toUpperCase();
    }
    else {
        return `${nombre} ${apellido}`;
    }
    return `${nombre} ${apellido}`;
};
const nombrecompleto4 = (nombre, ...restoApellidos) => {
    return `${nombre} ...RESTO ${restoApellidos.join(' ')}`;
};
const superman4 = nombrecompleto4('Clark', 'Joseph', 'Kent');
console.log(superman4);
