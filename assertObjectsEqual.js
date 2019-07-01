const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect; // <-- util library
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({a:1,b:2},{a:1,b:2});
assertObjectsEqual({a:1,b:2},{a:1,b:1});