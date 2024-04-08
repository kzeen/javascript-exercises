const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce(((total, curr) => total + curr), 0);
};

const multiply = function(arr) {
  return arr.reduce(((total, curr) => total * curr), 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  // Use spread operator to create an array from 0 to num 
  // slice to not include 0
  // Multiply all numbers in the array, default is 1
	return [...Array(num+1).keys()].slice(1).reduce(((total, curr) => total * curr), 1);
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
