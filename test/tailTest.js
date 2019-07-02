const tail = require('../index').tail;
const assert = require('chai').assert;

describe("#tail", () => {

  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });

  it("returns [2,1] for [3,2,1]", () => {
    assert.deepEqual(tail([3,2,1]), [2,1]);
  });
});