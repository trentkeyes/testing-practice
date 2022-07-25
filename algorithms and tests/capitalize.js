const capitalizeFirst = (str) => {
  return str
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

module.exports = capitalizeFirst;
