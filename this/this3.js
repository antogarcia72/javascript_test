const hlp = require('../helper/helper').helper;

function foo() {
    var bar = "bar1";

    hlp.log(this.bar);
    baz();
}

function baz() {
    var bar = "ahora tampoco";
    hlp.log(this.bar);
}

var bar = "bar2";
foo();
baz();