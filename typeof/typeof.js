const hlp = require('../helper/helper').helper;

hlp.log("-----------------");
hlp.log("Ejemplo de typeof");
hlp.log("-----------------\n");

hlp.log("Estos son todos los tipos disponibles\n");

const a = true;
const b = {};
const c = 25;
const d = undefined;
const e = null;
const g = [];

hlp.logBlue(`true un ${typeof (a)}`);
hlp.logYellow(`{} es un ${typeof (b)}`);
hlp.logCyan(`25 es un ${typeof (c)}`);
hlp.logGreen(`undefined es un ${typeof (d)}`);
hlp.logMagenta(`null es un ${typeof (e)}`);
hlp.logRed(`Array [] es un ${typeof (g)}`);
