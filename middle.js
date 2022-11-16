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



// Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// Plan:
//
//
//
//

const middle = array => {
  
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return [];
  }

  if (array.length % 2 !== 0) {
    let oddArr = [];
    oddArr.push(array[(array.length - 1) / 2]);
    return oddArr;
  } 

  if (array.length % 2 === 0) {
    let evenArr = [];
    evenArr.push(array[array.length / 2 - 1]);
    evenArr.push(array[array.length / 2]);
    return evenArr;
  }


};


// Test code
console.log(middle([1, 2, 3, 4, 5, 6]))
console.log(middle(["dog", 2, "cat", "pig", 5, 6, 7, "deer"]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(middle(["dog", "cat", "dog"]))
console.log(middle([1, 2, 3, 4, 5, 6, 7]))
console.log(middle([1, 2, 3, "pig", 5, 6, 7]))
console.log(middle(["dog"]))
console.log(middle(["dog", "cat"]))