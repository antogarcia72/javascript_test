
const h = require('../../../helper/helper').helper;

// The proxy pattern introduces you to a new type of programming called metaprogramming. 
// Javascript comes with the Proxy object which literally gives you a superpower and pushes you to the next level. 
// It helps you control access to another object — called subject —by implementing the same interface. 
// The Proxy helps you intercept operations to the subject which makes it great for:
// Validation — validate data to the subject to make sure it is valid before it reaches the subject;
// Security — ensures that any access to the subject is authorized and the one doing it has all necessary privileges;
// Caching — keep an internal cache to make future expensive operations do not go through the expensive calculation in the subject;
// Lazy initialization — ensure that expensive initialization of the subject is delayed for when it is actually needed;
// Debugging/Logging — intercept all the data in and out to create a realistic report of usage of the subject;
// Remote Object Access — makes remote objects appear local;

// ------------------------------------------------------------------------ //
// The Proxy object enables you to create a proxy for another object,       // 
//  which can intercept and redefine fundamental operations for that object //
// ------------------------------------------------------------------------ //

const target = {
    message1: "hello",
    message2: "everyone"
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

hlp.log(proxy1.message1); // hello
hlp.log(proxy1.message2); // everyone

// ---------------------- //
// To customize the proxy //
// ---------------------- //

// -------------------------------------- //
// Ejemplo 1 (Get de cualquier propiedad) //
// -------------------------------------- //
const handler2 = {
    get: function (target, prop, receiver) {
        return "world";
    }
};

const proxy2 = new Proxy(target, handler2);

hlp.logGreen(proxy2.message1); // world
hlp.logGreen(proxy2.message2); // world

// -------------------------------- //
// Ejemplo 1 (Get de una propiedad) //
// -------------------------------- //

const handler3 = {
    get: function (target, prop, receiver) {
        if (prop === "message2") {
            return "world";
        }
        return Reflect.get(...arguments);
    },
};

const proxy3 = new Proxy(target, handler3);

hlp.logCyan(proxy3.message1); // hello
hlp.logCyan(proxy3.message2); // world

// --------------------------------- //
// Ejemplo 3 (Validador para un SET) //
// --------------------------------- //


let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
    }
};

const person = new Proxy({}, validator);

person.age = 100;
hlp.logYellow(person.age); // 100
person.age = 'young';    // Throws an exception
person.age = 300;        // Throws an exception