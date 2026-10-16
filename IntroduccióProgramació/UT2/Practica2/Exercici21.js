const prompt = require('prompt-sync')();

let nom = prompt ("Escriu el nom:");
let edat = Number (prompt("Escriu la teva edat:"));

console.log(`Hola, ${nom}! Tens ${edat} anys.`);
console.log(`L'any que ve tendràs ${edat + 1} anys.`);
