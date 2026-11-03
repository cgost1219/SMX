const prompt = require('prompt-sync')();
let anys = Number(prompt("Quants anys tens? "));
let missatge;
if (anys >= 18) {
  missatge = "Ets major d'edat";
} else {
  missatge = "Ets menor d'edat";
}
console.log(missatge);
