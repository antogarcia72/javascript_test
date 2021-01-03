const h = require('../helper/helper').helper;

function foo() {
	var bar = 'bar';

	setTimeout(() => {
		h.log(bar);
	}, 1000);
};

h.logResult('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope ', '(in setTimeout inside of a function)')

foo();