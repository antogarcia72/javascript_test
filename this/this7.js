const hlp = require('../helper/helper').helper;

if (!Function.prototype.bind2) {
    Function.prototype.bind2 = function (o) {
        var fn = this; // The function
        return function () {
            return fn.apply(o, arguments);
        }
    }
}

function foo(baz) {
    hlp.log(this.bar + ' ' + baz);
}

var obj = { bar: 'bar' }

hlp.log('Hard binding 2')
foo = foo.bind2(foo, obj);

foo('baz');
