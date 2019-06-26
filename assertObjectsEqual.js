const eqObjects = function(object1, object2) {
  let keysObj1 = Object.keys(object1).sort();
  let keysObj2 = Object.keys(object2).sort();

  if(keysObj1.length !== keysObj2.length){
    return false;
  } else {
    for(const key of keysObj1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if(!eqArrays(object1[key],object2[key])){
          return false;
        }
      }
      else if(object1[key] !== object2[key]){
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect; // <-- util library
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:1,b:2},{a:1,b:2});
assertObjectsEqual({a:1,b:2},{a:1,b:1});