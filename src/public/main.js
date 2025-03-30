import ItenDominio from './domain/ItenDominio.js';
import Dominio from './domain/Dominio.js';

let ver = new ItenDominio(1.1, 'Ver', 100);
let ouvir = new ItenDominio(1.2, 'Ouvir', 100);

// console.log(ver.toString())
// console.log(ouvir.toString())

let sensorial = new Dominio(1, 'Dominio Sensorial');

sensorial.addItenDominio(ver);
sensorial.addItenDominio(ouvir);

console.log(sensorial.toString())