const eqArrays = require('./eqArrays');

// Function that outputs an assertion if the arrays are equal or not
const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1,arr2)
    ? console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;