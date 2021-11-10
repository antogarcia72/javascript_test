// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { rest } = require("lodash");

const { PI, E, SQRT2 } = Math;

console.log(PI);
console.log(E);
console.log(SQRT2);

const circle = {
  label: "circleX",
  radius: 2,
};

// Using inside a function
const circleArea = ({ radius }) => (PI * radius * radius).toFixed(2);

console.log(circleArea(circle));

// Default & optional params
const circleArea2 = ({ radius }, { precision = 2 } = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(circleArea2(circle));

// Specifying an optional param
console.log(circleArea2(circle, { precision: 4 }));

// Using arrays
const [first, second, , forth] = [10, 20, 30, 40];

console.log(first);
console.log(second);
console.log(forth);

const [first1, ...restOfItems] = [10, 20, 30, 40];

console.log(first1);
console.log(restOfItems);

// Using objects
const data = {
  temp1: "001",
  temp2: "002",
  firstName: "John",
  lastName: "Doe",
};

const { temp1, temp2, ...person } = data;

const person2 = { ...person };
person2.lastName = "Doeeee";
console.log(person);
console.log(person2);
