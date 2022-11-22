const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {

  const ab = { a: "1", b: "2" };
  const jb = { j: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const dc = { d: ["2", 3], c: "1" };

  it("returns true if objects are equal", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("returns false if objects are not equal", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("returns false if objects are not equal", () => {
    assert.deepEqual(eqObjects(ab, jb), false);
  });

  it("returns true if objects are equal", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("returns false if objects not are equal", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

});
