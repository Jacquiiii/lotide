// Function that compares two values and returns a passed or failure message if the values are equal or not
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// Function that compares two arrays and outputs true if matching and false if not
const eqArrays = (arr1, arr2) => {

  let outcome = false;

  for (let i in arr1) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length){
      outcome = false;
    } else {
      outcome = true;
    }
  }

  console.log(outcome);
};


// Test code
eqArrays([6, 9], [1, 2, 3]); // => false
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

