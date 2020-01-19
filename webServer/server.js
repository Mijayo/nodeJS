const express = require('express');
const app = express();
const hbs = require('hbs');


hbs.registerPartials(__dirname + '/views/parciales');


app.use(express.static(__dirname + '/public'));
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // res.send('<h1 style="font-size: 150px">Hola Mundo</h1>');

    // let salida = {
    //     nombre: 'Google',
    //     url: 'https://www.google.com'
    // };
    // res.send(salida);

    res.render('home', {
        nombre: 'Diego',
        txt: 'Bacon ipsum dolor amet pancetta porchetta chislic spare ribs ground round Chislic tongue alcatra cow swine ball tip tri-tip pork chop capicola meatball. Shank fatback shankle, strip steak chislic kielbasa tongue chicken ground round. Jowl shankle t-bone, sirloin jerky cupim turducken bacon chuck ground round brisket drumstick hamburger biltong. Beef ribs corned beef biltong shank pork belly.',
        anio: new Date().getFullYear(),
        btn: 'más info'
    });

});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Diego',
        txt: 'Bacon ipsum dolor amet pancetta porchetta chislic spare ribs ground round Chislic tongue alcatra cow swine ball tip tri-tip pork chop capicola meatball. Shank fatback shankle, strip steak chislic kielbasa tongue chicken ground round. Jowl shankle t-bone, sirloin jerky cupim turducken bacon chuck ground round brisket drumstick hamburger biltong. Beef ribs corned beef biltong shank pork belly.',
        anio: new Date().getFullYear(),
        btn: 'más info'
    });

});

app.listen(3000, () => {
    console.log('Escuando en el puerto 3000');
});