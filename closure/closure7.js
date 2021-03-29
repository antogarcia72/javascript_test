const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------------");
hlp.log("Ejemplo 7 de closure");
hlp.log("--------------------\n");

hlp.log('Using IIFE in loop');

for (var i = 1; i <= 5; i++) {
	(function (i) {
		setTimeout(() => {
			hlp.logBlue('i: ' + i);
		}, i * 1000)
	})(i);
}