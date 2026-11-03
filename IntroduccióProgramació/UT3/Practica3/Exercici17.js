// Cas A
let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
} 
// Mostrarà el missatge ja que la hora és menor a 10 i el
// primer paràmetre indica que ha de sortir el missatge si és menor a 10.

// Cas B
hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
console.log("Accés denegat");
}
// No mostrarà el missatge ja que la norma indica que ha de ser menor a 10 o 
// major a 18 i els caps de setmanes TRUE i és 15 i false incompleix les dues normes.

// Cas C
hora = 17;
capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("Accés denegat");
}
// Mostrarà el missatge ja que, encara que no compleix la condició de l'hora si que compleix 
// el cap de setmana i s'està utilitzant l'operador lògic OR que només fa falta una dada.
