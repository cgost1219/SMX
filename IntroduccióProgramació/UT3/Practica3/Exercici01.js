const prompt = require('prompt-sync')();
/* Un operador unari és un operador que només té un valor.
Com per exemple: canviar un valor de positiu a negatiu
Un operador binari és un operador que té dos valors, 
per tant es poden fer operacions. */

let nombre = Number (prompt("escriu un nombre"));
nombre = -nombre;
console.log(`el teu nombre negatiu és ${nombre}`);

let nombre2 = Number (prompt("escriu un altre nombre"));
console.log( nombre + nombre2 );