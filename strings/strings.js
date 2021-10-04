const hlp = require('../helper/helper').helper;

hlp.log("\n\n-------------------");
hlp.log("Ejemplos de strings");
hlp.log("-------------------\n");

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

hlp.logBlue('Capitalize')
hlp.logYellow(capitalize('prueba'))