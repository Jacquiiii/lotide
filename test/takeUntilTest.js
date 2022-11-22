const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


describe("#takeUntil", () => {

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);

  const data3 = ["monkey", "tree", ",", 1, 2, 3];
  const results3 = takeUntil(data3, x => x === 3);
  console.log(results3);

  const data4 = [];
  const results4 = takeUntil(data4, x => x === 9);
  console.log(results4);

  it("confirms a new array is returned for all values that come before -1", () => {
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });

  it("confirms a new array is returned for all values that come before the comma", () => {
    assert.deepEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
  });

  it("confirms a new array is returned for all values that come before 3", () => {
    assert.deepEqual(results3, [ 'monkey', 'tree', ',', 1, 2 ]);
  });

  it("confirms an empty array is returned when no values are entered in the array", () => {
    assert.deepEqual(results4, []);
  });

});
