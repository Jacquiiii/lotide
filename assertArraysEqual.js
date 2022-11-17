// Function that compares two values and returns a passed or failure message if the values are equal or not
const eqArrays = (arr1, arr2) => {
  for (let index in arr1) 
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length) {
      return false;
    }
  return true;
};



// Similar function to the above but it outputs a full sentence
const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1,arr2) ? console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};


// Test code
console.log(assertArraysEqual(eqArrays([6, 9], [1, 2, 3]), 8));
console.log(assertArraysEqual([6, 9], [1, 2, 3], 6));

console.log(eqArrays([6, 9], [1, 2, 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true