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

//TEST CODE
assertArraysEqual(middle([1]),[]);// => []
assertArraysEqual(middle([1, 2]),[]); // => []

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]