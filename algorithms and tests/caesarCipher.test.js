const caesarCipher = require('./caesarCipher');

test('shift letters 13 places', () => {
  expect(caesarCipher('attack at dawn')).toEqual('nggnpx ng qnja');
});

test('shift a different phrase letters 13 places', () => {
  expect(caesarCipher('no one could crack this code')).toEqual(
    'ab bar pbhyq penpx guvf pbqr'
  );
});

test('With upper case letters', () => {
  expect(caesarCipher('No one could cracK this Code')).toEqual(
    'Ab bar pbhyq penpX guvf Pbqr'
  );
});

test('With non-letters / symbols', () => {
  expect(caesarCipher('No one! could cracK this Code :)')).toEqual(
    'Ab bar! pbhyq penpX guvf Pbqr :)'
  );
});
