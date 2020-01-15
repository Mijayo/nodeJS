// ^C to kill the terminal window


// MODULO HTTP EJEMPLO 1
let http = require('http');

// Creamos el servidor para realizar la peticion por parte del cliente
http.createServer(function(req, res) {
    // HTML HTTP header:
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Despues de la peticion por parte del cliente con request, el servidor devuelve con response su respuesta
    res.write('<p style="font-size:50px;"> Hola amigos del YouTube - Artemio ;)))))) </p>');
    // Cerramos y/o terminamos la peticion del servidor
    res.end();
}).listen(8080); // El objeto servidor escucha en el puerto 8080  http://localhost:8080/


// MODULO HTTP EJEMPLO 2 con JSON
let ht = require('http');
ht.createServer(function(req, res) {
    // HTML HTTP header:
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Diego',
        centro: 'iFP',
        url: req.url
    };

    // Despues de la peticion por parte del cliente con request, el servidor devuelve con response su respuesta
    res.write(JSON.stringify(salida));
    // Cerramos y/o terminamos la peticion del servidor
    res.end();
}).listen(8070); // El objeto servidor escucha en el puerto 8070  http://localhost:8070/



// EJEMPLO CON HTTPS
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});