const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------------");
hlp.log("Ejemplo 1 de closure");
hlp.log("--------------------\n");

function foo() {
	var bar = 'bar';

	function baz() {
		hlp.log(bar);
	}

	bam(baz);
};

function bam(baz) {
	baz(); // Executed outside the lexical scope of baz
}

hlp.logBlue('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope')
foo();