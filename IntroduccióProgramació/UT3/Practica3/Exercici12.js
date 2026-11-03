const prompt = require('prompt-sync')();
let num = Number(prompt("Escriu un nombre: "));
let com = 7
if (num == com) {
  console.log("Has endevinat el número!");
} else {
  console.log("No has encertat. Torna-ho a provar!");
}