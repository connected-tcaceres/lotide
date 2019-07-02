const findKeyByValue = require('../index').findKeyByValue;
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('returns true for eqArrays([1, 2, 3], [1, 2, 3]', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns false for eqArrays([1, 2, 3], [3, 2, 1]', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});