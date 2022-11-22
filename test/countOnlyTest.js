const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("confirms Jason appears once as they are set to true and are included in firstNames", () => {
    assert.equal(result1["Jason"], 1);
  });

  it("confirms undefined is returned for Karima as they do not appear in firstNames", () => {
    assert.equal(result1["Karima"], undefined);
  });

  it("confirms Fang appears twice as they are set to true and are included in firstNames", () => {
    assert.equal(result1["Fang"], 2);
  });

  it("confirms undefined is returned for Agouhanna as they are included in first names but set to false", () => {
    assert.equal(result1["Agouhanna"], undefined);
  });

});