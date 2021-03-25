const hlp = require('../helper/helper').helper;

hlp.log('---------------------');
hlp.log('Ejemplo 4 de hoisting');
hlp.log('---------------------\n');

hlp.log('------------------------------------------------------------------------------------------------------');
hlp.log('Llamamos a una función antes de que se declare y nos devuelve el resultado esperado, no undefined');
hlp.log('En este ejemplo se ve que la definición de las funciones precede en el scope a las variables');
hlp.log('Además de observar que el contenido de la función también se lleva al scope');
hlp.log('No ocurre lo mismo con las variables, que su asignación se hace en tiempo de ejecución');
hlp.log('Además podemos sobreescribir la definición de una función, lo mismo que podemos hacer con una variable');
hlp.log('------------------------------------------------------------------------------------------------------');

hlp.logRed(foo());

var foo = 2;
var foo = 3;

hlp.logRed(foo);

function foo() {
    hlp.log('bar');
}

function foo() {
    hlp.log('foo');
}
