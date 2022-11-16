// Function that compares two values and returns a passed or failure message if the values are equal or not
const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// Function to take a sentence (as a string) and then return a count of each of the letters in that sentence

let countLetters = input => {

  input = input.toLowerCase();
  let newStr = input.split(' ').join('');
  let result = {};
  let output = '';
  
  for (let val of newStr) {
    if (result[val]) {
      result[val] += 1;
    } else {
      result[val] = 1;
    }
  }

  for (let i in result) {
    if (output === "") {
      output = `${i}: ${result[i]}`;
    } else {
      output += `, ${i}: ${result[i]}`;
    }
    
  }
  // 'Return output' is to output a string of the object to use assert equal. Change this to 'return result' to output the object.
  return output;
};

// Test code
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), 'l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1');