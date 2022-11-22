//Function to return the first key for which the callback returns a truthy value
const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};


module.exports = findKey;