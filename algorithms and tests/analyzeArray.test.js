const analyzeArray = require('./analyzeArray');

test('OP example', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('with decimals', () => {
  expect(analyzeArray([5.5, 18, 34, 64, 22.2, 38.6])).toStrictEqual({
    average: 30.38333,
    min: 5.5,
    max: 64,
    length: 6,
  });
});
