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
  console.log(`Adreça: ${oct1}.${oct2}.${oct3}.${oct4}`);
  if (oct1 === 0) {
    classe = "Reservada";
  } else if (oct1 <= 126) {
    classe = "A";
  } else if (oct1 === 127) {
    classe = "Loopback";
  } else if (oct1 <= 191) {
    classe = "B";
  } else if (oct1 <= 223) {
    classe = "C";
  }else if (oct1 <= 239) {
    classe = "D";
  } else if (oct1 <= 255) {
    classe = "E";
  }
  console.log(`classe: ${classe}`);
    switch(classe) {
    case 'A':
       console.log("Mascara per defecte: 255.0.0.0");
       let privadaA = oct1 === 10 ? "Privada" : "Pública";
       console.log(`Tipus: ${privadaA}`);
      break;
    case 'B':
       console.log("Mascara per defecte: 255.255.0.0");
       let privadaB = oct1 === 172 && oct2 >= 16 && oct2 <= 31 ? "Privada" : "Pública";
       console.log(`Tipus: ${privadaB}`);
      break;
    case 'C':
       console.log("Mascara per defecte: 255.255.255.0");
       let privadaC = oct1 === 192 && oct2 === 168 ? "Privada" : "Pública";
       console.log(`Tipus: ${privadaC}`);
      break;
    default:
      console.log("No té màscara per defecte (adreça especial)");
    }

} else {
  console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.");
}
  
