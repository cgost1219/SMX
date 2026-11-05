const prompt = require('prompt-sync')();
let classe

console.log("=== CLASSIFICADOR D'ADRECES IP ===");
let oct1 = Number(prompt("Escriu el primer octet: "));
let oct2 = Number(prompt("Escriu el segon octet: "));
let oct3 = Number(prompt("Escriu el tercer octet: "));
let oct4 = Number(prompt("Escriu el quart octet: "));
let verOct1 = (oct1 >= 0 && oct1 <= 255) ? true : false;
let verOct2 = (oct2 >= 0 && oct2 <= 255) ? true : false;
let verOct3 = (oct3 >= 0 && oct3 <= 255) ? true : false;
let verOct4 = (oct4 >= 0 && oct4 <= 255) ? true : false;

if (verOct1 == true && verOct2 == true && verOct3 == true && verOct4 == true) {
  console.log(`Adreça: ${oct1}.${oct2}.${oct3}.{oct4}`);
} else {
  console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.");
}
  
