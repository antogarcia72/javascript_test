const h = require('../helper/helper').helper;

h.log('Using IIFE in loop');

for (var i = 1; i <= 5; i++) {
	(function (i) {
		setTimeout(() => {
			h.log('i: ' + i);
		}, i * 1000)
	})(i);

}