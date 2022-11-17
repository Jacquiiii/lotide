// Helper functions
const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// Project function: Function to take a sentence (as a string) and then return a count of each of the letters in that sentence
let countLetters = input => {

  input = input.toLowerCase();
  let newStr = input.split(' ').join('');
  let result = {};

  for (let val of newStr) {
    if (result[val]) {
      result[val] += 1;
    } else {
      result[val] = 1;
    }
  }
  return result;
};


// Test code
assertEqual(countLetters("helLo").e, 1);
assertEqual(countLetters("Victoria").i, 2);
assertEqual(countLetters('LHL').l, 2);