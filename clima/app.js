const axios = require('axios');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Clima de la ciudad',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

const codedURL = decodeURI(argv.direccion);
console.log(codedURL);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${codedURL}`,
    headers: {
        'x-rapidapi-key': '53cebbfac0mshc8293123cb0fdeap1c27f5jsn416fd006978c',
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log(err);
    });