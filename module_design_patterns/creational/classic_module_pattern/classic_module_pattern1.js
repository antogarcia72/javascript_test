const hlp = require('../helper/helper').helper;

// A classic module must have have two caractheristics
// Must have an outer wrapping function that is executable (function foo that is executed in line 15)
// Must return an object with one o more functipons that are return from that function call (return {bar: function () {hlp.log(o.bar);}} calling the foo() function)

var foo = (function () {
    var o = { bar: 'bar' };

    return {
        bar: function () {
            hlp.log(o.bar);
        }
    }
})();

foo.bar();