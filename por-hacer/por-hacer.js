const fs = require('fs');
require('colors');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo crear la tarea', err);
        }
    });

};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json'); // require convierte el json en un objeto javasxript
    } catch (error) {
        listadoPorHacer = [];
    }

};

const getListado = (completado) => {
    
    cargarDB();

/*     console.log(typeof(completado));
    

    if (completado !== null) {
        
        if (new Boolean(completado) === true) {
            let filtrado = listadoPorHacer.filter( tarea => tarea.completado === true);
            listadoPorHacer = filtrado;
        } else if (completado === false) {
            let filtrado = listadoPorHacer.filter( tarea => tarea.completado === false);
            listadoPorHacer = filtrado;
        }

    } */
    
    return listadoPorHacer;
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const actualizar = (descripcion, completado) => {
    
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return 'Tarea actualizada'.green;
    } else {
        return 'No existe la tarea'.red;
    }
}

const borrar = (descripcion) => {
    
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return 'La tarea fue borrada'.green;
    } else {
        return 'No existe la tarea'.red;
    }
    
}

const borrar2 = (descripcion) => {
    
    cargarDB();
    
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );
    
    if (nuevoListado.length === listadoPorHacer.length) {
        return 'No existe la tarea'.red;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return 'La tarea fue borrada'.green;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    borrar2
};