const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {

  it("confirm letter 'e' is found in index 1", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("confirm letter 'g' is found in index 2", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").g, [2]);
  });

});
