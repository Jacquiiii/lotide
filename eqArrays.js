// Function that compares two values and returns a passed or failure message if the values are equal or not

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const eqArrays = (arr1, arr2) => {

  if (arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index])) {
    console.log(true);
  } else {
    console.log(false);
  }

};

// Test code
eqArrays(["hello", 6, 9], [1, 2, 3]); // => false
eqArrays([1, 2, 3], [1, 2, 3]); // => true

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

