// // function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
// //     const obj = {};
// //     let pair_sum = 0
// //     if (noOfWashes === 0) {
// //         for (let index = 0; index < cleanPile.length; index++) {
// //             const element = cleanPile[index];
// //             obj[element] ? obj[element] += 1 : obj[element] = 1;
// //         }
// //         console.log(obj);

// //         for(let key in obj) {
// //             if (obj[key] >= 2) {
// //                 pair_sum += +obj[key];
// //         }
// //     }
// //     console.log(pair_sum/2 | 0 );
// //     const maxPair = (pair_sum/2 | 0 );
// //     return maxPair
// // }

// // if (noOfWashes > 0) {
// //     // let pair_sum = 0
// //     for (let index = 0; index < cleanPile.length; index++) {
// //         const element = cleanPile[index];
// //         obj[element] ? obj[element] += 1 : obj[element] = 1;
// //     }
// //     console.log(obj);

// //     for(let key in obj) {
// //         if (obj[key] % 2 !== 0) {
// //             let splicedArray = []
// //           if(noOfWashes > 0) {
// //             if(dirtyPile.includes(+key)) {
// //                 const getDirtyIndex = dirtyPile.findIndex(element => element == key);
// //                 console.log(getDirtyIndex);
// //                 const spliced = dirtyPile.splice(getDirtyIndex, 1);
// //                 splicedArray.push(spliced);
// //                 noOfWashes--
// //             }
// //             obj[key]+=splicedArray.length
// //             console.log(obj);
// //           }

// //         }
// //     }
// //     console.log(obj);
// //     for (let key in obj) {
// //         pair_sum += +obj[key]
// //     }
// //     console.log(pair_sum/2);
// // }
// // }
// // console.log(getMaxPairs(1, [1,1, 1, 2, 2, 1, 1, 3, 4], [1, 2, 2, 1, 3, 4, 5, 2]))

// // function packArray(array) {
// //   console.log(array);
// //   let newArray = [[]];
// //   let arrayForSum = [];
// //   let arrayForProduct = [];
// //   for (let index = 0; index < array.length; index++) {
// //     let lastArray = newArray[newArray.length - 1];
// //     let currentItem = array[index];
// //     if (lastArray.length == 2) {
// //       newArray.push([currentItem]);
// //     } else if (lastArray.length < 2) {
// //       lastArray.push(currentItem);
// //     }
// //   }
// //   console.log(newArray);
// //   for (let index = 0; index < newArray.length; index++) {
// //     const element = newArray[index];
// //     console.log(element);
// //     let sumArray = element.reduce((acc, val) => acc + val, 0);
// //     console.log(sumArray);
// //     arrayForSum.push(sumArray);
// //   }
// //   let generalArray = [[]];
// //   for (let index = 0; index < arrayForSum.length; index++) {
// //     let lastArray = generalArray[generalArray.length - 1];
// //     let currentItem = arrayForSum[index];
// //     if (lastArray.length == 2) {
// //       generalArray.push([currentItem]);
// //     } else if (lastArray.length < 2) {
// //       lastArray.push(currentItem);
// //     }
// //   }
// //   console.log(generalArray);
// //   for (let index = 0; index < generalArray.length; index++) {
// //     const element = generalArray[index];
// //     console.log(element);
// //     let productArray = element.reduce((acc, val) => acc * val, 1);
// //     arrayForProduct.push(productArray);
// //   }
// //   console.log(arrayForProduct);
// //   let finalSum = arrayForProduct.reduce((acc, val) => acc + val, 0);
// //   return finalSum;

// //   let answer = array.slice();
// //   let lastOperation = "null";
// //   while (answer.length > 1) {
// //     let response = [];
// //     if (lastOperation === "null") {
// //       for (let index = 0; index < answer.length - 1; index += 2) {
// //         response.push(answer[index] + answer[index + 1]);
// //       }
// //       answer = response;
// //     } else {
// //       for (let index = 0; index < answer.length - 1; index += 2) {
// //         response.push(answer[index] * answer[index + 1]);
// //       }
// //       answer = response;
// //     }
// //     lastOperation = lastOperation == "null" ? "add" : "null";
// //   }
// //   console.log(answer[0]);
// // }

// // console.log(packArray([1, 2, 3, 4, 5, 6, 7, 8]));

const possibilities = (signals) => {
    const dico = {
      ".": "E",
      "..": "I",
      "...": "S",
      "..-": "U",
      ".-": "A",
      ".-.": "R",
      ".--": "W",
      "-": "T",
      "-.": "N",
      "--": "M",
      "-..": "D",
      "-.-": "K",
      "--.": "G",
      "---": "O",
    };
    let ans = [];
    if (dico.hasOwnProperty(signals)) {
      ans = [dico[signals]];
    } else {
      const signalsWithLength = Object.entries(dico).filter(
        (arr) => arr[0].length == signals.length
      );
      console.log(signalsWithLength);
      const filtered = signalsWithLength.filter((arr) =>
        Array.from(arr[0]).every((char, index) =>
          signals[index] == "?" ? true : signals[index] === char
        )
      );
      console.log(filtered);
      ans = filtered.map((arr) => arr[1]);
    }
    return ans;
  };

  console.log(possibilities('?-?'));