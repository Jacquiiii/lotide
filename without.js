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


// Project function: function that will return a subset of a given array, removing unwanted elements
const without = (source, itemsToRemove) => {
  let result = [];

  for (let x = 0; x < source.length; x++) {
    let remove = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        remove = true;
      }
    }
    if (!remove) {
      result.push(source[x]);
    }
  }
  return result;
};



// Test code
console.log(without([1, 2, 3, 4, 5], [1, 5])); // => [2, 3, 4]
console.log(without(['1', 2, 3], [2])); // => ['1', 3]
console.log(without(['1', '2', '3'], [1, 2, '3'])); // => ['1', '2']
console.log(without(['dog', 'moose', 'cow', 'pig'], ['moose', 'pig'])); // => ['dog', 'cow']


// Test code to ensure original array was not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


