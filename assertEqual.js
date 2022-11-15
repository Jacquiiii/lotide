// Function that compares two values and returns a passed or failure message if the values are equal or not

const assertEqual = (actual, expected) => {
  actual === expected ? console.log("✅✅✅✅ Assertion Passed: " + actual + " === " + expected) : console.log("🛑🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);