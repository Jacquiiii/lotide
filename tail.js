// Helper function
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// Project function: Function that returns all items in an array except the first one
const tail = (arr) => {
  let endElement = arr.length;

  if (arr.length >= 1) {
    let tailElements = arr.slice(1, endElement);
    return tailElements;
  } else {
    return undefined;
  }
};


// Test code to check that tail returns all elements except the head
console.log(tail([1, 2, 3, 4, 5, 6]));
console.log(tail([1, 2, 3]));
console.log(tail([]));


// Test code to check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


// Additional test code
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());
