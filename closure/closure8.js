const hlp = require('../helper/helper').helper;

hlp.logResult('Using let in a loop variable (behabior is like using IIFE, (block scope in ecch iteration) ', '(block scope)')

for (let i = 1; i <= 5; i++) {
	setTimeout(() => {
		hlp.logBlue('i: ' + i);
	}, i * 1000)
}
