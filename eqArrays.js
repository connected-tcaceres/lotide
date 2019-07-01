const eqArrays = function(arr1,arr2) {
  // console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]){
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else {

        return false;
      }
    }
  }

  return true;
};

module.exports = eqArrays;

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false