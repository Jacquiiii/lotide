const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(eqArrays([6, 9], [1, 2, 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS