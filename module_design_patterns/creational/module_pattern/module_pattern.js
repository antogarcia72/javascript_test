
const globalData = {
    x: 20
};
const myModule = (function (global) { // <- access injections
    // private stuff in the module
    const val = 10 + global.x;
    // expose what you want
    return {
        prop: 12,
        method() {
            return val;
        }
    }
})(globalData); // <- inject into your module

console.log(myModule.prop); // prints 12
console.log(myModule.method()); // prints 30