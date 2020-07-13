
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear','Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado 
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        completado: {
            default: null,
            alias: 'c'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
