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
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  assertObjectsEqual : assertObjectsEqual,
  countLetters : countLetters,
  countOnly : countOnly,
  eqArrays : eqArrays,
  eqObjects: eqObjects,
  findKey : findKey,
  findKeyByValue : findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map : map,
  takeUntil : takeUntil,
  without : without
};