const http = require('http');
http.createServer((req, res) => {
    // res.write('<h1 style="font-size 32px">Hola mundo</h1>');
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    let salida = {
        nombre: 'Google',
        url: 'https://www.google.com'
    };
    res.write(JSON.stringify(salida));
    res.end();
}).listen(3000); // http://localhost:3000/

console.log('Escuchando en el puerto 3000');