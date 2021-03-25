const hlp = require('../helper/helper').helper;

function foo() {
	var bar = 0;

	setTimeout(() => {
		hlp.log(bar++);
	}, 100);

	setTimeout(() => {
		hlp.logCyan(bar++);
	}, 200);

};

hlp.logResult('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope ', '(shared scope)')

foo();