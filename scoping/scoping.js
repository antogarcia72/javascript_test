const hlp = require('../helper/helper').helper;

/**
 * Ejemplo de dynamic scoping
 */
function foo() {
	hlp.log(bar); // dynamic!!
};

function baz() {
	var bar = 'bar';
	foo();
};

baz();

/** 
 * Ejemplo de IIFE inmediatly-invoke-function-expression
 */
var a = 'afuera';

console.log('a(fuera) --> ' + a);

(function prueba(param) {
	a = 'adentro'

	var b = 'bdentro';
	var c = param;

	console.log('a --> ' + a);
	console.log('b --> ' + b);
	console.log('c --> ' + c);

	function tucutu() {
		console.log('tucutu')
	}
})('ejemplo');



/**
 * Ejemplo de reference error, el scope de "let y" muere dentro del if, no así el "var x"
 */
function prueba2() {
	if (1) {
		var x = 'vamos!!';
	}

	if (1) {
		let y = 'vamos-dentro';

		console.log(y)
	}

	console.log(x);
	console.log(y);
};

prueba2();
