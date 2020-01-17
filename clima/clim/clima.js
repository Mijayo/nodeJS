const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d65566a32b1641d7ee394426a00e63d2&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};