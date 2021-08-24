
const hlp = require('../helper/helper').helper;

hlp.log("\n\n-------------------------");
hlp.log("Ejemplo de JSON functions");
hlp.log("-------------------------\n");

const objeto = { "propiedad_1": 1, "propiedad_2": 2, "propiedad_3": { "pp3_1": "31", "pp3_2": 32 } };

hlp.log('Transformar una cadena en un objeto javascript JSON.parse\n')

const cadenaObjeto = '{"propiedad_1": 1, "propiedad_2": 2, "propiedad_3": { "pp3_1": 31, "pp3_2": 32 }}';
// const cadenaObjeto = '{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}';

const objetoDesdeCadena = JSON.parse(cadenaObjeto);
const cadenaDesdeObjeto = JSON.stringify(objeto);

hlp.logYellow(hlp.JSONStringify(objetoDesdeCadena));

hlp.logYellow('Transformar una cadena en un objeto javascript JSON.parse\n')

console.log(cadenaDesdeObjeto);

hlp.logBlue('Transformar un objeto javascript en una cadena --> JSON.stringify\n')