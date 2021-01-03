const h = require('../../helper/helper').helper;

var foo = (function () {
    var publicAPI = {
        bar: function () {
            publicAPI.baz();
        },
        baz: function () {
            h.log('baz');
        }
    }

    return publicAPI;
})();

foo.bar();