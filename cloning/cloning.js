const hlp = require('../helper/helper').helper;
const lodashClonedeep = require('../node_modules/lodash/cloneDeep');
const _ = require('../node_modules/underscore/underscore');

// Variable original
const food = { beef: '🥩', bacon: '🥓' }

// "Spread" (Shallow Clone), no funciona en arrays multidimensionales o arrays aninados
// A shallow copy means the first level is copied, deeper levels are referenced.
const clone1 = { ...food }

// "Object.assign"
const clone2 = Object.assign({}, food)

// "JSON" (Deep Clone - True copy)
const clone3 = JSON.parse(JSON.stringify(food))

// "Object.fromEntries"
const clone4 = Object.fromEntries(Object.entries(food))

// "lodashClonedeep" (Deep Clone)
const clone5 = lodashClonedeep(food);

// "_.clone()" (Deep Clone)
const clone6 = _.clone(food);

hlp.log("\n\n------------------");
hlp.log("Ejemplo de cloning");
hlp.log("------------------\n");


hlp.logResult('Variable original:\n', JSON.stringify(food, undefined, 4));
hlp.logResult('Clone 1 Spread ({ ...food }:\n', JSON.stringify(clone1, undefined, 4));
hlp.logResult('Clone 2 "Object.assign({}, food):\n', JSON.stringify(clone2, undefined, 4));
hlp.logResult('Clone 3 "JSON.parse(JSON.stringify(food)):\n', JSON.stringify(clone3, undefined, 4));
hlp.logResult('Clone 4 "Object.fromEntries(Object.entries(food)):\n', JSON.stringify(clone4, undefined, 4));
hlp.logResult('Clone 5 "lodashClonedeep(food):\n', JSON.stringify(clone5, undefined, 4));
hlp.logResult('Clone 6 "_.clone(food):\n', JSON.stringify(clone6, undefined, 4));
// RESULT:
// { beef: '🥩', bacon: '🥓' }