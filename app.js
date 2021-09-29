// function series(n) {
//     let sum = 0
//     if (n===0) {
//         return n.toFixed(2)
//     }
//     if (n===1) {
//         return n.toFixed(2)
//     }
//     for (let i=0; i<n; i++) {
//             sum += (1/((3*i) + 1));
//             count++;
//         }
//     return sum.toFixed(2).toString();
// }

// console.log(series(10));

// function count(n) {
//     if (n===1) return [1]
//     let numbers = count(n-1);
//     numbers.push(n);
//     return numbers
// }

// console.log(count(5));

// function range(startNum, endNum) {
//     if(startNum == endNum) return [startNum];
//     let numbers = range(startNum, endNum-1);
//     numbers.push(endNum);
//     return numbers
// }

// console.log(range(2,5));

// function union(...array) {
//     return array.reduce((arr, arr1) => {
//         const new_array = arr.filter(item => !arr1.includes(item));
//         return arr1.concat(new_array)
//     })
// }

// console.log(union([5, 10, 15], [15, 1, 88]));

// function intersection (...array) {
//     return array.reduce((arr1, arr2) => {
//         const intersect = arr1.filter(item => arr2.includes(item));
//         return intersect
//     })
// }

// console.log(intersection([5, 10, 15], [15, 1, 88]));

// function objOfMatches(array1, array2, callback) {
//     return array2.reduce((arr, val, index) => {
//         val === callback(array1[index]) ? arr[array1[index]] = val : null;
//         return arr
//     },[])
// }

// function upperCase(word) {
//     return word.toUpperCase();
// }

// console.log(objOfMatches(['hi', 'howdy', 'bye'], ['HI', 'HOWDY', 'bye'], upperCase));

// function countBy(array, callback) {
//     return array.reduce((obj, val) => {
//         let result = callback(val);
//         obj[result] ? obj[result] += 1 : obj[result] =1;
//         return obj
//     }, {})
// }

// function isOdd(num) {
//     return num % 2 === 1 ? 'odd' : 'even'
// }

// console.log(countBy([1,2,3,4,5], isOdd));

// const cities = {
//     London: 'LONDON',
//     LA : 'Los Angeles',
//     Paris: 'PARIS'
// }

// function objectFilter(Obj, callback) {
//     const newObj = {};
//     for (let [key, value] of Object.entries(Obj)) {
//         callback(key) === value ? newObj[key] = value : null;
//     }
//     return newObj
// }

// function upperCase(word) {
//     return word.toUpperCase()
// }

// console.log(objectFilter(cities, upperCase));

// function countOdd(array, callback) {
//     let trueCount = [];
//     let falseCount = [];
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]) ? trueCount.push(array[i]) : falseCount.push(array[i]);
//     }
//     return trueCount.length > falseCount.length ? true : false;
// }

// function isOdd(num) {
//     return num % 2 === 1;
// }

// console.log(countOdd([1,2,3,5,7,8,10], isOdd));

// function prioritize (array, callback) {
//     return array.reduce((arr, val) => {
//         callback(val) ? arr.unshift(val) : arr.push(val);
//         return arr;
//     }, [])
// }
// function startWithS (word) {
//     return word[0] == 's' || word[0] == 'S'
// }

// console.log(prioritize(['arrow', 'beans', 'solemn', 'song'], startWithS));

// function groupBy(array, callback) {
//     return array.reduce((obj, val) => {
//         let result = callback(val);
//         obj[result] = array.filter(arr => Math.floor(arr)=== result);
//         return obj
//     }, {})
// }

// function floored (num) {
//     return parseInt(num)
// }

// console.log(groupBy([1.2, 1.4, 2.1, 2.7, 3.2, 3.6], floored));

// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n);
// const hasSix = n => n.toString().includes(6);

// function rating (array, value) {
//     let trueCount = array.reduce((acc, fn) => {
//         fn(value) ? acc ++ : null;
//         return acc
//     }, 0);
//     return trueCount/array.length * 100 + '%'
// }

// console.log(rating([isEven, greaterThanFour, hasSix, isSquare], 256));

// function maximum (array) {
//     let max = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max;
// }

// console.log(maximum([10,21,3,4,5]));

