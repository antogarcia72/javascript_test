const h = require('../../../helper/helper').helper;

var moduleManager = (function ModuleFactory() {
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

moduleManager.bar();