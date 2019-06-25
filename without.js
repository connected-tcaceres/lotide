const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let cleanArr = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    cleanArr = cleanArr.filter(num => {
      return num !== itemsToRemove[i];
    });
  }
  return cleanArr;
};

//TEST CODE
assertArraysEqual(without([1,2,3],[1]),[2,3]);
assertArraysEqual(without([1, 2, 3], [1]),[2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]); // => ["1", "2"]
// assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false
