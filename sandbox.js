// Helper functions
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};



// Function compares two objects to check if they are exactly the same
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // Confirms if objects both contain same amount of keys
    return false; // returns false if object key length !same
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //checks if true that both keys contain arrays
      if (!eqArrays(object1[key], object2[key])) { //uses helper function eqArrays to see if key arrays are the same
        return false; // return false if key arrays !same
      }
    } else if (object1[key] !== object2[key]) { //compares object keys primitives to see if the same
      return false; // return false if key primitives !same
    }
  }
  
  return true; // return true if no falsey statements above, objects are identical
};


// Test code
const ab = { a: "1", b: "2" };
const jb = { j: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(ab, jb)); // => false
console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, jb), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);