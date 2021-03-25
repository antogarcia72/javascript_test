const hlp = require('../helper/helper').helper;

var o1 = {
    bar: 'bar1',
    foo: function () {
        hlp.log(this.bar);
    }
};

var o2 = { bar: 'bar2', foo: o1.foo };

var bar = 'bar3';
var foo = o1.foo;

o1.foo();
o2.foo();
foo();
