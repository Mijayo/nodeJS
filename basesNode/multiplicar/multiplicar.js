const fs = require('fs');


let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }

        for (let i = 0; i <= 10; i++) {
            let cal = base * i;
            data += `La multiplicacion de ${base} * ${i} es igual a ${cal}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log('TXT creado');
        });
    });
};

module.exports = {
    crearArchivo
};