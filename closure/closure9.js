const hlp = require('../helper/helper').helper;

hlp.log('This is not closure');

const bar = (function () {
	var o = { bar: 'bar' };

	return { obj: o };
})();

hlp.logBlue(bar.obj.bar);