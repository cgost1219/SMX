const prompt = require('prompt-sync')();
let anys = Number(prompt("Quants anys tens? "));
let entrada = prompt("tens entrada? ");
let missatge

if (entrada == "si" || entrada == "no") {
  if (anys >= 18 && entrada == "si") {
    missatge = "Accés permès";
  } else {
    missatge = "Accés denegat";
  }
} else { 
  missatge = "no t'he entés";
}

console.log(missatge);
