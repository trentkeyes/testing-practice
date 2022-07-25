const capitalizeFirst = require('./capitalize');

test('raises first letter of lower case word', () => {
  expect(capitalizeFirst('dog')).toBe('Dog');
});

test('raises first letter of a different lower case word', () => {
  expect(capitalizeFirst('cat')).toBe('Cat');
});

test('dont change an all caps word', () => {
  expect(capitalizeFirst('ANIMALS')).toBe('ANIMALS');
});

test('dont change gobbledygook', () => {
  expect(capitalizeFirst('!@$%$#^KDAJFKDajkldjfAKJF')).toBe(
    '!@$%$#^KDAJFKDajkldjfAKJF'
  );
});

test('multiple words', () => {
  expect(capitalizeFirst('This is a sentence.')).toBe('This Is A Sentence.');
});
