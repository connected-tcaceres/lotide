const countOnly = require('../index').countOnly;
const assert = require('chai').assert;

result1 = countOnly([
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
], { "Jason": true, "Karima": true, "Fang": true });

describe("#count only", () => {

  it('array [1, 2, [3, 4], 5, [6]] equals [1,2,3,4,5,6]', () => {
    assert.equal(result1["Jason"], 1);
  });

  it('array [1, 2, [3, 4], "5", [6]] equals [1,2,3,4,"5",6]', () => {
    assert.equal(result1["Karima"], undefined);
  });

  it('array [[1, 2], [3, 4], 5, [6]] equals [1,2,3,4,5,6]', () => {
    assert.equal(result1["Fang"], 2);
  });

});