// function minimum (array) {
//     let min = Number.POSITIVE_INFINITY;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] < min) {
//             min = array[i]
//         }
//     }
//     return min;
// }

// console.log(minimum([10,21,3,4,5]));

// function fibonacci (num) {
//     if(num == 1) return [0];
//     else if (num === 2) return [0,1];
//     let fib = fibonacci(num - 1);
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     return fib;
// }

// console.log(fibonacci(5));

function trib(array, n) {}

console.log(trib([1, 1, 1], 10));

// function Palindrome(words) {
//     let nonPalindrome = [];
//     for (let index = 0; index < words.length; index++) {
//         const isPalindrome = checkIfPalindrome(words[index])
//         if(!isPalindrome) {
//             nonPalindrome.push(words[index])
//         }

//     }
//     return nonPalindrome;
// }

// function checkIfPalindrome(word) {
//     return word.toLowerCase().split('').reverse().join('') === word.toLowerCase();
// }

// console.log(Palindrome(['madam','orange', 'pathology', 'Eye']))

// function brackets(string) {
//     // create an object and assign the closing brackets as keys to the opening brackets
//     const obj = { '}':'{', ')':'(', ']':'['};
//     // create an empty array to store opening brackets whenever we see one
//     const array_of_obj = [];
//     // loop through
//     for (let char in string) {
//         console.log(`char`, char)
//         // if item is opening bracket, add to our array
//         if (Object.values(obj).includes(string[char])) {
//             array_of_obj.push(string[char])
//         } else {
//             let close_bracket = obj[string[char]]
//             let last_element = array_of_obj.pop();
//             if (close_bracket !== last_element) {
//                 return 'invalid'
//             }
//         }
//     }
//     return array_of_obj.length === 0 ? 'valid' : 'invalid'
// }

// console.log(brackets('{{{{{{{{{{{{]}}}}}}}}}}}()[]'))

// function transpose(array) {
//     const transpose = [];
//     const rowCount = array.length;
//     columnCount = array[0].length;

//     for (let column = 0; column < columnCount; column++) {
//       const newRow = []
//       for (let row = 0; row < rowCount; row++) {
//         newRow.push(array[row][column])
//       }
//       transpose.push(newRow)
//     }
//     return transpose
// }

// console.log(transpose([ [1, 7, 9],
//   [2, 3, 5]]));

// function romanToDecimal(roman) {
//   let roman_obj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   return roman.split("").reverse().reduce((total, romanStr, index, arr ) => {
//     console.log(arr);
//     const decodedValue = roman_obj[romanStr];
//     console.log(decodedValue);
//     const pairValue = roman_obj[arr[index-1]] || 0;
//     console.log(pairValue);
//   }, 0)
// }

// console.log(romanToDecimal('XXIV'));

/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
// function romanToDecimal(roman) {
//   let roman_obj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let sum = 0;
//   const roman_array = roman.split("");
//   return roman_array.reduce((acc, val, index) => {
//     if (
//       (roman_array[index] == "I" && roman_array[index + 1] == "V") ||
//       (roman_array[index] == "I" && roman_array[index + 1] == "X")
//     ) {
//       roman_obj["I"] = -1;
//     } else {
//         roman_obj["I"] = 1;
//     }
//     if (
//       (roman_array[index] == "X" && roman_array[index + 1] == "C") ||
//       (roman_array[index] == "X" && roman_array[index + 1] == "L")
//     ) {
//       roman_obj["X"] = -10;
//     } else {
//         roman_obj["X"] = 10;
//     }
//     if (
//       (roman_array[index] == "C" && roman_array[index + 1] == "D") ||
//       (roman_array[index] == "C" && roman_array[index + 1] == "M")
//     ) {
//       roman_obj["C"] = -100;
//     } else {
//         roman_obj["C"] = 100;
//     }
//     sum += roman_obj[roman_array[index]];
//     return sum;
//   }, 0);
// }

// console.log(romanToDecimal("II"));

