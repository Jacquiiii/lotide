const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns undefined for 2", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

});