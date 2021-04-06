const hlp = require('../helper/helper').helper;

hlp.log('\n\n---------------------');
hlp.log('Ejemplo 3 de hoisting');
hlp.log('---------------------\n');

var a = b();
var c = d(); // d es una variable que en este punto es undefined, por eso da el error "TypeError: d is not a function"

hlp.log(a);
hlp.log(c);

function b() {
    return c;
}

var d = function d() {
    return b();
}