function morse(text) {
  const MORSE_CODE = {
    "-.-.--": "!",
    ".-..-.": '"',
    "...-..-": "$",
    ".-...": "&",
    ".----.": "'",
    "-.--.": "(",
    "-.--.-": ")",
    ".-.-.": "+",
    "--..--": ",",
    "-....-": "-",
    ".-.-.-": ".",
    "-..-.": "/",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    "..--..": "?",
    ".--.-.": "@",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "..--.-": "_",
    "...---...": "SOS",
  };

  Object.freeze(MORSE_CODE);

  // let newMorse = text.trim();
  // let morsecode = newMorse;
  const morse = [];
  newMorseCode = text.trim().split("   ");
  for (let index = 0; index < newMorseCode.length; index++) {
    const element = newMorseCode[index];
    char = element.split(" ");
    morse.push(char);
  }
  const chars = [];
  for (let i = 0; i < morse.length; i++) {
    for (let j = 0; j < morse[i].length; j++) {
      chars.push(MORSE_CODE[morse[i][j]]);
      if (j === morse[i].length - 1) {
        chars.push(" ");
      }
    }
  }
  return chars.join("").trim().replace(/,/g, "");
}

console.log(morse(". ."));

// function binaryReversal(value) {
//     let binary_value = value.toString(2);
//     const myArray = convertToArray(binary_value)
//     console.log(myArray);
//     while(myArray.length < 8) {
//         myArray.unshift("0")
//     }
//     console.log(myArray);
//     const new_binary_value = (myArray.reverse().join(""));
//     console.log(new_binary_value);
//     const binary_str = parseInt(new_binary_value, 2).toString();
//     console.log(`${binary_str}`);
//     return binary_str
// }

// function convertToArray(value) {
//     return value.split("").map((num) => {
//         return Number(num)
//     })
// }

// console.log(binaryReversal(10));

// function listSorting(needle, haystack) {
//     let found = "";
//     if (haystack.length === 0) return -1;
//     if (Array.isArray(haystack[0])) {
//         for (let index = 0; index < haystack.length; index++) {
//             for (let secondIndex = 0; secondIndex < haystack[index].length; secondIndex++) {
//                 if (haystack[index][secondIndex] === needle) {
//                     found = [index, secondIndex]
//                 }
//             }
//         }
//         if (found === "") return -1
//     }
//     else {
//         for (let index = 0; index < haystack.length; index++) {
//             const element = haystack[index];
//             if (element === needle) {
//                 found = index
//             }
//         }
//         if (found === "") return -1
//     }
//     return found
//   }

//   console.log(listSorting(5, [1, 2, 3, 4, 5]));

// function arrayTarget(array, target) {
//     for (let index = 0; index < array.length; index++) {
//         for (let secondIndex = 0; secondIndex < array.length; secondIndex++) {
//             if((array[index] + array[secondIndex]) === target) {
//                 return [index, secondIndex]
//             }
//         }
//     }
// }
// console.log(arrayTarget([1,3,2,5,6], 7));

// function capitalize(str) {
//     const str_array = str.split(" ")
//     for (let index = 0; index < str_array.length; index++) {
//         console.log(str_array[index].length);
//         str_array[index] = str_array[index].charAt(0).toUpperCase() + str_array[index].slice(1)
//     }
//     return str_array.join(" ")
// }

// console.log(capitalize('i am a boy'));

// function anagram(word, anag) {
//     if(word.length != anag.length) return false
//     let word_arr = word.split("");
//     const sorted = word_arr.sort((a,b) =>{
//         return a < b ? -1 : 1
//     });

//     let anag_arr = anag.split("");
//     const anaged = anag_arr.sort((a,b) =>{
//         return a < b ? -1 : 1
//     });

//     return sorted.join("") === anaged.join('') ? 'is anagram' : 'is not anagram'
// }

// console.log(anagram('hello world', 'world hello'));

// function rottenTomatoes(array) {
//     let rotten = [];
//     let fresh = [];
//     for (let index = 0; index < array.length; index++) {
//         for (let secondIndex = 0; secondIndex < array[0].length; secondIndex++) {
//             if (array[index][secondIndex] == 1) {
//                 fresh.push(" " + index + secondIndex)
//             } else if (array[index][secondIndex] == 2) {
//                 rotten.push("  " + index + secondIndex)
//             }
//         }
//     }
//     let minutes = 0;
//     let directions = [[0,1], [1,0], [-1,0], [0,-1]];
//     while (fresh.length > 0) {
//         let infected = [];
//         for (let s in rotten) {
//             let index = s.charAt(0) - '0';
//             let secondIndex = s.charAt(1) - '0';
//             for (let direction in directions) {
//                 let nextIndex = direction[0];
//                 let nextSecondIndex = direction[1];
//                 if (fresh.includes(" " + nextIndex + nextSecondIndex)) {
//                     fresh.
//                 }
//             }
//         }
//     }
// }

