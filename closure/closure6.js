const hlp = require('../helper/helper').helper;

hlp.logResult('Sharing a loop variable (from global scope) ', '(nested scope)')

for (var i = 1; i <= 5; i++) {
	setTimeout(() => {
		hlp.logBlue('i: ' + i);
	}, i * 1000)
}
