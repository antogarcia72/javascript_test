const h = require('../helper/helper').helper;

var cadena = '1';

var obj1 = {
    x: '1',
    y: '2'
};

var obj2 = {
    x: '1',
    y: '2'
};

var obj3 = obj1;
var obj4 = { ...obj1 };

h.log('"1" == 1 --> ' + ('1' == 1));
h.log('"1" === 1 --> ' + ('1' === 1));
h.log('----------------------------------------------')
h.log('variable == 1 --> ' + (cadena == 1));
h.log('variable === 1 --> ' + (cadena === 1));
h.log('----------------------------------------------')
h.log('variable1 --> ' + JSON.stringify(obj1, undefined, 4));
h.log('variable2 --> ' + JSON.stringify(obj2, undefined, 4));
h.log('variable3 (var obj3 = obj1) --> ' + JSON.stringify(obj3, undefined, 4));
h.log('variable4 (var obj4 = { ...obj1 }) --> ' + JSON.stringify(obj3, undefined, 4));
h.log('Si comparamos la misma propiedad funciona el ' === '\nvariable.p1 === variable2.p1 --> ' + (obj1.x === obj2.x));
h.log('Si comparamos los dos objetos aún teniendo los mismos valores devuelve FALSE\nvariable === variable2 --> ' + (obj1 === obj2));
h.log('Si comparamos dos objetos que son iguales devuelve true\nvariable == variable3 --> ' + (obj1 == obj3));
h.log('Si comparamos dos objetos que son iguales devuelve true\nvariable === variable3 --> ' + (obj1 === obj3));
obj1.x = '3';
h.log('Si modificamos el valor de una propiedad en la variable1 (x = "3"), la modificamos también en la variable3 --> ' + obj3.x);
h.log('Si modificamos el valor de una propiedad en la variable1 (x = "3"), NO modificamos el de la variable4 clonada --> ' + obj4.x);