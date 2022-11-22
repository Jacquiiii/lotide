const assert = require('chai').assert;
const without = require('../without');


describe("#without", () => {

  it("confirms only the items not found in the second array are returned", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5], [1, 5]), [2, 3, 4]);
  });

  it("confirms only the items not found in the second array are returned", () => {
    assert.deepEqual(without(['1', 2, 3], [2]), ['1', 3]);
  });

  it("confirms only the items not found in the second array are returned", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it("confirms the original array was not modified", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});