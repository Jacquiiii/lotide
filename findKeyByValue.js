// Helper function
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// Project function: Function to search for a key on an object where its value matches a given value
const findKeyByValue = (obj, value) => {
  let keys = Object.keys(obj);

  for (let key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
};


// Test code
const person = {
  name: "Jacqui",
  age: 32,
};

const animals = {
  farm: "pig",
  jungle: "leopard",
  house: "dog"
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(animals, "pig")); // <-- farm
console.log(findKeyByValue(person, 32)); // <-- age
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")); // <-- comedy

assertEqual(findKeyByValue(animals, "pig"), "farm");
assertEqual(findKeyByValue(person, 32), "age");