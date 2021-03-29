
const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------------");
hlp.log("Ejemplo 2 de closure");
hlp.log("--------------------\n");

function foo() {
	var bar = 'bar';

	return function () {
		hlp.log(bar);
	}

};

function bam() {
	foo()(); // Executed outside the lexical scope of baz
}

hlp.logBlue('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope')
bam();