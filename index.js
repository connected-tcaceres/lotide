//index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};