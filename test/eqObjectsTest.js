const eqObjects = require('../index').eqObjects;
const assert = require('chai').assert;

describe("#eqObjects", () => {

  const abc = { a: "1", b: "2", c: "3" };
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it('returns true', () => {
    assert.equal(eqObjects(ab, ba),true);
  });

  it('returns true', () => {
    assert.equal(eqObjects(ab, abc),false);
  });

  it('returns false', () => {
    assert.equal(eqObjects(ab, abc),false);
  });

  it('returns true', () => {
    assert.equal(eqObjects(cd, dc),true);
  });

  it('returns true', () => {
    assert.equal(eqObjects(cd, dc),true);
  });

  it('returns false', () => {
    assert.equal(eqObjects(cd, cd2),false);
  });

  it('returns true', () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true);
  });

  it('returns false', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false);
  });

  it('returns false', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false);
  });

});