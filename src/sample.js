// function maskify(cc) {
//     return cc.slice(-4).padStart(cc.length, '#')
// }

// console.log(maskify('32333333561'));

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;

//   }

//   console.log(getCount('abracadabra'));

// function order(words){
//     // ...
//     const words_arr = words.split(" ");
//     console.log(words_arr);
// }

// console.log(order("is2 Thi1s T4est 3a"));

function pigIt(str) {
  //Code here
  const added = "ay ";
  const str_arr = str.split(" ");
  let newStr = "";
  for (let index = 0; index < str_arr.length; index++) {
    if (str_arr[index].length === 1) {
      newStr += str_arr[index];
    } else {
      newStr += str_arr[index].slice(1) + str_arr[index].slice(0, 1) + added;
    }
  }
  console.log(newStr);
  // console.log(str_arr[str_arr.length - 1].length);
  // if (str_arr[str_arr.length - 1].length === 1) {
  //     return str_arr
  // }
  // let star = str_arr.map(arr => arr.slice(1) + arr.slice(0,1) + added).join(" ");
  // console.log(star);
}

console.log(pigIt("hello World !"));
