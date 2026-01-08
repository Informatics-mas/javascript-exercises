const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
	let result = a - b;
  return result;
};

const sum = function(numbers) {
	let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

const multiply = function(numbers) {
	let result = 1;
  for (let number of numbers) {
    result *= number;
  }
  return result;
};

const power = function(a, b) {
	let result = a ** b;
  return result;
};


const factorial = function (number) {
  if (number < 0) return 'ERROR';

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
