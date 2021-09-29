/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
// function isValid(str) {
//   // create an object and assign the closing brackets as keys to the opening brackets
//   const obj = { "}": "{", ")": "(", "]": "[" };
//   // create an empty array to store opening brackets whenever we see one
//   const array_of_obj = [];
//   // loop through
//   for (let char in str) {
//     // if item is opening bracket, add to our array
//     if (Object.values(obj).includes(str[char])) {
//       array_of_obj.push(str[char]);
//     } else {
//       let close_bracket = obj[str[char]];
//       let last_element = array_of_obj.pop();
//       if (close_bracket !== last_element) {
//         return "invalid";
//       }
//     }
//   }
//   return array_of_obj.length === 0 ? "valid" : "invalid";
// }

// console.log(isValid("(()()())"));

function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] === 'NORTH' && arr[i+1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i+1] === 'NORTH')) {
      arr.splice(i,2)
    }

    if((arr[i] === 'WEST' && arr[i+1] === 'EAST') || (arr[i] === 'EAST' && arr[i+1] === 'WEST')) {
      arr.splice(i,2)
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] === 'NORTH' && arr[i+1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i+1] === 'NORTH')) {
      arr.splice(i,2)
    }

    if((arr[i] === 'WEST' && arr[i+1] === 'EAST') || (arr[i] === 'EAST' && arr[i+1] === 'WEST')) {
      arr.splice(i,2)
    }
  }
  return arr
}

console.log(dirReduc(["NORTH","WEST","SOUTH","EAST"]));
