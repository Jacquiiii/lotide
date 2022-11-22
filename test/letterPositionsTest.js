const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {

  it("confirms letter 'e' is found at index 1", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("confirms letter 'g' is found at index 2", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").g, [2]);
  });

  it("confirms letter 'i' is found at index 4", () => {
    assert.deepEqual(letterPositions("testing 123").i, [4]);
  });

  it("confirms letter 'm' is not found at index 4", () => {
    assert.notDeepEqual(letterPositions("i am tired").m, [4]);
  });

});
