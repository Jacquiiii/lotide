// Function that takes in a collection of items and return counts for a specific subset of those items
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;