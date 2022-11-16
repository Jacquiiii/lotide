// Function that compares two values and returns a passed or failure message if the values are equal or not

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const eqArrays = (arr1, arr2) => {

  for (let i in arr1) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length){
      return false;
    }
  }

  return true;
};

// Test code
console.log(eqArrays([6, 9], [1, 2, 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

