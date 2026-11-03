const prompt = require('prompt-sync')();
let num = Number(prompt("Escriu un nombre: "));

if (num >= 1 && num <= 100) {
  console.log("Número correcte");
} else { 
  console.log("Numero fora del grup");
}
