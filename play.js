// function factorial(num) {
//     let result = 1;
//     for (let index = 1; index < num; index++) {
//         result *= index
//         if (result === num) return `${index}!`;

//     }
//     return 'not a factorial property'
// }

// console.log(factorial(6));

// function withdrawal(num) {
//     for (let index = 100; index >= 0; index--) {
//         for (let secondIndex = 0; secondIndex < num; secondIndex++) {
//             for (let thirdIndex = 0; thirdIndex < num; thirdIndex++) {
//                 if ((index * 100) + (secondIndex * 50) + (thirdIndex * 20) === num) return [index, secondIndex, thirdIndex]
//             }
//         }
//     }
// }
// console.time('starting')
// console.log(withdrawal(40));
// console.timeEnd('starting')

// function revrot(str_num, shift_num) {
//     let sum = 0;
//     for (let index = 0; index < str_num.length; index++) {
//         sum += Math.pow(+str_num[index], 3)
//     }
//     if (sum % 2 === 0) {

//     }
// }

// revrot("123456987654", 6)

// const sentence = 'Fola is a chief node';

// function encoder(sentence) {
//     return Array.from(sentence).map(letter => {
//         if (letter === " ") {
//             return "."
//          }
//          return letter.charCodeAt(0).toString(2) + "-"
//     }).join(" ")
// }

// function encoder (sentence) {
//     return [...sentence].reduce((encodedString, letter) => {
//         if (letter === " ") {
//             return encodedString + " . "
//         }
//         return encodedString + letter.charCodeAt(0).toString(2) + " "
//     }, "")
// }

// console.log(encoder(sentence));

// const encodedString = decoder(sentence)

// function decoder (binaryString) {
//     return binaryString.
// }

// function positions(array, index, offset) {
//         let spliced = array.splice(index, 1);
//         array.splice(offset, 0, spliced);
//         console.log(array.flat());
// }

// console.log(positions([1,2,3,4], 0, 2));

// function arrayPacking(integerArray) {
//     const strValue = integerArray.reduceRight((strValue, integer) => {
//         const binaryvalue = integer.toString(2).padStart(8, '0');
//         console.log(binaryvalue);
//         return strValue + binaryvalue;
//     }, "")
//     return parseInt(strValue, 2)
// }

