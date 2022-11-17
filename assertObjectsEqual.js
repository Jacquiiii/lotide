// Helper functions
const eqArrays = (arr1, arr2) => {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

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


// Project function: Similar function to the above but it outputs a full sentence
const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;

  eqObjects(object1, object2) ? console.log(`✅✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);

};


// Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);

