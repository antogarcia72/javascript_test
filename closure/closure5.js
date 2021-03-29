const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------------");
hlp.log("Ejemplo 5 de closure");
hlp.log("--------------------\n");

function foo() {
	var bar = 0;

	setTimeout(() => {

		var baz = 1;

		hlp.logBlue(bar++);

		setTimeout(() => {
			hlp.logMagenta(bar + baz);
		}, 200);

	}, 100);
};

hlp.logResult('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope ', '(nested scope)')

foo();