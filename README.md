# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @realtylercaceres/lotide`

**Require it:**

`const _ = require('@galeontiger/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: determines if arrays are equal
* `assertEqual()`: determines if strings are equal
* `assertObjectsEqual()`: determines if objects are equal
* `countLetters()`: determines letter count of an object
* `countOnly()`: determines number of times a value occurs in an array, returns an object
* `eqArrays()`: determines if arrays are equal, returns boolean
* `eqObjects()`: determines if objects are equal, returns boolean
* `findKey(object, callback)`: returns object key that matches the callback functions key finding function
* `findKeyByValue(object, value)`: returns key given a value
* `flatten(array)`: returns a flattened 1-dimensional array
* `head(array)`: returns the first element of an input array
* `letterPositions(string)`: takes in a sentence and returns an object with the indexes of every letter in the sentece
* `map(array, callback)`: takes in an array, parse through every index of the array with the callback function, and returns a new array with the items filtered by the callback
* `middle(array)`: returns the item of the middle index from the input array, if there are an even number of items in the array, it will return the middle two items
* `tail(array)`: return every item from the input array except for the first item
* `takeUntil(array, callback)`: takes in an array and return new array filtered by the callback
* `without(sourceArray, removeArray)`: takes in `sourceArray` and output the array without the items indicated on the `removeArray`