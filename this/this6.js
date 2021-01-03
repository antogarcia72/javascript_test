const h = require('../helper/helper').helper;

function bind(fn, o) {
    return function () {
        fn.call(o);
    }
}
function foo() {
    h.log(this.bar);
}

var obj = { bar: 'bar' }
var obj2 = { bar: 'bar2' }

h.log('Hard binding')
foo = bind(foo, obj);

foo();
foo.call(obj2); // Explicit binding