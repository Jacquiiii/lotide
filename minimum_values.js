// Function to calculate the smallest number in an array and return undefined if not an array or empty array
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


module.exports = min;