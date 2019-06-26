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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("").split("");
  
  for (let i =0;i<sentence.length;i++) {
    if(!results[sentence[i]]){
      //create as array
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i); 
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e,[1]);