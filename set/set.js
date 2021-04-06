const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------");
hlp.log("Ejemplo de set");
hlp.log("--------------\n");

// This set contains [“Anil','Sunil','Anitha','Pavan','Kumar'] 
const set1 = new Set(['Anil', 'Sunil', 'Anitha', 'Pavan', 'Kumar']);

hlp.logYellow(`const set1 = new Set(['Anil', 'Sunil', 'Anitha', 'Pavan', 'Kumar']`);
console.log(set1);

// This set contains ‘d’, ‘o’..., ‘r’
const set2 = new Set('dooooor');

hlp.logYellow(`\nconst set2 = new Set('dooooor')`);
console.log(set2);

// This set contains [100, 200, 300, 400, 500, 500] 
const set3 = new Set([100, 200, 300, 400, 500, 500]);

hlp.logYellow(`\nconst set3 = new Set([100, 200, 300, 400, 500, 500])`);
console.log(set3);

const set4 = new Set();

// This set is an empty set which has no items
hlp.logYellow(`\nAñadiendo elementos a un set vacío`);

set4.add(1);
set4.add("prueba");
set4.add({"objeto":"prueba"});
console.log(set4);

hlp.logYellow(`\nEliminando elementos de un set`);

set4.delete(1);
set4.delete("prueba");
// set4.add({"objeto":"prueba"});
console.log(set4);