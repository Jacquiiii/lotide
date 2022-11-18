// Helper functions
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1,arr2)
    ? console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};


// Project function: Function that takes items from the beginning of an array and puts them into a new array until the callback function = true
const takeUntil = function(array, callback) {

  let newArr = [];

  for (let value of array) {
    if (!callback(value)) {
      newArr.push(value);
    } else {
      break;
    }
  }
  return newArr;
};


// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["monkey", "tree", ",", 1, 2, 3];
const results3 = takeUntil(data3, x => x === 3);
console.log(results3);

const data4 = [];
const results4 = takeUntil(data4, x => x === 9);
console.log(results4);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, [ 'monkey', 'tree', ',', 1, 2 ]);
assertArraysEqual(results4, []);
