const hlp = require('../helper/helper').helper;

bar = 'bar';
hlp.logBlue('Con el uso de new se crea un contexto nuevo, por eso muestra undefined undefined, pq this.bar no existe y baz tampoco, es un scope nuevo')
var baz = new foo();
hlp.logBlue('Con el uso de new en la llamada a la función, conseguimos que además de la ejecución nos devuelva el contexto de la función (osea el this)')
hlp.log(h.JSONStringify(baz));