const lugar = require('./lugar/lugar');
const clima = require('./clim/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Clima de la ciudad',
        demand: true
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log);

// clima.getClima(40.419998, -3.700000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.long);
        return `El tiempo de ${coords.di} es de ${temp} grados C`;
    } catch (error) {
        return error;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);