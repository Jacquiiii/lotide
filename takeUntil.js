// Function that takes items from the beginning of an array and puts them into a new array until the callback function = true
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


module.exports = takeUntil;