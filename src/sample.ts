// function sum(a: number, b: number) {
//     return a + b
// }

// console.log(sum(2,4));

// let array: any[] = [];
// array.push('seun');
// console.log(array);
interface ICustom {
  name: TName;
  age?: TAge;
  adult?: boolean;
  calculateAge: Function;
}

type TAge = number;

type TName = "Seun" | "OG";

const human: ICustom = {
  name: "Seun",
  age: 45,
  adult: true,
  calculateAge: () => {
    return human.age;
  },
};

let ageOfHuman = human.calculateAge;
console.log(ageOfHuman());

var str = "1";
var str2: number = <number>(<any>str); //str is now of type number
console.log(typeof str2);

function disp_details(id: number, name: string, mail_id?: string) {
  console.log("ID:", id);
  console.log("Name", name);

  if (mail_id != undefined) console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");

function addNumbers() {
  console.log(arguments);

  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  console.log(nums);

  var i;
  var sum = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);

function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);

class Car {
  private year2: number;
  constructor(public model: string, public name: string, public year: number) {}
  test() {
    this.year2;
  }
}

const toyota = new Car("toyota", "camry", 2);
console.log(toyota);

/**
 *
 * @param {number[]} array takes an integer array and unpacks it
 * @returns
 */

function binarr(array: number[]): number {
  return 2;
}

console.log(binarr([24, 85, 0]));
