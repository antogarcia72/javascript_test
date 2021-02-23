const h = require('../helper/helper').helper;

h.log("---------------------");
h.log("Ejemplo 1 de hoisting");
h.log("---------------------\n");

h.log(a); // undefined
h.log(b); // undefined
var a = b;
var b = 'caracola';
h.log(b); // caracola
h.log(a); // caracola
