const hlp = require('../helper/helper').helper;

hlp.log('\n\n---------------------');
hlp.log('Ejemplo 2 de hoisting');
hlp.log('---------------------\n');

hlp.log('Intentamos mostrar una función que aunque definida, no tiene valor');
hlp.logRed(j);

var j = function d() {
    return '"Función ejecutada"';
}

hlp.log('Función con valor ya establecido')
hlp.logRed(j);


hlp.log('Ejecución de la función desde la variable');
hlp.logRed(j());
