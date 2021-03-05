// https://medium.com/dailyjs/the-7-js-array-methods-you-will-need-in-2021-a9faa83b50e8

const h = require('../helper/helper').helper;

const cars1 = ["Porsche", "Audi", "BMW", "Volkswagen"];
const cars2 = [
	{ brand: "Porsche", price: 100000 },
	{ brand: "Audi", price: 80000 },
	{ brand: "Toyota", price: 30000 }
];
const numbers = [13, 65, 29, 81, 47];

// 1. Array.map()
// Crea un array nuevo con el resultado de la ejecución de la función contenida para cada elemento
const coolCars = cars1.map(car => `${car} is a pretty cool car brand!`);

// Result:
// ["Porsche is a pretty cool car brand!", "Audi is a pretty cool car brand!", 
//  "BMW is a pretty cool car brand!", "Volkswagen is a pretty cool car brand!"];

h.logBlue('Uso del map... ')
h.logYellow(h.JSONStringify(coolCars))

// 2. Array.filter()
// Devuelve los elementos que cumplen la evaluación definida dentro del filter
const expensiveCars = cars2.filter(car => car.price >= 40000);

// Result - Expensive Cars
// [{brand: "Porsche", price: 100000},
//  {brand: "Audi", price: 80000}];
h.logBlue('Uso del filter...')
h.logYellow(h.JSONStringify(expensiveCars))

// 3. Array.forEach()
// Itera sobre el array y ejecuta la función para cada elemento


h.logBlue('Uso del forEach...')

cars2.forEach(car => {
	h.log(`The ${car.brand} will cost you ${car.price} before taxes`);
});

// 5. Array.find()
// Devuelve el primer elemento que cumple la condición que le hemos pasado

h.logBlue('Uso del find...')

const expensiveCar = cars2.find(car => car.price >= 40000);

// Result - Expensive Car:
// {brand: "Porsche", price: 100000}

h.logYellow(`The first expensive car will cost you ${expensiveCar.price} before taxes`);

// 6. Array.every()
// Chequea si cada elemento del array cumple la condición que le hemos pasado

h.logBlue('Uso del every...')

const cars = [
	{ brand: "Porsche", price: 100000, builtIn: 2018 },
	{ brand: "Audi", price: 80000, builtIn: 2019 },
	{ brand: "Toyota", price: 30000, builtIn: 2019 }
];

const carsYoungerThanFiveYears = cars.every(car => car.builtIn >= 2016);

// Result - Younger than 5 Years:
// true

h.logYellow('Todos los coches posteriores a 2016: "' + carsYoungerThanFiveYears + '"')

// 7. Array.some()
// Chequea si alguno de los elementos cumple la condición que le hemos pasado

h.logBlue('Uso del some...')

const carsOlderThanFiveYears = cars.some(car => car.builtIn < 2016);
// Result - Older than 5 Years:
// false

h.logYellow('Todos los coches de más de cinco años: "' + carsOlderThanFiveYears + '"')