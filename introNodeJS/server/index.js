// importar express
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

// config express
const app = express();

// habilitamos pug
app.set('view engine', 'pug');

// Add vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estatica llamada public
app.use(express.static('public'));

// cargar las rutas
app.use('/', routes());

app.listen(3000);