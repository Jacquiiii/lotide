// Function to take each letter and put them into keys in a new object with their index as the value
const letterPositions = sentence => {
  const results = {};
  let x = 0;

  for (let i of sentence) {
    if (i === ' ') {
      x++;
    } else if (results[i]) {
      results[i].push(x);
      x++;
    } else {
      results[i] = [x];
      x++;
    }
  }
  return results;
};

module.exports = letterPositions;
