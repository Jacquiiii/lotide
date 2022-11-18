// Helper function
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// Project function: Function that should take in a collection of items and return counts for a specific subset of those items.
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


// Test code
// allItems = first names; itemsToCount = result1
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); // true
assertEqual(result1["Karima"], undefined); // true
assertEqual(result1["Fang"], 2); // true
assertEqual(result1["Agouhanna"], undefined); // true