const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Clima de la ciudad',
        demand: true
    }
}).argv;

lugar.getLugarLatLong(argv.direccion)
    .then(console.log);