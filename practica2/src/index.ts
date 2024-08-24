let miNumero: number = 5;   

miNumero = 10 + 10;
miNumero = 2.5;
console.log(miNumero); 

let booleano : boolean = true;
booleano = false;
//boolean = 3;  Error

let encendido: boolean;
//console.log(encendido); Error

encendido = true; 

console.log('Encendido es:', encendido);
console.log('Encendido es:', {encendido});

encendido = true && false;
encendido = true && true;

console.log();

let normal:any = 'hola';
normal = 10;
normal = true;
normal = 11.25;
console.log('Normal:',normal);