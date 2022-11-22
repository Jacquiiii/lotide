const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns ['pig', 5] for ['dog', 2, 'cat', 'pig', 5, 6, 7, 'deer']", () => {
    assert.deepEqual(middle(["dog", 2, "cat", "pig", 5, 6, 7, "deer"]), ["pig", 5]); 
  });

  it("returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); 
  });

  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); 
  });

  it("returns [] for ['dog']", () => {
    assert.deepEqual(middle(["dog"]), []); 
  });

  it("returns [] for ['dog', 'cat']", () => {
    assert.deepEqual(middle(["dog", "cat"]), []); 
  });

});