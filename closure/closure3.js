const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------------");
hlp.log("Ejemplo 3 de closure");
hlp.log("--------------------\n");


function foo() {
	var bar = 'bar';

	setTimeout(() => {
		hlp.log(bar);
	}, 1000);
};

hlp.logResult('Closure is when a function "remembers" its lexical scope even when is executed outside that lexical scope ', '(in setTimeout inside of a function)')
foo();