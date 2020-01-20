const express = require('express');
const router = express.Router();


module.exports = function() {

    router.get('/', (req, res) => {
        res.render('index', { title: 'Inicio PUG', message: 'DIEGO' });
    });

    router.get('/nosotros', (req, res) => {
        res.render('nosotros');
    });

    return router;
};