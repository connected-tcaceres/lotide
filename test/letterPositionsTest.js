const letterPositions = require('../index').letterPositions;
const assert = require('chai').assert;

describe("#letter positions", () => {

  it('string "hello"["e"] returns [1]', () => {
    assert.deepEqual(letterPositions("hello").e,[1]);
  });

  it('string "lighthouse in the house"["l"] returns [0]', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").l, [0]);
  });

  it('string "lighthouse in the house"["h"] returns [3,5,15,18]', () => {
    assert.deepEqual(letterPositions("lighthouse house").h, [3,5,10]);
  });

});