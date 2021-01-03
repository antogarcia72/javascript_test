const h = require('../helper/helper').helper;

h.logResult('Sharing a loop variable (from global scope) ', '(nested scope)')

for (var i = 1; i <= 5; i++) {
	setTimeout(() => {
		h.log('i: ' + i);
	}, i * 1000)
}
