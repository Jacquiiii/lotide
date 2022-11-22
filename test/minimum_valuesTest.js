const assert = require('chai').assert;
const min = require('../minimum_values');


describe("#minimum_values", () => {

  it("produces the minimum value in the array which is -4", () => {
    assert.deepEqual(min([-1, 3, 0, -4, 1, 4, -2]), -4);
  });

  it("produces the only value in the array which is 232", () => {
    assert.deepEqual(min([232]), 232);
  });

  it("produces the minimum value in the array which is 0", () => {
    assert.deepEqual(min([0, 27, 46, 101]), 0);
  });

  it("does not produce the minimum value", () => {
    assert.notDeepEqual(min([232, 245, 987]), 987);
  });

});
