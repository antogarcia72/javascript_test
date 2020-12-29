const h = require('../helper/helper').helper;

h.log('---------------------');
h.log('Ejemplo 2 de hoisting');
h.log('---------------------\n');

h.log('Intentamos mostrar una función que aunque definida, no tiene valor');
h.logRed(j);

var j = function d() {
    return '"Función ejecutada"';
}

h.log('Función con valor ya establecido')
h.logRed(j);


h.log('Ejecución de la función desde la variable');
h.logRed(j());
