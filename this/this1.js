const hlp = require('../helper/helper').helper;

function foo() {
	hlp.log(this.bar);
};

function foo2() {
	hlp.log(bar);
};

function foo3() {
	hlp.log(this.bar2);
};

var bar = 'bar1';
bar2 = 'bar1';

var o1 = { bar: 'bar2', foo: foo };
var o2 = { bar: 'bar3', foo: foo };


hlp.logBlue('Si intentamos hacer un console.log(this.bar) siendo "bar" una variable fuera de la función (var bar = "bar1-fuera-con-var")');
foo();
hlp.logBlue('Si intentamos hacer un console.log(bar) siendo "bar" una variable fuera de la función (var bar = "bar1-fuera-con-var")');
foo2();
hlp.logBlue('Si intentamos hacer un console.log(this.bar2) siendo bar2 una variable fuera de la función, pero sin var (bar2 = "bar2-fuera-sin-usar-el-var")');
foo3();
hlp.logBlue('Si intentamos hacer un console.log(this.bar) siendo bar una variable dentro del objeto (var o1 = { bar: "bar2", foo: foo };');
o1.foo();
hlp.logBlue('Si intentamos hacer un console.log(this.bar) siendo bar una variable dentro del objeto  (var o2 = { bar: "bar3", foo: foo };');
o2.foo();


