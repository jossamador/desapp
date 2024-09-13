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

// Clase base
class Persona {
    private _nombre: string;
    private _edad: number;
    private _direccion: string;

    constructor(nombre: string, edad: number, direccion: string) {
        this._nombre = nombre;
        this._edad = edad;
        this._direccion = direccion;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    saludar(): string {
        return `Hola, mi nombre es ${this._nombre}.`;
    }
}

// Clase derivada
class Usuario extends Persona {
    private _email: string;

    constructor(nombre: string, edad: number, direccion: string, email: string) {
        super(nombre, edad, direccion);
        this._email = email;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    login(): string {
        return `El usuario ${this.nombre} ha iniciado sesión con el email ${this._email}.`;
    }
}

// Clase de productos
class Productos {
    private _nombre: string;
    private _precio: number;
    private _categoria: string;

    constructor(nombre: string, precio: number, categoria: string) {
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(value: number) {
        this._precio = value;
    }

    get categoria(): string {
        return this._categoria;
    }

    set categoria(value: string) {
        this._categoria = value;
    }

    mostrarProducto(): string {
        return `Producto: ${this._nombre}, Precio: ${this._precio}, Categoría: ${this._categoria}`;
    }
}

// Clase de carrito
class Carrito {
    private _productos: Productos[] = [];

    agregarProducto(producto: Productos): void {
        this._productos.push(producto);
    }

    mostrarCarrito(): string {
        return this._productos.map(producto => producto.mostrarProducto()).join('\n');
    }
}

// Clase de método de pago
class MetodoDePago {
    private _tipo: string;
    private _numeroTarjeta: string;

    constructor(tipo: string, numeroTarjeta: string) {
        this._tipo = tipo;
        this._numeroTarjeta = numeroTarjeta;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

    get numeroTarjeta(): string {
        return this._numeroTarjeta;
    }

    set numeroTarjeta(value: string) {
        this._numeroTarjeta = value;
    }

    procesarPago(monto: number): string {
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

