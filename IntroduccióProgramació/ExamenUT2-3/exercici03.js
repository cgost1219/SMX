const prompt = require('prompt-sync')();

let velCon = Number(prompt("Velocitat contractada (Mbps): "));
let velMes = Number(prompt("Velocitat mesurada (Mbps) "));
let ping = Number(prompt("El ping (ms) "));
let paq = Number(prompt("Pèrdua de paquets (%) "));

if (velCon <= 0 || velMes < 0 || ping < 0 || paq < 0 ) {
    console.log("Dades no vàlides")
} else {
    let perc = (velMes / velCon) * 100; 
    console.log(`${perc}%`)
    if ( perc >= 90 && ping < 30 && paq === 0 ) {
        console.log("Estat: Òptima");
    } else if ( perc >= 70 && ping <= 100 && paq <= 2 ) {
        console.log("Estat: ACCEPTABLE");
    } else if ( ping > 200 || paq > 10 ) {
        console.log("Estat: CRÍTICA. Avisa el tècnic de guàrdia");
    } else {
        console.log("Estat: DEFICIENT. Cal obrir una incidència");
    }
}
