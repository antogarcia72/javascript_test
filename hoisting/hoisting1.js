const hlp = require('../helper/helper').helper;

hlp.log("---------------------");
hlp.log("Ejemplo 1 de hoisting");
hlp.log("---------------------\n");

hlp.log(a); // undefined
hlp.log(b); // undefined
var a = b;
var b = 'caracola';
hlp.log(b); // caracola
hlp.log(a); // caracola
