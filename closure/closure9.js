const h = require('../helper/helper').helper;

h.logResult('This is not closuse');

var bar = (function () {
	var o = { bar: "bar" };

	return { obj: o };
})();

h.log(bar.obj.bar);