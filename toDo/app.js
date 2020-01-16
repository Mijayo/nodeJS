const argv = require('./config/yargs').argv;

const porHacer = require('./porHacer/porHacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas');
        break;
    case 'actualizar':
        console.log('Actualiza las tareas por hacer');
        break;
    default:
        console.log('Comando no permitido');
}