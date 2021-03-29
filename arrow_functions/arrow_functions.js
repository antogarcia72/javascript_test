
const hlp = require('../helper/helper').helper;

hlp.log("\n\n--------------------------");
hlp.log("Ejemplo de arrow functions");
hlp.log("--------------------------\n");

hlp.log('Las arrow functions permiten ver el this, tienen un return implícito y no tienen pq usar parántesis\n')

function greeter(greeting) {
	return function(name) {
	  return `${greeting}, ${name}!` 
	}
}
  
const greeter2 = greeting => name => `${greeting}, ${name}!`

hlp.logYellow(greeter('Old')('One'));
hlp.logBlue(greeter2('New')('One'));

hlp.log('\nYou can’t name arrow functions\n')
hlp.log("------------------------------\n");
hlp.log('Functions that don’t have a name identifier between the function keyword and the parameter list are called anonymous functions')

const anonymous = function() {
	return 'You can\'t identify me!' 
}

hlp.logYellow(anonymous());  

hlp.log('\nArrow functions are all anonymous functions\n');
  
const anonymousArrowFunc = () => 'You can\'t identify me!'
  
hlp.logCyan(anonymousArrowFunc);
