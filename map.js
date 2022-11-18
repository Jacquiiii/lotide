// Helper functions
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1,arr2)
    ? console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};


const words = ["ground", "control", "to", "major", "tom"];
const animals = ["pig", "cow", "cat"];
const variety = [1, 2, 3, 4, 5];


//Project function: Function to loop through array and print a new array of only the first letter
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// Test code
const results1 = map(words, word => word[0]);
console.log(results1);
console.log(map(animals, animal => animal.toUpperCase()));
console.log(map(variety, value => value + 2));

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(animals, animal => animal.toUpperCase()), [ 'PIG', 'COW', 'CAT' ]);
assertArraysEqual(map(variety, value => value + 2), [ 3, 4, 5, 6, 7 ]);