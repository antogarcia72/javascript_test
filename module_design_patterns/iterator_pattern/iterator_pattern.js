const h = require('../../helper/helper').helper;

const thousandList = {};

// using generator to implement an iterator
thousandList[Symbol.iterator] = function* () {
    let number = 0;
    yield number;
    while (number < 1000) {
        yield ++number;
    }
};
for (const number of thousandList) {
    hlp.logBlue(number); // prints 1 to 1000
}

const prueba = [...thousandList] // [1, 2, 3, ..., 1000]

hlp.log(prueba); // prints 1 to 1000