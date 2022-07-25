const caesarCipher = (str) => {
  let encrypted = '';
  for (const letter of str) {
    if (letter === ' ') {
      encrypted += ' ';
    } else {
      const charCode = letter.charCodeAt();
      if (charCode >= 97 && charCode <= 122) {
        if (charCode + 13 > 122) {
          encrypted += String.fromCharCode(charCode - 13);
        } else {
          encrypted += String.fromCharCode(charCode + 13);
        }
      } else if (charCode >= 65 && charCode <= 90) {
        if (charCode + 13 > 90) {
          encrypted += String.fromCharCode(charCode - 13);
        } else {
          encrypted += String.fromCharCode(charCode + 13);
        }
      } else {
        encrypted += letter;
      }
    }
  }
  return encrypted;
};

module.exports = caesarCipher;
