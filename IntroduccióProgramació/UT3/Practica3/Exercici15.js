const prompt = require('prompt-sync')();
let num1 = Number(prompt("Escriu un nombre: "));
let sim = prompt("Quina operació vols fer? ");
let num2 = Number(prompt("Escriu un altre nombre: "));
if (sim == "+") {
  resultat = num1 + num2;
} else if (sim == "-") {
  resultat = num1 - num2;
} else if (sim == "*") {
  resultat = num1 * num2;
} else if (sim == "/" ) {
  if (num2 == 0) {
    resultat = "No es pot dividir entre zero"
  } else {
    resultat = num1 / num2;
  }
} else { 
resultat = "Operació no vàlida."
}

console.log(resultat);
