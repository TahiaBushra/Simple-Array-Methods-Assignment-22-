// //  Simple Array Methods

// const numbers = [12, 14, 26, 85, 57, 95, 3, 17];

// // unshift() : 41 will be added first
// numbers.unshift(41);
// console.log(numbers);
// //shift() : 41 will be removed from first
// numbers.shift(41);
// console.log(numbers);

// // push() : 5 Will be added last
// numbers.push(5);
// console.log(numbers);
// // push() : 5 Will be removed from last
// numbers.pop(5);
// console.log(numbers);

// // at() : Will show the array number by putting the index number
// console.log(numbers.at(2));
// // indexOf () : Will show the index number of array number
// console.log(numbers.indexOf(95));
// // includes() : Will show a bulean result (true or false) either the number is in the array or not.
// console.log(numbers.includes(55));

// const arr = [2, 15, 86, 75, 21, 35, 34, 48];

// // slice(): Will cut the numbers from array acording to index number.
// const sliceArr = arr.slice(0, 5);
// console.log(sliceArr);

// // splice(): Will cut the numbers from array acording to index number & count number also deletes the number from main array.
// const spliceArr = arr.splice(0, 7);
// console.log(spliceArr);

// forEach ()

// Example-1
const nums = [11, 5.5, 59, 31, 75, 41];
let sum = 0;
nums.forEach((el) => (sum += el));
console.log(sum);

// Example-2
const temperature = [2, 6, 8, 12, 18];
let product = 1;
temperature.forEach((el) => (product *= el));
console.log(product);
