const prompt = require('prompt-sync')();

const kb = 1024;
const mb = (kb * 1024);
const gb = (mb * 1024);

console.log(======================================================)
console.log(================ CONVERSOR D'UNITATS ================)
console.log(======================================================)
console.log()
console.log(========== Converteix Bytes a -> KB, MB, GB ==========)
let byte = Number(prompt("Mida amb bytes: "));
let kilo = (`${byte / kb}`);
let mega = (`${byte / mb}`);
let giga = (`${byte / gb}`);
console.log(`${byte} bytes són:`);
console.log(`  - ${kilo} KB`);
console.log(`  - ${mega} MB`);
console.log(`  - ${giga} GB`);
console.log()
console.log(========== Converteix GB a bytes ==========)
let byte = Number(prompt("Mida amb bytes: "));