class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    console.log(index);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    console.log(index);
    if (this.keyMap[index]) {
      console.log(this.keyMap[index]);
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    let index = this._hash(key);
    console.log(this.keyMap[index]);
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        // console.log(this.keyMap[i]);
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

const ht = new HashTable(17);

ht.set("maroon", "#800000");
ht.set("yellow", "#FFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("violet", "#DDA0DD");
console.log(ht.delete("olive"));
console.log(ht.get("plum"));
console.log(ht.values());
console.log(ht.keys());

// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. 
//Feel free to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
   this.maxSize = maxSize || 1;
    this.keyMap = new Array(maxSize);
    this.array = [];
    this.obj = {}
  }

  insertKeyValuePair(key, value) {
    // Write your code here.
    this.obj[key] = value;
    this.array.push(this.obj);
    console.log(this.array);
    // if(this.array.length === this.keyMap.length) {}
  }

  getValueFromKey(key) {
    // Write your code here.
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return null;
  }
getMostRecentKey() {
    // Write your code here.
    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        this.array.push(this.keyMap[i])
      }
    }
    const last_item = (this.array.shift())[0];
    return last_item[0]
  }
}

// Do not edit the line below.
let table = new LRUCache(3)
table.insertKeyValuePair('b', 2);
table.insertKeyValuePair('a', 1);
table.insertKeyValuePair('c', 3);
console.log(table.keyMap);
console.log(table.getMostRecentKey());
console.log(table.getValueFromKey('d'));
table.insertKeyValuePair('d', 4);
console.log(table.getValueFromKey('d'));
// function laptopRentals(times) {
//   if (times.flat().length === 0) return 0;
//   times.sort((a, b) => a[0] - b[0]);
//   const obj = [];
//   console.log(times);
//   for (let j of times) {
//     let val = obj.findIndex((x) => x <= j[0]);
//     if (val === -1) {
//       console.log(j);
//       obj.push(j[1]);
//     } else {
//       console.log(j);
//       obj.splice(val, 1, j[1])
//     }
//   }
//   obj
//   return obj.length;
// }

// console.log(
//   laptopRentals([
//     [0, 2],
//     [1, 4],
//     [4, 6],
//     [0, 4],
//     [7, 8],
//     [9, 11],
//     [3, 10],
//   ])
// );

// function capitalize(str) {
//     if(str.trim().length === 0) return false;
//     const str_arr = str.trim().split(" ").filter(str => str !== "")
//     console.log(str_arr);
//     const mapped = str_arr.map(str => str[0].toUpperCase()+str.slice(1))
//     let result = mapped.join("")
//     result = (result.padStart(result.length+1, '#'))
//     if (result.length > 140) return false
//     return result
// }

// console.log(capitalize("code" + " ".repeat(140) + "wars"));

// var moveZeros = function (arr) {
//     // TODO: Program me
//     let zeros = [];
//     let numbers = []
//     arr.map((value,index) => {
//       if(value === 0){
//         zeros.push(value)
//       } else {
//         numbers.push(value)
//       }
//     })
//   return numbers.concat(zeros)
// }

// console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));

// function int32ToIp(int32) {
//   let array = [[]]
//   //...
//   const binari = int32.toString(2);
//   let binPad = binari.padStart(32, '0');
//   for (let bin of binPad) {
//     if(array[array.length - 1].length < 8) {
//       array[array.length - 1].push(bin);
//     } else {
//       array.push([bin])
//     }
//   }
//   let mapped = array.map(arr => parseInt(arr.join(""), 2)).join(".");
//   return mapped
// }

// console.log(int32ToIp(0));

function firstNon(str) {
  const obj = {};
  for (let char of str) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

console.log(firstNon("stress"));
