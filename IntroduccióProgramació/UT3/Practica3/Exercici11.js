let hola = "hola";
let missatge;
if ( `${hola = hola}` ) {
missatge = "La condició és vertadera";
} else {
missatge = "La condició és falsa";
}
console.log(missatge);

// El missatge es mostrarà sempre ja que la condició que s'ha de complir perquè mostri el missatge és que la variable sigui igual a la variable, per tant com que fa referència tot al mateix valor (la variable) sempre serà vertader.
