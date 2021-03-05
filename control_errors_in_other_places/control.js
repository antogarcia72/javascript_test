// https://javascript.plainenglish.io/the-two-line-javascript-design-pattern-that-covers-a-multitude-of-sins-b8ec838d184

; (function (window, undefined) {
    // Do stuff here
})(this);

// The first line starts with a semi-colon, which separates your code from whatever is executed immediately before it. 
// This ensures that anyone not smart enough to use a code linter doesn’t have the opportunity to break your code

// Next, we have an anonymous function. This ensures any variables you declare are within a closure, meaning they won’t be 
// affected by any globally-scoped variables

// You’ll also notice that we redeclare the window object in the function parameters, and that it’s declared by the this 
// keyword passed in the function execution at the bottom of the file. Outside of arrow functions, the this keyword always 
// references the parent of its current execution context, which in a global setting is the window object. Passing it in 
// this way ensures that your function receives the actual window (or parent) object, and not some other variable that someone 
// has declared on the same name for some reason.