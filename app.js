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

// function palindrome(word) {
//     if (word.length < 2) return true;
//     if(word[0] === word.slice(-1)) {
//         return palindrome(word.slice(1, -1))
//     }
//     return false
// }

// console.log(palindrome('madam'));

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
