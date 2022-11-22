const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {

  const person = {
    name: "Jacqui",
    age: 42,
  };
  
  const animals = {
    farm: "pig",
    jungle: "leopard",
    house: "dog"
  };

  it("confirms the key for 'pig' is 'farm'", () => {
    assert.strictEqual(findKeyByValue(animals, "pig"), "farm");
  });

  it("confirms the age for person is 42", () => {
    assert.strictEqual(findKeyByValue(person, 42), "age");
  });

});
