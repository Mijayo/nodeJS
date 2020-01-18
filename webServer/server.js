const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//     // res.send('<h1 style="font-size: 150px">Hola Mundo</h1>');

//     let salida = {
//         nombre: 'Google',
//         url: 'https://www.google.com'
//     };
//     res.send(salida);
// });

app.listen(3000, () => {
    console.log('Escuando en el puerto 3000');
});