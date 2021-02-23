// This pattern allows you to separate the implementation and creation of a particular object
const h = require('../../../helper/helper').helper;

var moduleManager = function ModuleFactory() {
    var publicAPI = {
        bar: function () {
            publicAPI.baz();
        },
        baz: function () {
            h.log('baz');
        }
    }

    return publicAPI;
};

var mod1 = moduleManager();
var mod2 = moduleManager();

mod1.bar();
mod2.bar();