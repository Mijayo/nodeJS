const { argv } = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear tarea');
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