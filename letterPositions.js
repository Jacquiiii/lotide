// Function that compares two values and returns a passed or failure message if the values are equal or not
const eqArrays = (arr1, arr2) => {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};


// Similar function to the above but it outputs a full sentence
const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1,arr2) ? console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};


// Function to take each letter and put them into keys in a new object with their index as the value
const letterPositions = sentence => {
  const results = {};
  let x = 0;

  for (let i of sentence) {

    if (i === ' ') {
      x++;
    } else if (results[i]) {
      results[i].push(x);
      x++;
    } else {
      results[i] = [x];
      x++;
    }

  }
  
  return results;

};


// Test code
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

