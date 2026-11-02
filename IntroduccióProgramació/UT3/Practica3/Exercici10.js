let tem = number(prompt("Quina temperatura fa en graus celsius? "));
let missatge;
if (temp < 10 ) {
missatge = "Fa fred";
} else if (temp <= 25) {
missatge = "Temperatura moderada";
} else {
missatge = "Fa calor";
}
console.log(missatge);
