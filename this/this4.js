const h = require('../helper/helper').helper;

function foo() {
    h.log(this.bar);
}


var bar = "bar1";
var obj = { bar: 'bar2' }

foo();

h.logBlue('Explicit binding')
foo.call(obj); // Explicit binding