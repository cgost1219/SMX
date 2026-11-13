const prompt = require('prompt-sync')();

let nom = (prompt('nom d usuari: '));
let cognom = (prompt('congnom: '));
let edat = (prompt('Edat: '));

console.log(`Hola, ${nom} ${cognom}! Tens ${edat} anys.`)