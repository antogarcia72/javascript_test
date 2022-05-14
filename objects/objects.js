// Check if multiple objects are equal
const isEqual = (...objects) =>
    objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));

// Examples
isEqual({ foo: 'bar' }, { foo: 'bar' }); // true
isEqual({ foo: 'bar' }, { bar: 'foo' }); // false

// Remove all null and undefined properties from an object
const removeNullUndefined = (obj) =>
    Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});
// Or
const removeNullUndefined1 = (obj) =>
    Object.entries(obj)
        .filter(([_, v]) => v != null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
// Or
const removeNullUndefined2 = (obj) =>
    Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
// Example
removeNullUndefined({
    foo: null,
    bar: undefined,
    fuzz: 42
});
// { fuzz: 42 }

// Sort an object by its properties
const sort = (obj) =>
    Object.keys(obj)
        .sort()
        .reduce((p, c) => ((p[c] = obj[c]), p), {});
// Example
const colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff'
};
sort(colors);
/*
{
black: '#000000',
blue: '#0000ff',
green: '#008000',
red: '#ff0000',
white: '#ffffff',
}
*/

// Check if an object is an array
const isArray = (obj) => Array.isArray(obj);

// Check if object is empty
const isEmpty = Object.keys(obj).length === 0;

// Copy properties from one object to another
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
