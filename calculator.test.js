const calculator = require('./calculator');

test('add 2 and 3', () => {
  expect(calculator.add(2, 3)).toEqual(5);
});

test('add 500 and 69', () => {
  expect(calculator.add(500.00005, 69)).toEqual(569.00005);
});

test('subtract 43 from 69', () => {
  expect(calculator.subtract(43, 69)).toEqual(-26);
});

test('subtract 10000 from 10003', () => {
  expect(calculator.subtract(10003, 10000)).toEqual(3);
});

test('multiply 10000 and 0', () => {
  expect(calculator.multiply(10000, 0)).toEqual(0);
});

test('multiply 50 and 4', () => {
  expect(calculator.multiply(50, 4)).toEqual(200);
});

test('divide 50 by 2', () => {
  expect(calculator.divide(50, 2)).toEqual(25);
});

test('divide 50 by 3', () => {
  expect(calculator.divide(50, 3)).toEqual(16.66667);
});
