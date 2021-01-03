const h = require('../helper/helper').helper;

h.log("---------------------");
h.log("Ejemplo 1 de hoisting");
h.log("---------------------\n");

h.log(a);
h.log(b);
var a = b;
var b = 'caracola';
h.log(b);
h.log(a);
