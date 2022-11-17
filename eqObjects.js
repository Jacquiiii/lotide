// Helper functions
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => { //Check if two arrays are the same
  for (let index in arr1) { //
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};



// Function that compares two objects and returns true if they match or false if they don't
const eqObjects = (object1, object2) => {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        return true;
      } else {
        return false;
      }

    } else if (object1[key] !== object2[key]) {
      return false;
      
    } else {
      return true;
    }
  }

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




