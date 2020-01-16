const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '4';

crearArchivo(base)
    .then(archivo => console.log(`${archivo}`))
    .catch(e => console.log(e));