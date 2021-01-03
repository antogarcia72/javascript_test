const h = require('../helper/helper').helper;
// Closure is when a function "remembers" its lexical scope even whwn is executed outside that lexical scope

function foo() {
	var bar = 'bar';

	return function () {
		h.log(bar);
	}

};

function bam() {
	foo()(); // Executed outside the lexical scope of baz
}

h.logBlue('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope')
bam();