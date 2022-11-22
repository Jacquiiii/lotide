const assert = require('chai').assert;
const findKey = require('../findKey');


describe("#findKey", () => {

  const data = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("returns 'noma' as the first key with 2 stars is 'noma'", () => {
    assert.strictEqual(findKey(data, x => x.stars === 2), "noma");
  });

  it("returns undefined as 5 does not exist in stars", () => {
    assert.strictEqual(findKey(data, x => x.stars === 5), undefined);
  });

});
