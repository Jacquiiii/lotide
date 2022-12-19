// Takes in an array where some elements may be nested arrays and flattens it
const flatten = (arr) => {
  let result = [];

  for (const value of arr) {

    if (Array.isArray(value)) {
      result = result.concat(flatten(value));
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));


module.exports = flatten;
