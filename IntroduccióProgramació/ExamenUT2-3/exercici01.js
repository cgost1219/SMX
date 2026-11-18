const prompt = require('prompt-sync')();

const EMPRESA = "NetLlevant";
const ANY = 2026;

let nomEquip;
let memRAM;
let capDisc;
let anyCompra;
let garantia;
let ip;

nomEquip = prompt("Nom de l'equip: ");
memRAM = Number(prompt("Memòria ram (GB): "));
capDisc = Number(prompt("Capacitat del disc (GB): "));
anyCompra = Number(prompt("Any de compra: "));
garantia = Boolean(prompt("Té garantia? (si/no): "));

let antiguitat = (ANY - anyCompra);
let RamMb = memRAM * 1024;
let discTb = capDisc / 1024;

console.log(`=== ${EMPRESA} · INVENTARI ===`);
console.log(`Equip: ${nomEquip}`);
console.log(`RAM: ${memRAM} (${RamMb})`);
console.log(`Disc: ${capDisc} (${discTb})`);
console.log(`Antiguitat: ${antiguitat} anys`);
console.log(`En garantia: ${garantia}`);

console.log("=== Tipus dada ===");
console.log(typeof(nomEquip));
console.log(typeof(memRAM));
console.log(typeof(capDisc));
console.log(typeof(anyCompra));
console.log(typeof(garantia));
console.log(typeof(ip));