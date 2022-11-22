const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {

  it("returns false if arrays are not equal", () => {
    assert.deepEqual(eqArrays([6, 9], [1, 2, 3]), false);
  });

  it("returns true if arrays are equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true if arrays are equal", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false if arrays not are equal", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns true if arrays are equal", () => {
    assert.notDeepEqual(eqArrays(["1", "2", "3"], ["1", "2"]), true);
  });

});