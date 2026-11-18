const prompt = require('prompt-sync')();

let producte = (prompt("Nom del producte: "));
let preu = (Number(prompt("preu: ")));
let unitats = (Number(prompt("unitats: ")));

let total  = (`${preu * unitats}`);
let descompte = (`${total - 10}`);

console.log(`El preu inicial és ${total}, el preu final és ${descompte}.`);