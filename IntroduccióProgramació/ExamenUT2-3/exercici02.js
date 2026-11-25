const prompt = require('prompt-sync')();

const EMPRESA = "NetLlevant";
const RECARREC = 15; //falten constants de: preuhora, iva i descompte.

let nomClient = prompt("Nom del client: ");
let maObra = Number(prompt("Hores de mà d'obra: "));
let peces = Number(prompt("Cost de les peces (€): "));
let mant = prompt("Contracte de manteniment? (si/no): ")// === "si" //;
let urg = prompt("És urgent? (si/no): ")// === "si" //;
let site

let maObraPreu = maObra * 35;
let Descompte = (20/100)*maObraPreu; //falta un IF per al si/no de mant
if (urg === "si") {
    site = RECARREC;
} else {
    site = 0;
}


let base = maObraPreu - Descompte + peces + RECARREC; //site no recarrec
let IVA = ((21/100) * base);

let total = (maObraPreu + peces + site + IVA) - Descompte; // + fàcil: baseImposable + imprtIVA


console.log(`=== ${EMPRESA} · PRESSUPOST ===`);
console.log(`Client: ${nomClient}`);
console.log(`Hores de mà d'obra: ${maObra}: ${maObraPreu}`);
console.log(`Descompte contracte: -${Descompte}€`);
console.log(`Peces: ${peces}`);
console.log(`Recàrrec urgència: ${site}`);
console.log(`Base imposable: ${base}`);
console.log(`IVA: ${IVA}`);
console.log(`TOTAL: ${total}`);