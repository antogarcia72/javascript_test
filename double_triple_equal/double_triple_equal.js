const hlp = require('../helper/helper').helper;

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

hlp.log('"1" == 1 --> ' + ('1' == 1));
hlp.log('"1" === 1 --> ' + ('1' === 1));
hlp.log('----------------------------------------------')
hlp.log('variable == 1 --> ' + (cadena == 1));
hlp.log('variable === 1 --> ' + (cadena === 1));
hlp.log('----------------------------------------------')
hlp.log('variable1 --> ' + JSON.stringify(obj1, undefined, 4));
hlp.log('variable2 --> ' + JSON.stringify(obj2, undefined, 4));
hlp.log('variable3 (var obj3 = obj1) --> ' + JSON.stringify(obj3, undefined, 4));
hlp.log('variable4 (var obj4 = { ...obj1 }) --> ' + JSON.stringify(obj3, undefined, 4));
hlp.log('Si comparamos la misma propiedad funciona el ' === '\nvariable.p1 === variable2.p1 --> ' + (obj1.x === obj2.x));
hlp.log('Si comparamos los dos objetos aún teniendo los mismos valores devuelve FALSE\nvariable === variable2 --> ' + (obj1 === obj2));
hlp.log('Si comparamos dos objetos que son iguales devuelve true\nvariable == variable3 --> ' + (obj1 == obj3));
hlp.log('Si comparamos dos objetos que son iguales devuelve true\nvariable === variable3 --> ' + (obj1 === obj3));
obj1.x = '3';
hlp.log('Si modificamos el valor de una propiedad en la variable1 (x = "3"), la modificamos también en la variable3 --> ' + obj3.x);
hlp.log('Si modificamos el valor de una propiedad en la variable1 (x = "3"), NO modificamos el de la variable4 clonada --> ' + obj4.x);