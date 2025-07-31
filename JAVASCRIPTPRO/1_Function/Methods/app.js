/*
 Methods : Actions that can be performed on an object

 */

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};

console.log(calculator.add(2,4))
console.log(calculator)

//Methods Shorthand
const calculators = {
   add (a, b) {
        return a + b;
    },
    sub (a, b) {
        return a - b;
    },
}

console.log(calculators)
console.log(calculators.add(4,3))