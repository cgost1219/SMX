const prompt = require('prompt-sync')();

let num1 = Number (prompt("Primer numero:"));
let num2 = Number (prompt("Segon numero:"));

console.log(`Summa = ${num1 + num2}`)
console.log(`Resta = ${num1 - num2}`)
console.log(`Multiplicació = ${num1 * num2}`)
console.log(`Divisió = ${num1 / num2}`)
