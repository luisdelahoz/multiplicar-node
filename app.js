const {argv} = require('./config/yargs');
const colors = require('colors');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch(comando) {
	case 'listar':
		listarTabla(base, limite);
		break;
	case 'crear':
		crearArchivo(base, limite)
			.then((archivo) => console.log(`El archivo ${archivo.green} fue creado`))
			.catch((error) => console.log(error));
		break;
	default:
		console.log('Comando no reconocido');
		break;
}
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log(argv.limite);

//crearArchivo(base)
//	.then((archivo) => console.log(`El archivo ${archivo} fue creado`))
//	.catch((error) => console.log(error));