const h = require('../helper/helper').helper;

function foo() {
    var bar = "bar1";

    h.log(this.bar);
    baz();
}

function baz() {
    var bar = "ahora tampoco";
    h.log(this.bar);
}

var bar = "bar2";
foo();
baz();