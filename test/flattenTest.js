const assert = require('chai').assert;
const flatten = require('../flatten');


describe("#flatten", () => {

  it("returns a flattened array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns an empty array", () => {
    assert.deepEqual(flatten([]), []); 
  });

});