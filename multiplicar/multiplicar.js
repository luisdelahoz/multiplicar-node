const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

	console.log('=========================='.green);
	console.log(`=====tabla de ${base}=====`.green);
	console.log('=========================='.green);

	for(let i = 1; i <= limite; i++) {
		console.log(`${base} * ${i} = ${base * i}`);
	}

};

let crearArchivo = (base, limite = 10) => {

	return new Promise((resolve, reject) => {

		if(!Number(base)) {
			reject(`El valor introducido ${base} no es número`);
			return;
		}

		let data = '';

		for(let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${i * base}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (error) => {
			if(error) reject(error);
			resolve(`tabla-${base}-al-${limite}`);
		});

	});
	
};

module.exports = {
	crearArchivo: crearArchivo,
	listarTabla: listarTabla
}
