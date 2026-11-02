/* Els operadors lògics &&, || i ! fan el següent:
l'operador lògic && és AND i indica que s'han de complir dues condicions.
si el valor A es compleix però el valor B no; tornarà false, si el valor A no es compleix però el valor B si; tornarà false, si no es compleix cap; tornarà false, si es comleixen els dos tornarà true.

l'operador lògic || és OR i indica que s'han de complir una de les dues condicions.
si el valor A es compleix però el valor B no; tornarà true, si el valor A no es compleix però el valor B si; tornarà true, si no es compleix cap; tornarà false, si es comleixen els dos tornarà true.

l'operador lògic ! és NOT i indica el valor contrari.
si el valor A és false; tornarà true, si el valor A és true; tornarà false.*/

let valorA = true;
let valorB = false;
console.log(`exemple de AND: ${valorA && valorB}`);
console.log(`exemple de OR: ${valorA || valorB}`);
console.log(`exemple de NOT: ${!valorA}`);