// console.log([[2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1],]);

// function wordSearch(words, word) {
//     let n = words.length;
//     if (n === 0) return 0;
//     let m = words[0].length;

//     for (let index = 0; index < n; index++) {
//         for (let secondIndex = 0; secondIndex < m; secondIndex++) {
//             if (words[index][secondIndex] === word.charAt(0) && dfs(words, index, secondIndex, 0, word)) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// function dfs(words, index, secondIndex, count, word) {
//     if (count === word.length) {
//         return true;
//     }
//     if(index < 0 || secondIndex < 0 || index >= words.length || secondIndex >= words[index].length || words[index][secondIndex] != word.charAt(count)) {
//         return false
//     }
//     // let temp = words[index][secondIndex];
//     words[index][secondIndex] = "";
//     let found = dfs(words, index - 1, secondIndex, count + 1, word) || dfs(words, index + 1, secondIndex, count + 1, word) || dfs(words, index, secondIndex - 1, count + 1, word) || dfs(words, index, secondIndex + 1, count + 1, word)
//     // words[index][secondIndex] = temp;
//     return found;
// }

// console.log(wordSearch([
//     ["C", "A", "Y", "C", "X"],
//       ["O", "N", "A", "Z", "X"],
//       ["T", "F", "D", "A", "T"],
//       ["M", "D", "B", "U", "T"],
//   ], 'CAN'));

// function countIsland(array) {
//     let count = 0;
//     let n = array.length;
//     if (n === 0) return 0;
//     let m = array[0].length;

//     // go through the entire and sink when we find one
//     for (let index = 0; index < n; index++) {
//         for (let secondIndex = 0; secondIndex < m; secondIndex++) {
//             if (array[index][secondIndex] == '1') {
//                 sink (array, index, secondIndex);
//                 count++
//             }
//         }
//     }
//     return count
// }

// function sink (array, index, secondIndex) {
//     // If we are out of bounds or on a '0', then no need to search
//     if (index < 0 || secondIndex < 0 || index >= array.length || secondIndex >= array[0].length || array[index][secondIndex] != '1') {
//         return
//     }
//     // ensure we don't come across the island again
//     array[index][secondIndex] = '0';

//     // All the possible paths we can search
//     sink(array, index + 1, secondIndex)
//     sink(array, index - 1, secondIndex)
//     sink(array, index, secondIndex + 1)
//     sink(array, index, secondIndex - 1)
// }

// console.log(countIsland([
//       [1, 1, 0, 0, 0],
//       [0, 1, 0, 0, 1],
//       [1, 0, 0, 1, 1],
//       [0, 0, 0, 0, 0],
//       [1, 0, 1, 0, 1],
//   ]));

// console.log(Array.from({length:4}));
// console.log(Array.from(Array(4)));

// function solution(str){
//   let str_arr = str.split("")
//   let array = [];
//    if(str.length % 2 === 0) {
//      for (let index = 0; index < str_arr.length; index+=2) {
//       array.push(str_arr.slice(index,index+2).join(''));
//      }
//    } else {
//       str_arr.push("_");
//       for (let index = 0; index < str_arr.length; index+=2) {
//         array.push(str_arr.slice(index,index+2).join(''));
//       }
//    }
//    return array
// }

// console.log(solution('abc'));

// console.log("no     de".split("    "));

// const array_of_obj = [
//     {
//         name: "Oluwole",
//         age: 26,
//         stack: "Node JS",
//         squad: "008"
//     },
//     {
//         name: "Abiola",
//         age: 29,
//         stack: "Node JS",
//         squad: "006"
//     },
//     {
//         name: "Dre",
//         age: 35,
//         stack: "Android",
//         squad: "007"
//     },
//     {
//         name: "Eyiyemi",
//         age: 25,
//         stack: "Node JS",
//         squad: "008"
//     },
//     {
//         name: "Folahanmi",
//         age: 21,
//         stack: "IOS",
//         squad: "008"
//     },
//     {
//         name: "Babalola",
//         age: 23,
//         stack: ".NET",
//         squad: "008"
//     },
// ];

