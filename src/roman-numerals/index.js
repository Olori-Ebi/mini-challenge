/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let roman_obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  const roman_array = roman.split("");
  return roman_array.reduce((acc, val, index) => {
    if (
      (roman_array[index] == "I" && roman_array[index + 1] == "V") ||
      (roman_array[index] == "I" && roman_array[index + 1] == "X")
    ) {
      roman_obj["I"] = -1;
    } else {
      roman_obj["I"] = 1;
    }
    if (
      (roman_array[index] == "X" && roman_array[index + 1] == "C") ||
      (roman_array[index] == "X" && roman_array[index + 1] == "L")
    ) {
      roman_obj["X"] = -10;
    } else {
      roman_obj["X"] = 10;
    }
    if (
      (roman_array[index] == "C" && roman_array[index + 1] == "D") ||
      (roman_array[index] == "C" && roman_array[index + 1] == "M")
    ) {
      roman_obj["C"] = -100;
    } else {
      roman_obj["C"] = 100;
    }
    sum += roman_obj[roman_array[index]];
    return sum;
  }, 0);
}
module.exports = romanToDecimal;
