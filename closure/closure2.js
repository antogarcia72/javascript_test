
const hlp = require('../helper/helper').helper;


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