// // 1. Map (true or false for Adult key)

// array_of_obj.map((arr, index, array) => {
//     arr.age > 28 ? arr["adult"] = true : arr["adult"] = false
//     console.log(arr);
// })
// console.log (array_of_obj)

// // 2. Filter an array
// const filtered = array_of_obj.filter((arr, index) => arr.squad === '008');
// console.log(filtered);

// // 3. Delete an object;
// array_of_obj.map((arr, index) => {
//     arr.squad == "008" ? delete arr.squad : null;
//     console.log(arr);
// })

// // 4 Sort an array
// array_of_obj.sort((a, b) => {
//     let keyA = a.name,
//       keyB = b.name;
//     // Compare the names
//     return keyA < keyB ? -1 : keyA == keyB ? 0 : 1 ;
//   });

//   console.log(array_of_obj);

//   // 5 Find
//   const found = array_of_obj.find(arr => arr.name == 'Oluwole');
//   console.log(found);

//   // 6. FindIndex
//   const foundIndex = array_of_obj.findIndex(arr => arr.name == 'Oluwole');
//   console.log(foundIndex);

//   // 7. Every;

//   const array = [[0,1,1,1,0], [1,0,0,1,1]];
//   const isBelowZero = (currentValue) => currentValue > -1;
//   let result = [];

// for (let index = 0; index < array.length; index++) {
//     for (let secondIndex = 0; secondIndex < array[0].length; secondIndex++) {
//         result.push(array[index][secondIndex])
//     }
// }
// console.log(result.every(isBelowZero));

// // 8. Some
// const arraySome = [[0,1,1,1,0], [1,0,0,1,1]];
// const isBelowZeroSome = (currentValue) => currentValue > 3;
// let resultSome = [];

// for (let index = 0; index < arraySome.length; index++) {
//   for (let secondIndex = 0; secondIndex < arraySome[0].length; secondIndex++) {
//       resultSome.push(arraySome[index][secondIndex])
//   }
// }
// console.log(resultSome.some(isBelowZeroSome));

// // 9. Some
// const arrayIncludes = [[0,1,1,1,3], [1,0,0,1,1]];
// let resultIncludes = [];

// for (let index = 0; index < arrayIncludes.length; index++) {
//   for (let secondIndex = 0; secondIndex < arrayIncludes[0].length; secondIndex++) {
//       resultIncludes.push(arrayIncludes[index][secondIndex])
//   }
// }
// console.log(resultIncludes.includes(3));

function removeDuplicates(obj) {
  const keys = Object.keys(obj)
    .map((a) => Number(a))
    .sort((a, b) => b - a);
  const uniqueObj = {};
  const allSeen = [];

  for (const key of keys) {
    const values = obj[key];
    console.log(values);
    const newArray = [];

    for (const letter of values) {
      console.log(letter);
      if (!allSeen.includes(letter)) {
        newArray.push(letter);
        allSeen.push(letter);
      }
    }
    console.log(newArray);
    console.log(allSeen);
    uniqueObj[key] = newArray;
  }
  return uniqueObj;
}

console.log(
  removeDuplicates({
    1: ["C", "F", "G"],
    2: ["A", "B", "C"],
    3: ["A", "B", "D"],
  })
);

// function isEvenOdd(array) {
//   return array.map((arr) =>
//     Array.isArray(arr)
//       ? `array length is ${arr.length}`
//       : typeof arr == "string"
//       ? arr.length
//       : typeof arr == "number"
//       ? arr / 20
//       : typeof arr == "object"
//       ? "value is null"
//       : typeof arr == "bigint"
//       ? arr * 5n
//       : "null"
//   );
// }

// console.log(isEvenOdd([200, "John Doe", 3n, null, [2, 3, 4]]));

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// // Map for all Names
// function arrayNames(array) {
//     return array.map(arr => arr.name)
// }

// // Map for all Heights
// function arrayHeight(array) {
//     return array.map(arr => arr.height)
// }

