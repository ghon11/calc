add = function(a, b) {
    return a + b;
};

subtract = function(a, b) {
    return a - b;
};

multiply = function(a, b) {
    return a * b;
};

divide = function(a, b,) {
    return a / b;
};

operate = function(a, b, operator) {
    return operator(a, b);
}

console.log(`5 + 4 = ${add(5,4)}`);
console.log(`5 - 4 = ${subtract(5,4)}`);
console.log(`5 * 4 = ${multiply(5,4)}`);
console.log(`10 / 2 = ${divide(10,2)}`);

console.log(operate(5,4, add));
console.log(operate(5,4, subtract));
console.log(operate(5,4, multiply));
console.log(operate(10,2, divide));