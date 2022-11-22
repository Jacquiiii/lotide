// Function that will return a subset of a given array, removing unwanted elements
const without = (source, itemsToRemove) => {
  let result = [];

  for (let x of source) {
    let remove = false;
    for (let y of itemsToRemove) {
      if (x === y) {
        remove = true;
      }
    }
    if (!remove) {
      result.push(x);
    }
  }
  return result;
};


module.exports = without;