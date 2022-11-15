// Function that compares two values and returns a passed or failure message if the values are equal or not
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Function that returns the first element in an array if there is at least one and returns undefined if not
const head = (arr) => {

  if (arr.length >= 1) {
    let firstElement = arr.shift(1);
    return firstElement;
  } else {
    return undefined;
  }

};

// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 5);
assertEqual(head([]), undefined);