const h = require('../../../helper/helper').helper;

// Using define
define('foo', function () {
    var o = { bar: 'bar' };

    return {
        bar: function () {
            h.log(o.bar);
        }
    }
});

foo.bar();