// console.log(arrayPacking([24, 85, 0]));
import csvToJson from "csvtojson";
csvToJson()
  .fromFile("sample.csv")
  .then((sample) => {
    const re_email = /^([a-zA-Z0-9_\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const filtered = sample.filter((samp) => re_email.test(samp.Emails));
    const domains = filtered.map((dom) => dom.Emails.split("@")[1]);
    const domainArr = Array.from(new Set(domains));
    const objPair = {};
    for (let index = 0; index < domains.length; index++) {
      if (objPair[domains[index]]) {
        objPair[domains[index]] += 1;
      } else {
        objPair[domains[index]] = 1;
      }
    }
    const resultObj = {};
    resultObj["valid-domains"] = domainArr;
    resultObj["totalEmailsParsed"] = sample.length;
    resultObj["totalValidEmails"] = filtered.length;
    resultObj["categories"] = objPair;

    console.log(resultObj);
  })
  .catch((err) => {
    // log error if any
    console.log(err);
  });
// const filtered = array.reduce((array, val) => {
//   return validate(val).then(data => {
//     console.log(data);
//     if (data.isValidDomain) {

//     }

//   })
// }, [])
// console.log(filtered);
// array.filter(arr => {
//   return validate(arr)
// }).then(data => {
//   console.log(data);
//   let valid_array = [];
//   if(data.isValidDomain) {
//     console.log(arr);
//     valid_array.push(arr)
//   }
// }
// )
// console.log(filtered);

// writeStream.write('' + filtered.join('\n'));

// import csvToJson from "csvtojson";

// csvToJson()
//   .fromFile("sample.csv")
//   .then((sample) => {
//     const re_email = /^([a-zA-Z0-9_\+]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/;
//     const filtered = sample.filter((samp) => re_email.test(samp.Emails));
//     console.log(filtered);
//     const domains = filtered.map((dom) => dom.Emails);
//     console.log(domains);

//     const writeStream = fs.createWriteStream('data.csv');

//     writeStream.write(`Emails \n`);

//     writeStream.write('[ "' + brands.join('","') + '" ]\n');
//   })
//   .catch((err) => {
//     // log error if any
//     console.log(err);
//   });

function ordinal(num) {
  if (num === 0) return 0;
  if (num.toString().length === 1) {
    if (num === 1) return num + "st";
    if (num === 2) return num + "nd";
    if (num === 3) return num + "rd";
    if (num > 3) return num + "th";
  }
  const num_sliced = num.toString().slice(-2);
  console.log(num_sliced[0]);
  if (num_sliced[0] >= 0 && num_sliced[1] == 1) return `${num}st`;
  if (num_sliced[0] >= 0 && num_sliced[1] == 2) return `${num}nd`;
  if (num_sliced[0] >= 0 && num_sliced[1] == 3) return `${num}rd`;
  return `${num}th`;
  // if(num_sliced == '01') return `${num}st`;
  // if(num_sliced == '02') return `${num}nd`;
  // if(num_sliced == '03') return `${num}rd`;
  // return `${num}th`

  // if (num.toString().length === 2) {
  //     let num_str = num.toString()
  //     if(num>=10 && num<=20) return num + 'th'
  //     if(num_str[num_str.length-1] == 1) return num+'st'
  //     if(num_str[num_str.length-1] == 0) return num+'th'
  //     if(num_str[num_str.length-1] == 2) return num+'nd'
  //     if(num_str[num_str.length-1] == 3) return num+'rd'
  //     if(num_str[num_str.length-1] > 3 && num_str[num_str.length-1] <=9) return num+'th'
  // }

  // if (num.toString().length >= 3) {
  //     let num_str = num.toString()
  //     if(num_str[num_str.length-2] == 0 && num_str[num_str.length-1] == 1) return num+'st'
  //     if (num_str[num_str.length-2] == 0 && num_str[num_str.length-1] == 2) return num+'nd'
  //     if (num_str[num_str.length-2] == 0 && num_str[num_str.length-1] == 3) return num+'rd'
  //     if (num_str[num_str.length-2] == 0 && num_str[num_str.length-1] >= 4) return num+'th'
  //     if (num_str[num_str.length-2] == 1 && num_str[num_str.length-1] > 0) return num+'th'
  //     if(num_str[num_str.length-1] == 0) return num+'th'
  //     if(num_str[num_str.length-1] == 2) return num+'nd'
  //     if(num_str[num_str.length-1] == 3) return num+'rd'
  //     if(num_str[num_str.length-1] > 3 && num_str[num_str.length-1] <=9) return num+'th'

  // }
}

// console.log(ordinal(4));

// function expandedForm(num) {
//   const num_arr = num.split("");
//   num_arr.map((num, index, arr) => )
//   // return String(num)
//   //   .split("")
//   //   .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
//   //   .filter((num) => Number(num) != 0)
//   //   .join(" + ")
// }

// console.log(expandedForm('102'));

// const main = (numbers) => {
//   const arrayProduct = numbers.reduce((product, value) => product * value, 1);
//   console.log(arrayProduct);
//   return numbers.map((value) => arrayProduct / value);
// };

// console.log(main([2, 5, 3, 4, 5]));

// function peak(array) {
//   const newArr = [];
//   array.map((arr, i) => {
//     if (i === 0) {
//       if (array[i] > array[i + 1]) {
//         newArr.push(i);
//       }
//     }
//     if (i > 0) {
//       if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
//         newArr.push(i);
//       }
//     }
//   });
//   return newArr;
// }

// console.log(peak([1,2,1,3,5,6,4]));

// function longestSubstringWithoutDuplication(string) {
//   console.log(string.slice(2));
//   let out = "",
//     str = "";
//   let i = 0;
//   for (let char of string) {
//     str = char;
//     let j = i + 1;
//     while (!str.includes(string[j]) && j < string.length) {
//       str += string[j];
//       j++;
//     }
//     console.log(str);
//     if (str.length > out.length) {
//       out = str;
//     }
//     i++;
//   }
//   return out;
// }

// console.log(longestSubstringWithoutDuplication("clementisacap"));

// function getMissingNo(a, n) {

//   let total = Math.floor((n + 1) * (n + 2) / 2);
//   console.log(total);
//   for (let i = 0; i < n; i++)
//       total -= a[i];
//   return total;
// }

// console.log(getMissingNo([ 1, 2, 4, 5, 6 ], 5));

// function countPairs(array, target) {
//   const newArr = []
//   for (let index = 0; index < array.length; index++) {
//     for (let j = index + 1; j < array.length; j++) {
//       for (let k = j+1; k < array.length; k++) {
//         if(array[index] + array[j] + array[k] === target) {
//           newArr.push([array[index],array[j], array[k]])
//         }
//       }
//     }

//   }
//   return newArr
// }

// console.log(countPairs([ 1, 4, 45, 6, 10, 8 ], 22));

const parseHTMLColor = (color) => {
  let result = {
    r: 0,
    g: 0,
    b: 0,
  };
  if (!color.startsWith("#")) {
    color = PRESET_COLORS[color.toLowerCase()];
  }
  if (color.startsWith("#") && color.length == 4) {
    color =
      color[0] +
      color[1] +
      color[1] +
      color[2] +
      color[2] +
      color[3] +
      color[3];
  }

  result.r = parseInt(color.slice(1, 3), 16);
  result.g = parseInt(color.slice(3, 5), 16);
  result.b = parseInt(color.slice(5), 16);
  return result;
};

console.log(parseHTMLColor("#FFF"));

function findMissingLetter(letters) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
      return String.fromCharCode(letters[i].charCodeAt() + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

var singleNumber = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? (obj[nums[i]] += 1) : (obj[nums[i]] = 1);
  }
  const objEntries = Object.entries(obj);
  for (let i = 0; i < objEntries.length; i++) {
    if (objEntries[i][1] === 1) {
      return nums.indexOf(objEntries[i][0]);
    }
  }
  return -1;
};

console.log(singleNumber("aabbc"));

var removeDuplicates = function (nums) {
  return [...new Set(nums)];
};

console.log(removeDuplicates([1, 1, 2]));

var maxProfit = function (prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      total += prices[i + 1] - prices[i];
    }
  }
  return total;
};

