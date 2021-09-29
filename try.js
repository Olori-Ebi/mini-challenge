

/**
 *
 * @param {number[]} array takes an integer array and unpacks it
 * @returns
 */

// function binarr(array) {
//     let new_arr = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         let conversion = element.toString(2).split("");
//         while (conversion.length < 8) {
//             conversion.unshift(0)
//         }
//         let conv_arr = (conversion.join('').split(" "));
//         new_arr.push(conv_arr)
//     }
//     let final_arr = new_arr.toString().split(",").reverse().join("");

//     return parseInt(final_arr, 2);
// }

// console.log(binarr([24, 85, 0]));

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('success')
//     }, 5000)
//   })

//   console.log(await promise1);

//   promise1.then(value => {
//     console.log(value)
//   }).catch(err => {
//     console.log(err)
//   })

//   console.log(promise1)

// let done = true;
// const isItDoneYet = new Promise((resolve, reject) => {
//     if(done) {
//         resolve("yeah, it is done now dumbie!!!")
//     } else {
//         reject("Nah, still working on some projects")
//     }
// })

// isItDoneYet.then(data => console.log(data)).catch(err => console.log(err))

// let readFile = new Promise((resolve, reject) => {
//   fs.readFile('./file1.txt', 'utf-8', (err, data) => {
//     if(err) return reject(err)
//     resolve(data)
//   })
// })
// let readFile2 = new Promise((resolve, reject) => {
//   fs.readFile('./file2.txt', 'utf-8', (err, data) => {
//     if(err) return reject('path invalid')
//     resolve(data)
//   })
// })
// let readFile3 = new Promise((resolve, reject) => {
//   fs.readFile('./file3.txt', 'utf-8', (err, data) => {
//     if(err) return reject('invalid path')
//     resolve(data)
//   })
// });

// let promise = await Promise.all([readFile3, readFile, readFile2]);
// console.log(promise);

// let promiseSettle = await Promise.allSettled([readFile3, readFile, readFile2]);
// console.log(promiseSettle);

// let promiseRace = await Promise.race([readFile3, readFile, readFile2]);
// console.log(promiseRace);

// readFile.then(data => {
//   console.log(data);
//   return readFile2
// }).then(data => {
//   console.log(data);
//   return readFile3
// }).then(data => {
//   console.log(data);
// }).catch(err => console.log(err))

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(data => console.log(data));

// function expression(number, operation){
//   if(!operation)
//     return number;
//   return operation(number);
// }

// function zero(operation) { return expression(0, operation); }
// function one(operation) { return expression(1, operation); }
// function two(operation) { return expression(2, operation); }
// function three(operation) { return expression(3, operation); }
// function four(operation) { return expression(4, operation); }
// function five(operation) { return expression(5, operation); }
// function six(operation) { return expression(6, operation); }
// function seven(operation) { return expression(7, operation); }
// function eight(operation) { return expression(8, operation); }
// function nine(operation) { return expression(9, operation); }

// function plus(x) {
//   return function(y) {
//     return y + x;
//   }
// }
// function minus(x) {
//   return function(y) {
//     return y - x;
//   }
// }
// function times(x) {
//   return function(y) {
//     return y * x;
//   }
// }
// function dividedBy(x) {
//   return function(y) {
//     return y / x;
//   }
// }

// console.log(seven(times(five())));

// const [
//   zero,
//   one,
//   two,
//   three,
//   four,
//   five,
//   six,
//   seven,
//   eight,
//   nine
// ] = Array.from({length:10}).map((item,i) => ((f) => f ? f(i) : i));

// const [
//   plus,
//   minus,
//   times,
//   dividedBy
// ] = ['+', '-', '*', '/'].map(op => Function('b', `return a => a ${op} b`));

// function spinWords(words){
//     return words.split(' ').map( (word) => {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }
// console.log(spinWords("Hey fellow warriors"));

// function comp(array1, array2){
//   //your code here
//   array2.map(num => square(num)).map(arr => {
//     if(array1.includes(arr)) {
//       let index = array1.indexOf(arr);
//       array1.splice(index, 1);
//     }
//   })
//   return array1.length === 0
// }

// function square (num) {
//   return Math.sqrt(num)
// }

// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]));

// Return the output array, and ignore all non-op characters
// function parse( data ) {
//   let count = 0;
//   let array = [];
//   const data_array = data.split("");
//   for (let index = 0; index < data_array.length; index++) {
//     const element = data_array[index];
//     if(element === 'i') {
//       count++
//     }
//     if(element === 's') {
//       count *= count
//     }
//     if(element==='d') {
//       count--
//     }
//     if(element === 'o'){
//       array.push(count)
//     }
//   }
//   console.log(array);
// }

// console.log(parse('iiisxxxdoso'));
// function tickets(peopleInLine) {
//   let a25 = 0,
//     a50 = 0;
//   for (let i = 0; i < peopleInLine.length; i++) {
//     if (peopleInLine[i] == 25) {
//       a25 += 1;
//     }
//     if (peopleInLine[i] == 50) {
//       a25 -= 1;
//       a50 += 1;
//     }
//     if (peopleInLine[i] == 100) {
//       if (a50 == 0 && a25 >= 3) {
//         a25 -= 3;
//       } else {
//         if (a50 >= 0 && a25 < 3) {
//           a25 -= 1;
//           a50 -= 1;
//         }
//       }
//     }
//     if (a25 < 0 || a50 < 0) {
//       return "NO";
//     }
//   }
//   return "YES";
// }

// console.log(tickets([25, 100]));


