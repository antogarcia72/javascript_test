const h = require('../helper/helper').helper;

function foo() {
	var bar = 0;

	setTimeout(() => {
		h.log(bar++);
	}, 100);

	setTimeout(() => {
		h.log(bar++);
	}, 200);

};

h.logResult('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope ', '(shared scope)')

foo();