// // Map for all Names and Height
// function arrayNameHeight (array) {
//     return array.map((arr)=>{
//         return {'name': arr.name, 'height': arr.height}
//     })
// }

// Map for all First Names
// function arrayNames (array) {
//     return array.map((arr) => {
//         return {'name': arr.name}
//     })
// }

// // Reduce Mass
// function reduceMass (array) {
//     return array.reduce((acc, value) => {
//         acc += parseInt(value.mass);
//         return acc
//     }, 0)
// }

// // Reduce Height
// function reduceHeight (array) {
//     return array.reduce((acc, value) => {
//         return acc += parseInt(value.height);
//     }, 0)
// }

// // Reduce character names
// function reduceHeight (array) {
//     return array.reduce((acc, obj) => {
//         return acc += obj.name.length
//     }, 0)
// }

// // Reduce character names
// function reduceHeight (array) {
//     return array.reduce((acc, obj) => {
//         return acc += obj.eye_color.length
//     }, 0)
// }

// // Filter
// function filterMass(array) {
//     const filtered = array.filter((arr => arr.mass > +'100'))
//     return filtered
// }

// // Filter
// function filterMass(array) {
//     const filtered = array.filter((arr => arr.mass < +'200'))
//     return filtered
// }

// // Filter
// function filterMass(array) {
//     const filtered = array.filter((arr => arr.gender === 'male'))
//     return filtered
// }

// // Filter
// function filterMass(array) {
//     const filtered = array.filter((arr => arr.gender === 'female'))
//     return filtered
// }

// // Sort
// function sorted (array) {
//     return array.sort((a, b) => a.name < b.name ? -1 : 1)
// }

// // Sort
// function sorted (array) {
//     return array.sort((a, b) => +a.mass < +b.mass ? -1 : 1)
// }

// // Sort
// function sorted (array) {
//     return array.sort((a, b) => +a.height < +b.height ? -1 : 1)
// }

// // Sort
// function sorted (array) {
//     return array.sort((a, b) => a.gender < b.gender ? -1 : 1)
// }

// // Every

// const isBlueEyes = (currentValue) => currentValue.eye_color === 'blue';
// function everyfunc (array) {
//     return array.every(isBlueEyes)
// }

// // Every
// const isGreaterThan40 = (currentValue) => +currentValue.mass > 40;
// function everyfunc (array) {
//     return array.every(isGreaterThan40)
// }

// // Every
// const isShorterThan200 = (currentValue) => +currentValue.height < 200;
// function everyfunc (array) {
//     return array.every(isShorterThan200)
// }

// // Every
// const isMale = (currentValue) => +currentValue.gender == 'male';
// function everyfunc (array) {
//     return array.every(isMale)
// }

// console.log(everyfunc(characters));

// // Some

// const isGenderMale = (currentValue) => currentValue.gender === 'male';
// function somefunc (array) {
//     return array.some(isGenderMale)
// }

// // Some

// function somefunc (array) {
//     return array.some((arr) => +arr.height > 200)
// }
// console.log(somefunc(characters));
// const isTaller = (currentValue) => +currentValue.height > 200;
// function somefunc (array) {
//     return array.some(isTaller)
// }

// Some
// const isMass = (currentValue) => +currentValue.mass < 50;
// function somefunc (array) {
//     return array.some(isMass)
// }

// console.log(somefunc(characters));

// function uniqueWhatever(str) {
//     return str.split("").every( (character, index, arr) => {
//         console.log(arr.slice(index+1));
//         return !arr.slice(index+1).includes(character);
//     })
// }

// console.log(uniqueWhatever("Abc"))

// function removeDups(array) {
//     let newArr = [];
//     for (let index = 0; index < array.length; index++) {
//         if(!newArr.includes(array[index])){
//             newArr.push(array[index])
//         }
//     }
//     let seun = [...newArr];
//     while (seun.length < array.length) {
//         seun.push('_')
//     }
//     return [seun, newArr.length]
// }

// console.log(removeDups([0,0,1,1,1,2,2,3,3,4]));

// function encoder (str) {
//     let str_arr = str.split("");
//     let newArr = []
//     str_arr.forEach((element, index) => {
//         if (str_arr[index] === " ") {
//             str_arr[index] = "."
//         }
//        newArr.push(str_arr[index].charCodeAt().toString(2));

