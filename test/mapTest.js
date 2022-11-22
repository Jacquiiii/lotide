const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];
  const animals = ["pig", "cow", "cat"];
  const variety = [1, 2, 3, 4, 5];
  const results1 = map(words, word => word[0]);

  it("confirms the result is a new array with only the first letter from each word in the words array", () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("confirms the result is a new array with all words in upper case", () => {
    assert.deepEqual(map(animals, animal => animal.toUpperCase()), [ 'PIG', 'COW', 'CAT' ]);
  });

  it("confirms the result is a new array with 2 added to each number", () => {
    assert.deepEqual(map(variety, value => value + 2), [3, 4, 5, 6, 7]);
  });

  it("confirms the result is not a new array with each number multiplied by 5", () => {
    assert.notDeepEqual(map(variety, value => value * 5), [3, 4, 5, 6, 7]);
  });

});
