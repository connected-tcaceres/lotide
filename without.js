const without = function(source, itemsToRemove) {
  let cleanArr = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    cleanArr = cleanArr.filter(num => {
      return num !== itemsToRemove[i];
    });
  }
  return cleanArr;
};

module.exports = without;

//TEST CODE
// assertArraysEqual(without([1,2,3],[1]),[2,3]);
// assertArraysEqual(without([1, 2, 3], [1]),[2,3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]); // => ["1", "2"]
// assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false
