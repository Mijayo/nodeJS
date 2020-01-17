const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    // console.log(argv.direccion);

    const codedURL = decodeURI(direccion);

    console.log(codedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${codedURL}`,
        headers: {
            'x-rapidapi-key': '53cebbfac0mshc8293123cb0fdeap1c27f5jsn416fd006978c',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const di = data.name;
    const lat = data.lat;
    const long = data.lon;


    return {
        di,
        lat,
        long
    };

};

module.exports = {
    getLugarLatLong
};