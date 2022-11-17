// Helper function
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// Project function: function to calculate the smallest number in an array and return undefined if not an array or empty array
const min = numbers => {
  let smallest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    } else if (!Array.isArray(numbers) || numbers.length === 0) {
      return undefined;
    }
  }
  return smallest;
};


// Test code
const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs ${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);

const groceryPrices = [];
console.log(min(groceryPrices));

const coffeePrices = 5;
console.log(min(coffeePrices));

assertEqual(min([-1, 3, 0, -4, 1, 4, -2]), -4);
assertEqual(min([232]), 232);