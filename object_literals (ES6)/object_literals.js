const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const obj = {
    p1: 10,
    p2:20,
    f1() {}, // Defining a function
    f2: () => {},
    [mystery]: 42,
    InverseOfPI // No need to use  InverseOfPI: InverseOfPI
};

console.log (obj.answer);
console.log (obj.InverseOfPI);

