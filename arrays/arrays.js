// https://medium.com/dailyjs/the-7-js-array-methods-you-will-need-in-2021-a9faa83b50e8

const hlp = require("../helper/helper").helper;

hlp.log("\n\n----------------");
hlp.log("Ejemplos de arrays");
hlp.log("------------------\n");

const cars = [
  { brand: "Porsche", price: 100000, builtIn: 2018 },
  { brand: "Audi", price: 80000, builtIn: 2019 },
  { brand: "Toyota", price: 30000, builtIn: 2019 },
];
const cars1 = ["Porsche", "Audi", "BMW", "Volkswagen"];
const cars2 = [
  { brand: "Porsche", price: 100000 },
  { brand: "Audi", price: 80000 },
  { brand: "Toyota", price: 30000 },
  { brand: "Volswagen", price: 40000 },
];
const cars3 = ["Porsche", "Renault", "Aston Martin", "Volkswagen"];
const numbers = [13, 65, 29, 81, 47];

// 1. Array.map()
// Crea un array nuevo con el resultado de la ejecución de la función contenida para cada elemento
const coolCars = cars1.map((car) => `${car} is a pretty cool car brand!`);

// Result:
// [
//	  "Porsche is a pretty cool car brand!",
//    "Audi is a pretty cool car brand!",
//    "BMW is a pretty cool car brand!",
//    "Volkswagen is a pretty cool car brand!"
// ];

hlp.logBlue("1. Uso del map... ");
hlp.logYellow(hlp.JSONStringify(coolCars));

// 2. Array.filter()
// Devuelve los elementos que cumplen la evaluación definida dentro del filter
const expensiveCars = cars2.filter((car) => car.price >= 40000);

// Result - Expensive Cars
// [
//    {brand: "Porsche", price: 100000},
//    {brand: "Audi", price: 80000}
//    {brand: "Volkswagen", price: 40000}
// ];
hlp.logBlue("2. Uso del filter (con coches de price >= 40000...)");
hlp.logYellow(hlp.JSONStringify(expensiveCars));

// 3. Array.forEach()
// Itera sobre el array y ejecuta la función para cada elemento
hlp.logBlue("3. Uso del forEach...");
cars2.forEach((car) => {
  hlp.log(`The ${car.brand} will cost you ${car.price} before taxes`);
});

// 4. Array.find()
// Devuelve el primer elemento que cumple la condición que le hemos pasado
hlp.logBlue("4. Uso del find...");
const expensiveCar = cars2.find((car) => car.price >= 40000);

// Result - Expensive Car:
// {brand: "Porsche", price: 100000}
hlp.logYellow(
  `The first expensive car will cost you ${expensiveCar.price} before taxes`
);

// 5. Array.every()
// Chequea si cada elemento del array cumple la condición que le hemos pasado
hlp.logBlue("5. Uso del every...");
const carsYoungerThanFiveYears = cars.every((car) => car.builtIn >= 2016);

// Result - Younger than 5 Years:
// true
hlp.logYellow(
  'Todos los coches posteriores a 2016: "' + carsYoungerThanFiveYears + '"'
);

// 6. Array.some()
// Chequea si alguno de los elementos cumple la condición que le hemos pasado
hlp.logBlue("6. Uso del some...");
const carsOlderThanFiveYears = cars.some((car) => car.builtIn < 2016);

// Result - Older than 5 Years:
// false
hlp.logYellow(
  'Todos los coches de más de cinco años: "' + carsOlderThanFiveYears + '"'
);

// 7. Merge two arrays removing duplicates
hlp.logBlue(
  "7. Uso del set para unir dos arrays sin elementos repetidos (set)..."
);
const carsTest = [...new Set([...cars1, ...cars3])];

// Result - ["Porsche","Audi","BMW","Volkswagen","Renault","Aston Martin"];
hlp.logYellow('8. Unión de arrays sin duplicados: "' + carsTest + '"');

// 9. Remove duplicates in array
const removeDuplicates = (arr) => [...new Set(arr)];

hlp.logBlue("8. Eliminar elementos repetidos en un array usando set");
hlp.logYellow(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]

// 9. Chequear si un array está vacío
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

hlp.logBlue("9. Chequear si un array está vacío");
hlp.logYellow(isNotEmpty([1, 2, 3]));

// 11. Compare two arrays
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
// Or
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
// Examples
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false

// 12. Convert an array of objects to a single object
const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});
// Or
const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));

// Example
toObject([
{ id: '1', name: 'Alpha', gender: 'Male' },
{ id: '2', name: 'Bravo', gender: 'Male' },
{ id: '3', name: 'Charlie', gender: 'Female' }],
'id');
/*
{
'1': { id: '1', name: 'Alpha', gender: 'Male' },
'2': { id: '2', name: 'Bravo', gender: 'Male' },
'3': { id: '3', name: 'Charlie', gender: 'Female' }
}
*/

// 13. Check if an array is not empty
const isNotEmpty = (arr) => Array.isArray(arr) && Object.keys(arr).length > 0;

// Examples
isNotEmpty([]); // false
isNotEmpty([1, 2, 3]); // true