//     });
//     return newArr;
// }

// console.log(encoder('Fola is a chief node'))

// function decoder (bin) {
//     const newArr = [];
//     bin.forEach((elem, index) => {
//         if (bin[index] === '.') {
//             bin[index] = ' '
//         }
//         let binarr = (parseInt(elem, 2));
//         // console.log(binarr);
//         let ascii = (String.fromCharCode(binarr));
//         newArr.push(ascii)
//     })
//     return newArr.join("").replace(/["."]/g, " ")
// }

// console.log(decoder([ '1000110',
// '1101111',
// '1101100',
// '1100001',
// '101110',
// '1101001',
// '1110011',
// '101110',
// '1100001',
// '101110',
// '1100011',
// '1101000',
// '1101001',
// '1100101',
// '1100110',
// '101110',
// '1101110',
// '1101111',
// '1100100',
// '1100101' ] ));

// const input = [
//     {
//       name: 'Hendrick',
//       dob: '1853-07-18T00:00:00.000Z',
//       regNo: '041',
//     },
//     {
//       name: 'Albert',
//       dob: '1879-03-14T00:00:00.000Z',
//       regNo: '033',
//     },
//     {
//       name: 'Marie',
//       dob: '1867-11-07T00:00:00.000Z',
//       regNo: '024',
//     },
//     {
//       name: 'Neils',
//       dob: '1885-10-07T00:00:00.000Z',
//       regNo: '02',
//     },
//     {
//       name: 'Max',
//       dob: '1858-04-23T00:00:00.000Z',
//       regNo: '014',
//     },
//     {
//       name: 'Erwin',
//       dob: '1887-08-12T00:00:00.000Z',
//       regNo: '09',
//     },
//     {
//       name: 'Auguste',
//       dob: '1884-01-28T00:00:00.000Z',
//       regNo: '08',
//     },
//     {
//       name: 'Karl',
//       dob: '1901-12-05T00:00:00.000Z',
//       regNo: '120',
//     },
//     {
//       name: 'Louis', //
//       dob: '1892-08-15T00:00:00.000Z',
//       regNo: '022',
//     },
//     {
//       name: 'Arthur',
//       dob: '1892-09-10T00:00:00.000Z',
//       regNo: '321',
//     },
//     {
//       name: 'Paul',
//       dob: '1902-08-08T00:00:00.000Z',
//       regNo: '055',
//     },
//     {
//       name: 'William',
//       dob: '1890-03-31T00:00:00.000Z',
//       regNo: '013',
//     },
//     {
//       name: 'Owen',
//       dob: '1879-04-26T00:00:00.000Z',
//       regNo: '052',
//     },
//     {
//       name: 'Martin',
//       dob: '1871-02-15T00:00:00.000Z',
//       regNo: '063',
//     },
//     {
//       name: 'Guye',
//       dob: '1866-10-15T00:00:00.000Z',
//       regNo: '084',
//     },
//     {
//       name: 'Charles',
//       dob: '1868-02-14T00:00:00.000Z',
//       regNo: '091',
//     },
//   ];

//check if the length of latestGroup === 3
// array.push ( [currentStudent])
//continue
//check if the length of latestGroup == 0
//push the current student into latestGroup
//continue;
//else
//get the last element in latestGroup
//if  ( currentStudent.age -  last_element ) <= 5
// push currentStudent into latestgroup
// continue
//else
// array.push( [currentStudent]);
//continue

//   function classifier(input) {
//     input.map((item, index) =>{
//         return item["age"] = new Date().getFullYear() - +item.dob.slice(0,4)
//     })
//     const sorted = input.sort((a,b) => {
//        return a.age - b.age
//     })

//     const array = [ [] ];
//     for (let i = 0; i < sorted.length; i++) {
//         let latestGroup = array[ array.length -  1];
//         let currentStudent = sorted[i];

