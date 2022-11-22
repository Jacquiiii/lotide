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

  const movies = {
    horror: "The Ring",
    fantasy: "Lord of the Rings",
    comedy: "Anchorman",
    kids: "Barny the Movie",
    romcom: "Bridesmaids"
  }

  it("confirms the key for 'pig' is 'farm'", () => {
    assert.strictEqual(findKeyByValue(animals, "pig"), "farm");
  });

  it("confirms the key for 42 is 'age'", () => {
    assert.strictEqual(findKeyByValue(person, 42), "age");
  });

  it("confirms the key for 'Anchorman' is 'comedy'", () => {
    assert.strictEqual(findKeyByValue(movies, "Anchorman"), "comedy");
  });

  it("confirms the key for 'The Ring' is not 'comedy'", () => {
    assert.notStrictEqual(findKeyByValue(movies, "The Ring"), "comedy");
  });

});
