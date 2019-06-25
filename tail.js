const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr = []) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
};

console.log(tail([1,2,3]));
console.log(tail([3,2,1]));
console.log(tail(["yes","no","maybe",5,6,7]));
console.log(tail());
console.log(tail([]));
console.log(tail([2]));

assertEqual(tail([1,2,3]).join(),[2,3].join());