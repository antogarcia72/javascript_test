const h = require('../helper/helper').helper;

function foo() {
	var bar = 0;

	setTimeout(() => {

		var baz = 1;

		h.log(bar++);

		setTimeout(() => {
			h.log(bar + baz);
		}, 200);

	}, 100);


};

h.logResult('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope ', '(nested scope)')

foo();