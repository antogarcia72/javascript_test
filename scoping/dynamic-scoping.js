function foo() {
	console.log(bar); // dynamic!!
};

function baz() {
	var bar = 'bar';
	foo();
};

baz();
