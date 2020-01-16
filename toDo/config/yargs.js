const argv = require('yargs')
    .command('crear', 'crear tareas', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Desc de la tarea por hacer'
        }
    })
    .command('actualizar', 'actualizar tareas', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza las tareas'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Completa tareas'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};