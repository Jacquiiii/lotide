const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];
  const animals = ["pig", "cow", "cat"];
  const variety = [1, 2, 3, 4, 5];
  const results1 = map(words, word => word[0]);

  it("confirm the result is a new array with only the first letter from each word in the words array", () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("confirm the result is a new array with all words in upper case", () => {
    assert.deepEqual(map(animals, animal => animal.toUpperCase()), [ 'PIG', 'COW', 'CAT' ]);
  });

  it("confirm the result is a new array with 2 added to each number", () => {
    assert.deepEqual(map(variety, value => value + 2), [3, 4, 5, 6, 7]);
  });

});
