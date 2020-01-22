// importar express
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const ejs = require('ejs');

// config express
const app = express();

// habilitamos pug
// app.set('view engine', 'pug');

// habilitamos ejs
app.set('view engine', 'ejs');

// Add vistas
app.set('views', path.join(__dirname, 'views'));

// Cargar una carpeta estatica llamada public
app.use(express.static(path.join(__dirname, '/public')));

// cargar las rutas
app.use('/', routes());

app.listen(3000);