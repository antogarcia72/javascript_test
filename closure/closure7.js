const hlp = require('../helper/helper').helper;

hlp.log('Using IIFE in loop');

for (var i = 1; i <= 5; i++) {
	(function (i) {
		setTimeout(() => {
			hlp.logBlue('i: ' + i);
		}, i * 1000)
	})(i);
}