const reverseString = require('./reverseString');

test('reverse a word', () => {
  expect(reverseString('dog')).toBe('god');
});

test('reverse a sentence', () => {
  expect(reverseString('Very cool racecar!')).toBe('!racecar looc yreV')
})