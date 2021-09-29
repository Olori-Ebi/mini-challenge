// function main() {
//   let click = document.getElementById("click");
//   let timeoutId;
//   click.addEventListener("click", () => {
//     counter.textContent++;
//     clearInterval(timeoutId);
//     timeoutId = setInterval(() => {
//       counter.textContent = 0;
//     }, 5000);
//   });
// }

// main();

function main(num, parts) {
  const array = [];
  while (parts > 0) {
    let new_num = (num / parts) | 0;
    array.push(new_num);
    num = num - new_num;
    parts--;
  }
  return array;
}

console.log(main(20, 3));


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
