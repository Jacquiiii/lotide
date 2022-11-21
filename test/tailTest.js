// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); 
// assertEqual(words.length, 3); 

// let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());



const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns undefined for 2", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

});