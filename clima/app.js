const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Clima de la ciudad',
        demand: true
    }
}).argv;

console.log(argv.direccion);