//         if( latestGroup.length === 3){
//             array.push( [currentStudent] );
//         }
//         //check for empty group
//         else if( latestGroup.length === 0){
//             latestGroup.push(currentStudent);
//         } else {
//             let lastStudent = latestGroup[ latestGroup.length - 1];
//             //check the age difference
//             if( currentStudent.age - lastStudent.age <= 5){
//                 latestGroup.push(currentStudent)
//             } else {
//                 array.push([currentStudent])
//             }
//         }
//     }
//     return array.reduce((obj, arr, index, array) => {
//         console.log(array);
//         // console.log(arr);
//         obj["noOfGroups"] = array.length;
//         obj[`group${index+1}`] = {};
//         const newObj = array[index].map(arr => {
//             return {"name": arr.name, "age":arr.age}
//         })
//         obj[`group${index+1}`].members = array[index]
//         let sum = 0;
//         let max = Number.NEGATIVE_INFINITY;
//         array[index].forEach(arr => sum += arr.age)
//         array[index].forEach(arr => {
//             if(arr.age > max) {
//                 max = arr.age;
//                 return max
//             }
//         })
//         const reg = array[index].reduce((arr, val, index) => {
//             arr.push(+(val.regNo));
//             return arr
//         }, [])
//         obj[`group${index+1}`].sum = sum
//         obj[`group${index+1}`].oldest = max
//         obj[`group${index+1}`].regNos = reg
//         return obj
//     }, {})
//   }

//   console.log(classifier(input));

//Solution 1
// function atmWithdrawal(amount) {
//     let noOf50s = (amount / 50) | 0;
//     let remainderAfterTaking50s = amount - 50 * noOf50s;
//     if (remainderAfterTaking50s % 20 !== 0) {
//       remainderAfterTaking50s += 50;
//       noOf50s--;
//     }
//     const noOf20s = remainderAfterTaking50s / 20;
//     const noOf100s = (noOf50s / 2) | 0;
//     noOf50s = noOf50s % 2;
//     return [noOf100s, noOf50s, noOf20s];
//   }

//   //Solution 2
//   const withdraw = (amount) => {
//     let amountCopy = amount;
//     let count = 0;
//     let array = [];
//     while (amountCopy % 50) {
//       count++;
//       amountCopy -= 20;
//     }
//     let twentyDoll = count;
//     let hundredDoll = Math.floor((amount - twentyDoll * 20) / 100);
//     let fiftyDoll = Math.floor(
//       (amount - (twentyDoll * 20 + hundredDoll * 100)) / 50
//     );
//     array.push(hundredDoll, fiftyDoll, twentyDoll);
//     return array;
//   };

//   //Solution 3
//   const withdraw = (amount) => {
//     const remainderMod20 = amount % 20;
//     amount = amount / 20 - remainderMod20 / 4;
//     return [(amount / 5) | 0, remainderMod20 % 3, amount % 5];
//   };

// function binarySearch(array, target) {
//   let startIndex = 0;
//   let endIndex = array.length - 1;

//   while (startIndex <= endIndex) {
//     let middleIndex = Math.floor((startIndex + endIndex) / 2);
//     if (target === array[middleIndex]) {
//       console.log(`target found at ${middleIndex}`);
//       return true;
//     }
//     if (target > array[middleIndex]) {
//       console.log("searching the right side of the array");
//       startIndex = middleIndex + 1;
//     }
//     if (target < array[middleIndex]) {
//       console.log("searching the left side of the array");
//       endIndex = middleIndex - 1;
//     }
//   }
//   return false;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));

// function iqTest(numbers){
//   // ...
//   let count = 0;
//   let oddCount = 0;
//   let evenElem;
//   let oddElem;
//   const num_array = numbers.split(" ");
//   console.log(num_array);
//   for (let index = 0; index < num_array.length; index++) {
//     const element = +num_array[index];
//     if (element % 2 === 0) {
//       count++;
//       evenElem = index + 1
//     } else {
//       oddCount++;
//       oddElem = index+1;
//     }
//   }
//   if(count == 1) {
//     return evenElem;
//   } else if(oddCount == 1) {
//     return oddElem
//   }

// }

// console.log(iqTest("2 4 7 8 10") );

function chunk(array, num) {
  if (array.length <= num) return array;
  let newArr = [];
  const spliced = array.splice(0, num);
  newArr.push(spliced, array);
  return newArr;
}

console.log(chunk([1, 2, 3, 4], 2));
