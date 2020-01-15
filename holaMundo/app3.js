console.log('Inicio del programa');

setTimeout(function() {
    console.log('Primer timeout');
}, 3000);

setTimeout(function() {
    console.log('Segundo timeout');
}, 0);

setTimeout(function() {
    console.log('Tercer timeout');
}, 1500);

setTimeout(function() {
    console.log('Cuarto timeout');
}, 4500);


setTimeout(function() {
    console.log('Final del programa 2');
}, 7500);

console.log('Final del programa');