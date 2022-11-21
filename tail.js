// Function that returns all items in an array except the first one
const tail = (arr) => {
  let endElement = arr.length;

  if (arr.length >= 1) {
    let tailElements = arr.slice(1, endElement);
    return tailElements;
  } else {
    return undefined;
  }
};

module.exports = tail;
