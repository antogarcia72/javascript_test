const h = require('../helper/helper').helper;

h.logResult('Using let in a loop variable (behabior is like using IIFE, (block scope in ecch iteration) ', '(block scope)')

for (let i = 1; i <= 5; i++) {
	setTimeout(() => {
		h.log('i: ' + i);
	}, i * 1000)
}
