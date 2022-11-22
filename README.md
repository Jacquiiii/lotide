# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jacquikoroll/lotide`

**Require it:**

`const _ = require('@jacquikoroll/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first item in an array
* `tail`: Returns all items in an array with the first item removed
* `middle`: Returns the middle item(s) in an array
* `countLetters`: Returns a count of each letter in a string
* `countOnly`: Takes in a collection of items and return counts for a specific subset of those items
* `eqArrays`: Compares two arrays, returning true if they are matching and false if not
* `eqObjects`: Compares two objects, returning true if they are matching and false if not
* `findKey`: Takes in an object and a callback function, and returns the first key in the object for which the callback returns a truthy value
* `findKeyByValue`: Takes in an object and a value, and returns a specific key in the object that matches the value
* `letterPositions`: Takes in a string and returns an object where each letter is a key and each letter's index is the corresponding value
* `map`: Takes in an array and a callback function, and returns a new array based on the results of the callback function
* `minimumValues`: Returns the smallest number in an array
* `takeUntil`: Takes in an array and a callback function, and returns a new array with all items starting from the index 0 until the callback function returns true
* `without`: Returns a subset of a given array, removing unwanted elements