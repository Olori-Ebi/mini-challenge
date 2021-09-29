const transpose = require("./");

describe("Transposed Array", () => {
  test("Testing with 2x2 array", () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];

    expect(transpose(arr)).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  test("Testing with 3x2 array", () => {
    const arr = [
      [1, 7, 9],
      [2, 3, 5],
    ];

    expect(transpose(arr)).toEqual([
      [1, 2],
      [7, 3],
      [9, 5],
    ]);
  });

  test("Testing with 4x4 array", () => {
    const array = [
      [9, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 7],
      [1, 3, 1, 5],
    ];

    expect(transpose(array)).toEqual([
      [9, 4, 8, 1],
      [1, 5, 9, 3],
      [2, 6, 10, 1],
      [3, 7, 7, 5],
    ]);
  });

  test("Testing with 5x1 array", () => {
    const array = [[1, 2, 3, 4, 5]];

    // prettier-ignore
    expect(transpose(array)).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5],
    ]);
  });

  test("Testing with 5x3 array", () => {
    const array = [
      [5, 12, 17, 9, 3],
      [13, 4, 8, 14, 1],
      [9, 6, 3, 7, 21],
    ];

    expect(transpose(array)).toEqual([
      [5, 13, 9],
      [12, 4, 6],
      [17, 8, 3],
      [9, 14, 7],
      [3, 1, 21],
    ]);
  });

  test("Testing with 6x6 array", () => {
    const array = [
      [-7, 12, 13, 0, 17, 21],
      [-1, 5, -2, 9, 11, 2],
      [5, -3, 12, 15, 13, 4],
      [9, 22, 13, 35, 1, 24],
      [11, 15, 4, 1, 8, -5],
      [2, 30, -4, 24, -5, 16],
    ];

    expect(transpose(array)).toEqual([
      [-7, -1, 5, 9, 11, 2],
      [12, 5, -3, 22, 15, 30],
      [13, -2, 12, 13, 4, -4],
      [0, 9, 15, 35, 1, 24],
      [17, 11, 13, 1, 8, -5],
      [21, 2, 4, 24, -5, 16],
    ]);
  });

  test("Testing with 9x9 array", () => {
    const array = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [11, 22, 33, 44, 55, 66, 77, 88, 99],
      [2, 4, 6, 8, 10, 12, 14, 16, 18],
      [1, 3, 5, 7, 9, 11, 13, 15, 17],
      [1, 1, 2, 3, 5, 8, 13, 21, 34],
      [2, 3, 5, 7, 11, 13, 17, 19, 23],
      [1, 4, 9, 16, 25, 36, 49, 64, 81],
      [3, 1, 4, 1, 5, 9, 2, 6, 5],
      [2, 7, 1, 8, 2, 8, 1, 8, 2],
    ];

    expect(transpose(array)).toEqual([
      [1, 11, 2, 1, 1, 2, 1, 3, 2],
      [2, 22, 4, 3, 1, 3, 4, 1, 7],
      [3, 33, 6, 5, 2, 5, 9, 4, 1],
      [4, 44, 8, 7, 3, 7, 16, 1, 8],
      [5, 55, 10, 9, 5, 11, 25, 5, 2],
      [6, 66, 12, 11, 8, 13, 36, 9, 8],
      [7, 77, 14, 13, 13, 17, 49, 2, 1],
      [8, 88, 16, 15, 21, 19, 64, 6, 8],
      [9, 99, 18, 17, 34, 23, 81, 5, 2],
    ]);
  });
});

/**
 * CSV Parser.  Takes a string as input and returns
 * an array of arrays (for each row).
 *
 * @param input String, CSV input
 * @param separator String, single character used to separate fields.
 *        Defaults to ","
 * @param quote String, single character used to quote non-simple fields.
 *        Defaults to "\"".
 */
