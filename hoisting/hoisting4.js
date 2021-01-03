const h = require('../helper/helper').helper;

h.log('---------------------');
h.log('Ejemplo 4 de hoisting');
h.log('---------------------\n');

h.log('------------------------------------------------------------------------------------------------------');
h.log('Llamamos a una función antes de que se declare y nos devuelve el resultado esperado, no undefined');
h.log('En este ejemplo se ve que la definición de las funciones precede en el scope a las variables');
h.log('Además de observar que el contenido de la función también se lleva al scope');
h.log('No ocurre lo mismo con las variables, que su asignación se hace en tiempo de ejecución');
h.log('Además podemos sobreescribir la definición de una función, lo mismo que podemos hacer con una variable');
h.log('------------------------------------------------------------------------------------------------------');

h.logRed(foo());

var foo = 2;
var foo = 3;

h.logRed(foo);

function foo() {
    h.log('bar');
}

function foo() {
    h.log('foo');
}
