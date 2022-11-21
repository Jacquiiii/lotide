const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe("#countLetters", () => {

  it("confirm string 'helLo' has 1 'e'", () => {
    assert.equal(countLetters('helLo').e, 1);
  });

  it("confirm string 'Victoria' has 2 'i'", () => {
    assert.equal(countLetters("Victoria").i, 2);
  });

  it("confirm string 'LHL' has 2 'l'", () => {
    assert.equal(countLetters('LHL').l, 2);
  });

});