const h = require('../helper/helper').helper;
const lodashClonedeep = require('../node_modules/lodash/cloneDeep');
const _ = require('../node_modules/underscore/underscore');

// Variable original
const food = { beef: '🥩', bacon: '🥓' }

// "Spread" (Shallow Clone), no funciona arrays multidimensionales o arrays aninados
// A shallow copy means the first level is copied, deeper levels are referenced.
const clone1 = { ...food }

// "Object.assign"
const clone2 = Object.assign({}, food)

// "JSON" (Deep Clone - True copy)
const clone3 = JSON.parse(JSON.stringify(food))

// "Object.fromEntries"
const clone4 = Object.fromEntries(Object.entries(food))

// "lodashClonedeep"
const clone5 = lodashClonedeep(food);

// "_.clone()"
const clone6 = _.clone(food);

h.logResult('Variable original:\n', JSON.stringify(food, undefined, 4));
h.logResult('Clone 1 Spread ({ ...food }:\n', JSON.stringify(clone1, undefined, 4));
h.logResult('Clone 2 "Object.assign({}, food):\n', JSON.stringify(clone2, undefined, 4));
h.logResult('Clone 3 "JSON.parse(JSON.stringify(food)):\n', JSON.stringify(clone3, undefined, 4));
h.logResult('Clone 4 "Object.fromEntries(Object.entries(food)):\n', JSON.stringify(clone4, undefined, 4));
h.logResult('Clone 5 "lodashClonedeep(food):\n', JSON.stringify(clone5, undefined, 4));
h.logResult('Clone 6 "_.clone(food):\n', JSON.stringify(clone6, undefined, 4));
// RESULT:
// { beef: '🥩', bacon: '🥓' }