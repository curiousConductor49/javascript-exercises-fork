const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
    } else {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((accumulator, currentValue) => accumulator*currentValue, 1);
  }
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
      let numArr = [num];
      while (num > 1) {
        numArr.push(num - 1);
        num--;
      }
      return numArr.reduce((accumulator, currentValue) => accumulator*currentValue, 1);
  }
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
