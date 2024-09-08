// Importa Chart.js usando ES6 modules (si es necesario en algún momento).
// Si no vas a usar Chart.js, simplemente elimina la importación.
// import { Chart } from 'chart.js';

// Tuplas
let tupla: [number, string, boolean] = [1, 'hola', true];
console.log(tupla);
console.log(typeof tupla);

let ourTupla: [number, string, boolean] = [2, 'adios', false];
console.log('Nombre:', ourTupla[0]);
console.log('Apellido:', ourTupla[1]);

// Ternario
let casado: string = ourTupla[2] ? 'Casado' : 'Soltero'; 
console.log('Casado:', casado);

let ourTupla2: [number, boolean, string] = [23, false, 'hola'];
ourTupla2 = [25, true, 'Lucas'];
console.log(ourTupla2);

const ourReadonlyTupla: readonly [number, boolean, string] = [5, true, 'Hola'];
console.log(ourReadonlyTupla);

const graph: [x: number, y: number, z: number] = [1, 2, 3];
console.log(graph);
console.log(graph[0]);

// Desestructuración de variables
const person = {
    firstName: "Juan",
    lastName: "Perez",
    age: 18
};

let { firstName, lastName } = person;
console.log(firstName);

// Función que genera la serie Fibonacci usando desestructuración
function fibonacciSeries(n: number): number[] {
    const series: number[] = [0, 1];
    
    let [a, b] = series;  // Inicializa los dos primeros números
    
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b];  // Actualiza los valores usando desestructuración
        series.push(b);
    }

    return series.slice(0, n); // Devuelve solo los 'n' primeros números
}

// Función para manejar el evento del botón
function handleGenerateFibonacci() {
    const inputElement = document.getElementById('numberInput') as HTMLInputElement;
    const resultElement = document.getElementById('result') as HTMLParagraphElement;
    const graphContainer = document.getElementById('graphContainer') as HTMLDivElement;
    
    const n = parseInt(inputElement.value, 10); // Convierte el input a número

    if (isNaN(n) || n < 1 || n > 100) {
        resultElement.textContent = "Por favor, introduce un número entre 1 y 100.";
        return;
    }

    // Genera la serie Fibonacci
    const series = fibonacciSeries(n);
    resultElement.textContent = series.join(', '); // Muestra la serie en texto

    // Borra el contenido anterior del gráfico
    graphContainer.innerHTML = '';

    // Genera el gráfico en pantalla
    series.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value}px`;  // Altura de la barra en función del valor
        bar.style.width = '10px';
        bar.textContent = value.toString();
        bar.title = `Fibonacci[${index}] = ${value}`;  // Tooltip
        graphContainer.appendChild(bar);  // Añadir al contenedor del gráfico
    });
}

// Añade un event listener al botón cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateButton') as HTMLButtonElement;
    button.addEventListener('click', handleGenerateFibonacci);
});
