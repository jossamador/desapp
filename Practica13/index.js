const fs = require('fs');
//console.log('fs');

const leerArchivo = (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

fs.readFile('archivo.txt', 'utf-8', leerArchivo);

const escribirArchivo = (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    }
}

fs.writeFile('archivo.txt', 'Contenido del archivo', escribirArchivo);

fs.unlink('archivo.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo eliminado');
    }
});

fs.mkdir('nuevaCarpeta', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Carpeta creada');
    }
});

fs.rmdir('nuevaCarpeta', (err) => {
    console.log(err);
});

fs.readdir('.', (err, files) => {
    console.log(files);
});

const copiarArchivo = (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo copiado');
    }
};