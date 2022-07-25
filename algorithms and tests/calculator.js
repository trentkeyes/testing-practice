const calculator = {
  add: (a, b) => Number((a + b).toFixed(5)),
  subtract: (a, b) => Number((a - b).toFixed(5)),
  multiply: (a, b) => Number((a * b).toFixed(5)),
  divide: (a, b) => Number((a / b).toFixed(5)),
};

module.exports = calculator;
