const prompt = require('prompt-sync')();
let anys = Number(prompt("Quants anys tens? "));
let carnet = prompt("tens carnet d'estudiant? ");
let missatge 

if (carnet == "si" || carnet == "no") {
  if (anys < 18 && anys > 65 || carnet == "si") {
    missatge = "Tens descompte";
  } else {
    missatge = "Preu normal";
  }
} else { 
  missatge = "no t'he entés";
}

console.log(missatge);
