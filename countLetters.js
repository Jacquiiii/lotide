// Function to take a sentence (as a string) and then return a count of each of the letters in that sentence
let countLetters = input => {

  input = input.toLowerCase();
  let newStr = input.split(' ').join('');
  let result = {};

  for (let val of newStr) {
    if (result[val]) {
      result[val] += 1;
    } else {
      result[val] = 1;
    }
  }
  return result;
};


module.exports = countLetters;