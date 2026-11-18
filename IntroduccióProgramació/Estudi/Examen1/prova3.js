const prompt = require('prompt-sync')();

let nom = (prompt("Nom: "));
let nota = Number(prompt("Nota: "));
let prac = Number(prompt("Pràctiques: "));
let act = Number(prompt("Actitud: "));

nota = (60 / 100) * nota;
prac = (30 / 100) * prac;
act = (10 / 100) * act;

console.log(nota);
console.log(prac);
console.log(act);

let total = nota + prac + act;
console.log(total);

if (total > 0 || total > 10) {
    console.log("Dades incorrectes");
} else if (total < 5) {
    console.log("Suspès");
} else if (total < 7) {
    console.log("Aprovat");
} else if (total < 9) {
    console.log("Notable");
} else if (total < 10) {
    console.log("Exel·lent");
}