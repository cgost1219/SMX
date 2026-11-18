const prompt = require('prompt-sync')();

let tipus = prompt("Tipus d'incidència (XARXA / HARDWARE / SOFTWARE): ");
let hora = Number(prompt("Hores: "));
let client = prompt("Empresa? (si/no): ");
let aturat = prompt("Servei aturat? (si/no): ");
let departament;
let resto;

switch (tipus) {
    case "XARXA":
        departament = "xarxes";
        h = 4
        break;
    case "HARDWARE":
        departament = "taller";
        h = 24
        break;
    case "SOFTWARE":
        departament = "suport aplicacions";
        h = 48
        break;
    default:
        console.log("Tipus d'incidència no vàlida");
}

let prioritat = (aturat === "si" && client === "si") ? "CRÍTICA" : "NORMAL";
let termini = (prioritat === "CRÍTICA") ? h = h/2 : h;
let avis = (prioritat === "CRÍTICA") ? "Avisar al cap de departament" : "";

if (hora > h) {
    resto = hora - h
    console.log(`Termini superat en ${resto} hores`)
} else {
    resto = hora - h
    console.log(`Dins del termini. Queden: ${resto} hores`)
}

console.log(`Termini: ${h} hores`);
console.log(`${avis}`);
