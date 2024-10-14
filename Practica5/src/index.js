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
// Clase base
class Persona {
    constructor(nombre, edad, direccion) {
        this._nombre = nombre;
        this._edad = edad;
        this._direccion = direccion;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(value) {
        this._direccion = value;
    }
    saludar() {
        return `Hola, mi nombre es ${this._nombre}.`;
    }
}
// Clase derivada
class Usuario extends Persona {
    constructor(nombre, edad, direccion, email) {
        super(nombre, edad, direccion);
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    login() {
        return `El usuario ${this.nombre} ha iniciado sesión con el email ${this._email}.`;
    }
}
// Clase de productos
class Productos {
    constructor(nombre, precio, categoria) {
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }
    get categoria() {
        return this._categoria;
    }
    set categoria(value) {
        this._categoria = value;
    }
    mostrarProducto() {
        return `Producto: ${this._nombre}, Precio: ${this._precio}, Categoría: ${this._categoria}`;
    }
}
// Clase de carrito
class Carrito {
    constructor() {
        this._productos = [];
    }
    agregarProducto(producto) {
        this._productos.push(producto);
    }
    mostrarCarrito() {
        return this._productos.map(producto => producto.mostrarProducto()).join('\n');
    }
}
// Clase de método de pago
class MetodoDePago {
    constructor(tipo, numeroTarjeta) {
        this._tipo = tipo;
        this._numeroTarjeta = numeroTarjeta;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get numeroTarjeta() {
        return this._numeroTarjeta;
    }
    set numeroTarjeta(value) {
        this._numeroTarjeta = value;
    }
    procesarPago(monto) {
        return `El pago de ${monto} ha sido procesado usando ${this._tipo}.`;
    }
}
// Ejemplo de uso
let producto1 = new Productos("Laptop", 1200, "Electrónica");
let producto2 = new Productos("Teléfono", 800, "Electrónica");
let carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
let usuario = new Usuario("Ana", 28, "Calle Falsa 123", "ana@example.com");
let metodoPago = new MetodoDePago("Visa", "1234-5678-9876-5432");
console.log(usuario.saludar());
console.log(usuario.login());
console.log(carrito.mostrarCarrito());
console.log(metodoPago.procesarPago(2000));
export {};
