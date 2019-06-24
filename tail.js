const assertEqual = function(actual,expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr = []) {
  if(arr.length > 1) {
    return arr.slice(1);
  } else {
    return undefined;
  }
};

console.log(tail([1,2,3]));
console.log(tail([3,2,1]));
console.log(tail(["yes","no","maybe",5,6,7]));
console.log(tail());
console.log(tail([]));

assertEqual(tail([1,2,3]).join(),[2,3].join());