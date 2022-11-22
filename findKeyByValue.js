// Function to search for a key on an object where its value matches a given value
const findKeyByValue = (obj, value) => {
  let keys = Object.keys(obj);

  for (let key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
};


module.exports = findKeyByValue;