console.log(maxProfit([7, 6, 4, 3, 1]));

var rotate = function (nums, k) {
  // while(k > 0) {
  //   const popped = nums.pop()
  //   nums.unshift(popped)
  //   k--
  // }
  // return nums
  if (nums.length > k) {
    nums.unshift(...nums.splice(-k));
  } else {
    let i = 0;
    while (i < k) {
      nums.unshift(nums.splice(-1));
      i++;
    }
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6], 3));

var containsDuplicate = function (nums) {
  return nums.length === Array.from(new Set(nums)).length ? false : true;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

var intersect = function (nums1, nums2) {
  const array = [];
  console.log(nums1.indexOf(2));
  for (let i = 0; i < nums1.length; i++) {
    while (nums2.includes(nums1[i])) {
      array.push(nums1[i]);
      // nums1.splice(i,1)
      nums2.splice(nums2.indexOf(nums1[i]), 1);
    }
  }
  console.log(array);
};

console.log(intersect([1, 2], [2, 1]));

var plusOne = function (digits) {
  // let dig = parseInt(digits.join("")) + 1
  // return dig.toString().split("").map(di => +di)
  var i = digits.length - 1;
  var val = 0;
  var carry = 1;
  while (i >= 0 && carry) {
    val = digits[i] + carry;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
  }
  if (carry) digits.unshift(carry);
  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs === null || strs.length === 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; // loop through all characters of the very first string.

    for (let j = 1; j < strs.length; j++) {
      // loop through all other strings in the array
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

const encryptThis = (str) => {
  const str_arr = str.split(" ");
  let res = "";
  for (let char of str_arr) {
    const first = char.charCodeAt(0);
    const second = char[char.length - 1];
    const secondToLast = char.slice(2, -1);
    const last = char[1];

    res += `${first}${second}${secondToLast}${last} `;
  }
  return res;
};

console.log(encryptThis("Hello world"));

// function bowlingPins(arr){
//   return [[7,8,9,10],[4,5,6],[2,3],[1]].map((row,i)=>' '.repeat(i)+row.map(n=>!arr.includes(n)?'I':' ').join(' ')+' '.repeat(i)).join('\n');
// }
function bowlingPins(arr) {
  const fields = [
    [7, " ", 8, " ", 9, " ", 10],
    [" ", 4, " ", 5, " ", 6, " "],
    [" ", " ", 2, " ", 3, " ", " "],
    [" ", " ", " ", 1, " ", " ", " "],
  ];

  return fields
    .map((field) => {
      return field
        .map((pin) => {
          if (typeof pin === "number") {
            console.log(pin);
            return arr.includes(pin) ? " " : "I";
          }
        })
        .join("");
    })
    .join("\n");
}

console.log(bowlingPins([2, 3]));

const charToScore = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function high(x) {
  const array = x.split(" ");
  console.log(array);
  const arrayOfScores = array.map((word) =>
    word.split("").reduce((score, char) => score + charToScore[char], 0)
  );
  console.log(arrayOfScores);
  const indexOfResult = arrayOfScores.indexOf(Math.max(...arrayOfScores));
  console.log(indexOfResult);
  return array[indexOfResult];
}

console.log(high("aa b"));

const removeDuplicateIds = (obj) => {
  const res = {};
  const ks = Object.keys(obj).sort((a, b) => b - a);
  console.log(ks);
  const seen = new Set();
  for (const k of ks) {
    res[k] = [];
    for (const v of obj[k]) {
      if (!seen.has(v)) {
        res[k].push(v);
        seen.add(v);
      }
    }
  }
  return res;
};

console.log(
  removeDuplicateIds({
    1: ["A", "B", "C"],
    2: ["A", "B", "D", "A"],
  })
);

function inArray(array1, array2) {
  return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);

// function lastSurvivors(str) {
//   const str_arr = str.split("");
//   for (let i = 0; i < str_arr.length; i++) {
//     str_arr.sort();
//     console.log(str_arr);
//     if (str_arr[i] === str_arr[i + 1]) {
//       if (str_arr[i] == "z") {
//         str_arr.push(String.fromCharCode(97));
//       } else {
//         str_arr.push(String.fromCharCode(str_arr[i].charCodeAt(0) + 1));
//       }
//       str_arr.splice(i, 2);
//       str_arr.sort();
//       console.log(str_arr);
//       i = -1;
//     }
//   }
//   return str_arr.join("");
// }

// console.log(
//   lastSurvivors(
//     "xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh"
//   )
// );

function findSpy(array) {
  const newArray = [];
  let start = array[0][0];
  newArray.push(start);
  console.log(start);
  let last = array[0][1];

  for (let i = 1; i < array.length; i++) {
    console.log(array[i]);
    if (array[i][0] === last) {
      // console.log(last);
      newArray.push(array[i][0]);
      last = array[i][1];
    }
  }
  console.log(newArray);
}
console.log(
  findSpy([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
  ])
);

const minimumSwaps = (ratings) => {
  let noOfSwaps = 0;
  let ratingRev = ratings.reverse();
  console.log(ratingRev);

  for (let i = 0; i < ratings.length; i++) {
    while (ratings[i] !== i + 1) {
      let temp = ratings[i];
      ratings[i] = ratings[temp - 1];
      ratings[temp - 1] = temp;
      console.log(ratings);
      noOfSwaps++;
    }
  }
  return noOfSwaps;
};

console.log(minimumSwaps([3, 1, 2, 4]));
