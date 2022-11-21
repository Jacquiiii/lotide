const assertEqual = require('./assertEqual');


// Function that returns the first element in an array if there is at least one and returns undefined if not
const head = (arr) => {

  if (arr.length >= 1) {
    let firstElement = arr.shift(1);
    return firstElement;
  } else if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

};


// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(2), undefined);