// 'use strict';
// console.log('Roman no funciona');
// console.log(2 + 9);
// console.log(global);
// setInterval(function() {
//     console.log('Hola mundo');
// }, 3000);

const fs = require('fs');
const os = require('os');

let cpu = os.cpus();
let cpuStr = JSON.stringify(cpu);

fs.appendFile('miFichero.txt', `Informacion el cpu ${cpuStr}`, function(error) {
    if (error) {
        console.log('error del archivo');
    }
});


// let sar = os.arch();
// let sistema = os.platform();
// let usus = os.userInfo();
// let uInfo = os.hostname();

console.log(os);
console.log(cpu);
console.log(cpuStr);
// console.log(sar);
// console.log(sistema);
// console.log(usus);
// console.log(uInfo);