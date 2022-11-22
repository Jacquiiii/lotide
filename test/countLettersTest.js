const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe("#countLetters", () => {

  it("confirms string 'helLo' has 1 'e'", () => {
    assert.strictEqual(countLetters('helLo').e, 1);
  });

  it("confirms string 'Victoria' has 2 'i'", () => {
    assert.strictEqual(countLetters("Victoria").i, 2);
  });

  it("confirms string 'LHL' has 2 'l'", () => {
    assert.strictEqual(countLetters('LHL').l, 2);
  });

  it("confirms string 'Victoria' does not have 6 'i'", () => {
    assert.notStrictEqual(countLetters("Victoria").i, 6);
  });

});