console.log("Hola codespaces");

const nuevoHeroe:string = "Flash";

function returnName():string{
    return nuevoHeroe;
}

const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es:', typeof otraVariable);

// Parametros obligatorios
const nombreCompleto = (nombre:string, apellido:string):string => {
    return `${nombre} ${apellido}`;
}

const tuNombre = nombreCompleto('Clark', 'Kent');
console.log(tuNombre);

const nombreCompleto2 = (nombre:string, apellido?:string):string => {
    return `${nombre} ${apellido}`;
}

const tuNombre2 = nombreCompleto2('Checo');
console.log(tuNombre2);

const nombreCompleto3 = (nombre:string, apellido?:string, mayusculas:boolean = false) => {

    if (mayusculas) 
    {
        return `${nombre} ${apellido}`.toUpperCase();
    } else {
        return `${nombre} ${apellido}`;
    }

    return `${nombre} ${apellido}`;
}

const nombrecompleto4 = (nombre:string,...restoApellidos:string []):string =>  {
    return `${nombre} ...RESTO ${restoApellidos.join(' ')}`
}

const superman4 = nombrecompleto4('Clark', 'Joseph', 'Kent');
console.log(superman4);