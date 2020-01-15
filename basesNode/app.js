const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'abc';

crearArchivo(base)
    .then(archivo => console.log(`${archivo}`))
    .catch(e => console.log(e));