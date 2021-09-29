/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let func = [];
  let val = [];
  for (let j = 0; j < array[0].length; j++) {
    for (let i = 0; i < array.length; i++) {
      func.push(array[i][j]);
    }
  }
  while (func.length > 0) {
    val.push(func.splice(0, array.length));
  }
  return val;
}

module.exports = transpose;
