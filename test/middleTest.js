const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["dog", 2, "cat", "pig", 5, 6, 7, "deer"]), ['pig', 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
assertArraysEqual(middle(["dog", "cat", "dog"]), ["cat"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, "pig", 5, 6, 7]), ["pig"]);
assertArraysEqual(middle(["dog"]), []);
assertArraysEqual(middle(["dog", "cat"]), []);