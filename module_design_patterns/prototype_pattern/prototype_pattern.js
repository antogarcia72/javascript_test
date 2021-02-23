// Prototype Oriented Programming is a type of Object-Oriented Programming and Javascript is a prototypical inheritance language. 
// Way before class was introduced, the only way to do OOP was through prototype, and as matter of fact, the Javascript class is 
// just syntactic sugar on top of prototype and constructor function. So why use this instead of classes then?
//
// - Learn Javascript prototypical inheritance nature;
// - Improve your ability to debug Javascript weird behaviors;
// - Understand how everything works under the hood;
// - Full control over the members of the object;
// - Allows you to create library and frameworks more efficiently by manipulating lower-level code;
// - Ability to extend from multiple sources for much better composability;
// - Better control on what you are inheriting with Object.create second argument.
const h = require('../../helper/helper').helper;

function Calculator() {
    // total is public because we declared it on the "this"
    this.total = 0;
    // precision is private because is a local variable/constant
    const precision = 2;
    // to precision is a public function expression with access to 
    // private properties
    this.toPrecision = (number) => Number(number.toFixed(precision));

    // create a getter for the property "result"  
    Object.defineProperty(this, 'result', {
        get() {
            return this.total;
        }
    })
}
// create a static member
// only available on Calculator. It cannot be inherited
Calculator.PI = 3.14;
// prototype methods
Calculator.prototype.add = function (x) {
    this.total += this.toPrecision(x);
}
Calculator.prototype.subtract = function (x) {
    this.total -= this.toPrecision(x);
}
Calculator.prototype.multiply = function (x) {
    this.total *= this.toPrecision(x);
}
Calculator.prototype.divide = function (x) {
    this.total /= this.toPrecision(x);
}

function ScienticCalculator() {
    // this is equivalent to calling super() 
    // when you extend another class
    // it will copy all properties from inside Calculator 
    // into ScienticCalculator
    // You can call as many constructor functions
    // to inherit properties from multiple ones
    Calculator.call(this);
}

// make ScienticCalculator extend Calculator
// similar to what happens when you do 
// "class Calculator extends ScienticCalculator"
ScienticCalculator.prototype = Object.create(Calculator.prototype);
ScienticCalculator.prototype.constructor = ScienticCalculator;

const calc = new Calculator();
const scientificCalc = new ScienticCalculator();

console.log(calc);
helper.log(scientificCalc);
  // checks logs below
