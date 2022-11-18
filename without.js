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
  let newArr = [];

  for (let x = 0; x < source.length; x++) {
    let remove = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        remove = true;
      }
    }
    if (remove === false) {
      newArr.push(source[x]);
    }
  }
  console.log(newArr);
};



// Test code for without function
without([1, 2, 3], [1]); // => [2, 3]
without(["1", 2, 3], [2]); // => ["1", 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["dog", "cat", "pig", "cow"], ["dog", "cow"]); // => ["cat", "pig"]


// Test code to ensure original array was not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


