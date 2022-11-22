const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {

  it("returns the tail of the array [3]", () => {
    assert.deepEqual(tail([2, 3]), [3]);
  });

  it("returns the tail ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

  it("does not return the tail", () => {
    assert.notDeepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4]);
  });

  it("returns the tail of the array [2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

});