const hlp = require('../helper/helper').helper;

function foo() {
    hlp.log(this.bar);
}


var bar = "bar1";
var obj = { bar: 'bar2' }

foo();

hlp.logBlue('Explicit binding')
foo.call(obj); // Explicit binding