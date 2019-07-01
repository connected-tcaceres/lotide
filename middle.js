const middle = function(array) {
  let midArr = [];
  const middleIndex = array.length / 2;
  if (array.length <= 2) {
    return midArr;
  } else if (array.length % 2 === 0) {
    midArr = array.slice(Math.floor(middleIndex) - 1,Math.floor(middleIndex) + 1);
  } else {
    midArr.push(array[Math.floor(middleIndex)]);
  }
  return midArr;
};

module.exports = middle;