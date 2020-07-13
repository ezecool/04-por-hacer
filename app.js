const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        console.log('=====Tareas por Hacer====='.green);
        console.log(`Descripción\t\t\t\t\t\tCompletado`.green);
        listado.forEach(tarea => {
            console.log(`${tarea.descripcion}\t\t\t\t\t\t${tarea.completado}`);
        });
        console.log('=========================='.green);
        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion, argv.completado));
        break;
    case 'borrar':
        // console.log(porHacer.borrar(argv.descripcion));
        console.log(porHacer.borrar2(argv.descripcion));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}