// const shiftedDiff = (first, second) => {
//   if (first === second) return 0;
//   if(first.length !== second.length) return -1;
//   const array = first.split('');
//   let rotationCount = 0;
//   for(let char of array) {
//     array.unshift(array.pop());
//     rotationCount++;
//     if(array.join('') === second) {
//       return rotationCount;
//     }
//   }
//   return -1;
// }

// console.log(shiftedDiff("coffee", "ecoffe"));


// const dns = require('dns');
// const email = 'arjunphp@gmail.com.ng';
// const domain = email.split('@')[1];  
// dns.resolve(domain, 'MX', (err, addresses) => {    
//          if (err) {
//             console.log('No MX record exists, so email is invalid.');    
//         } else if (addresses && addresses.length > 0) {    
//           console.log(addresses);  
//             console.log('This MX records exists So I will accept this email as valid.');
//         }
//       })

// function firstNonRepeatingLetter(s) {
//   const obj = {}
//   const array = []
//   for (let char of s.toLowerCase()) {
//     obj[char] ? obj[char] += 1: obj[char] = 1
//   }
//   for (let i in s) {
//     let char = s[i];
//     if(obj[char.toLowerCase()] == 1) {
//       return char
//     }
//   }
//   return -1
// }

// console.log(firstNonRepeatingLetter('sTreSS'));

// function doneOrNot(board){
//   let set1Array = new Set(),
//       set2Array = new Set(),
//       set3Array = new Set();
  
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++){
//       set1Array.add(board[i][j]);
//       set2Array.add(board[j][i]);
//       set3Array.add(board[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)]);
//     }
//     if (set1Array.size != 9 || set2Array.size != 9 || set3Array.size != 9 )
//       return "Try again!";
//     set1Array.clear();
//     set2Array.clear();
//     set3Array.clear();
//   }
//   return "Finished!";
// }

// console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
         

// function whoIsNext(names, r){
//   //your code here
//   if (r < names.length) return names[r-1];
//   for (let index = 0; index < names.length; index++) {
//     while(names.length < r) {
//       names.splice(names.length - 1, 0, names[index], names[index]);
//       index++
//     }
//   }
//   console.log(names);
// }

// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52));

// function domainName(url){
//   //your code here
//   let output = '';
//   let http = /http:\/\//,
//       https = /https:\/\//,
//       www = /www./;
  
//   let newUrl = url.replace(https, '').replace(http, '').replace(www, '')
  
//   console.log(url, newUrl)
//   for(let i = 0; i < newUrl.length; i++){
//     if(newUrl[i] !== '.'){
//       output += newUrl[i];
//     } else {
//       break;
//     }
//   }
  
//   return output;
// }

// console.log(domainName("http://www.google.co.jp"));

// function sortStringsByVowels(strings){

//   var results = [];
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   let i = 0;
//   // do magic here
//   strings.map((str, index) => {
//     console.log(str);
//     const array = (str.split(""));
//     console.log(array);
//     for (let index = 0; index < array.length; index++) {
//       const element = array[index];
//       if(vowels.includes(array[index])) {
//         console.log(array[index]);
//       }
//     }
//   })
//   console.log(count);
//   return results;
//   }

//   console.log(sortStringsByVowels(sortStringsByVowels( ["ioue","ee","uoiea"])));

// const obj = {
//   name: 'seun'
// };

// const greeting = function(a,b,c) {
//   return this.name + a + b + c
// }

// console.log(greeting.apply(obj, ['lagos', "ibadan", "akure"]));

// let runner = {
//   name: 'Runner',
//   run: function(speed) {
//       console.log(this.name + ' runs at ' + speed + ' mph.');
//   }
// };

// let flyer = {
//   name: 'Flyer',
//   fly: function(speed) {
//       console.log(this.name + ' flies at ' + speed + ' mph.');
//   }
// };

// let run = runner.run.bind(flyer, 20);
// console.log(run());

// const arr = [1,2,3,4,5,6];
// console.log(Math.max.call(null, 1,2,3,4,5,6));

// (function () {
//   var userName = "Steve";
  
//   function display(name)
//   {
//       console.log("MyScript2.js: " + name);
//   }

//   display(userName);
// })();

// var userName = "Bill";

// (function (name) {

//     function display(name)
//     {
//         console.log("MyScript2.js: " + name);
//     }

//     display(name);
// })(userName);

class Node {
  constructor(val) {
      this.val = val;
      this.next = null
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
    return this
  }
  shift(){
     if(!this.head) return undefined;
     let currentHead = this.head;
     this.head = currentHead.next
     this.length--
     if(this.length === 0) {
       this.tail = null
     }
     return currentHead
  }
  transverse(){
    let current = this.head;
    while(current) { 
      current = current.next;
    }
  }
  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--
    if(this.length === 0) {
      this.head = null;
      this.tail = null
    }
    return current
  }
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if(index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++
    }
    return current
  }
  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val;
      return true
    }
    return false
  }
}

let list = new singlyLinkedList();
list.push('hello')
list.push('goodbye')
list.push('goofy')
list.push('cow')

console.log(list.set(2,'seun'));;
console.log(list.get(2));
console.log(list.get(2));
console.log(list.shift());
console.log(list);
console.log(list.head.next);
console.log(list.unshift('jean'));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop()); 
console.log(list);
let first = new Node("Hi")
first.next = new Node("There")
first.next.next = new Node("How")
first.next.next.next = new Node("Are")
first.next.next.next.next = new Node("You");

console.log(first); 


import path from 'path';

console.log(path.join(__dirname,'./','mini-challenges-1' ));