var a = b();
var c = d(); // d es una variable que en este punto es undefined, por eso da el error "TypeError: d is not a function"

h.log(a);
h.log(c);

function b() {
    return c;
}

var d = function d() {
    return b();
}