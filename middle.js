//Function that returns the middle value of an array
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

module.exports = middle;