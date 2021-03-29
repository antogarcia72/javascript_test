const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------------");
hlp.log("Ejemplo 9 de closure");
hlp.log("--------------------\n");

hlp.log('This is not closure');

const bar = (function () {
	var o = { bar: 'bar' };

	return { obj: o };
})();

hlp.logBlue(bar.obj.bar);