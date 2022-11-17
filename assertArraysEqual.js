// Helper function
const eqArrays = (arr1, arr2) => {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};


// Project function: Similar function to the above but it outputs a full sentence
const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1,arr2) ? console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};


// Test code
const ab = ['a', 'b'];
const ba = ['a', 'b'];
assertArraysEqual(ab,ba);
