const prompt = require('prompt-sync')();

const kb = 1024;
const mb = (kb * 1024);
const gb = (mb * 1024);

console.log("======================================================")
console.log("================ CONVERSOR D'UNITATS ================")
console.log("======================================================")
console.log()
console.log("========== Converteix Bytes a -> KB, MB, GB ==========")
let byte = Number(prompt("Mida amb bytes: "));
let kilo = (`${byte / kb}`);
let mega = (`${byte / mb}`);
let giga = (`${byte / gb}`);
console.log(`${byte} bytes són:`);
console.log(`  - ${kilo} KB`);
console.log(`  - ${mega} MB`);
console.log(`  - ${giga} GB`);

console.log()
console.log("========== Converteix GB a bytes ==========")
let gigabit = Number(prompt("Mida amb GB: "));
let part3 = (`${gigabit * gb}`);
console.log(`${gigabit} GB són ${part3} bytes`);

console.log()
console.log("========== Calculem el Temps de descàrrega ==========")
let mida = Number(prompt("Mida del fitxer a descarregar amb GB: "));
let velocitat = Number(prompt("velocitat de la connexió (Mbps): "));
let segons = (`${(mida*100000) / velocitat}`);
let minuts = (`${mida * (velocitat * 60)}`);
console.log(`El temps de descàrrega és: ${segons} segons o ${minuts} minuts`);