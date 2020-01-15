// let nombre = 'Diego';

// console.log(nombre);

let sql = require('mysql');

let con = sql.createConnection({
    host: '',
    user: '',
    password: ''
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
});