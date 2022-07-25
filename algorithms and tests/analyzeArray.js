const analyzeArray = (arr) => {
  const obj = {};
  const sum = arr.reduce((previous, current) => {
    return previous + current;
  }, 0);
  obj.average = Number((sum / arr.length).toFixed(5));
  obj.min = arr.sort((a, b) => a - b)[0];
  obj.max = arr.sort((a, b) => b - a)[0];
  obj.length = arr.length;
  return obj;
};

module.exports = analyzeArray;
