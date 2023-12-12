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

// // Example-1
// const nums = [11, 5.5, 59, 31, 75, 41];
// let sum = 0;
// nums.forEach((el) => (sum += el));
// console.log(sum);

// // Example-2
// const temperature = [2, 6, 8, 12, 18];
// let product = 1;
// temperature.forEach((el) => (product *= el));
// console.log(product);

// // map()
// const areas = [5, 4, 7, 9, 10];
// const result = areas.map((areas) => areas * areas);
// console.log(result);

// // filter()
// const numbers = [3, 4, 7, 9, 10];
// const odd = numbers.filter((el) => el % 2 !== 0);
// console.log(odd);

// // find()
// const fruits = ["Custard Apple", "Guava", "Lichi", "Pomgranet", "Dragon Fruit ", "Apple"];
// const fruit = fruits.find((fruit) => fruit.endsWith("a"));
// const fruitIndex = fruits.findIndex((fruit) => fruit.startsWith("P"));
// console.log(fruit);
// console.log(fruitIndex);

// // some()
// const friends = ["Lili", "Ruhi", "Mimi", "Ariya"];
// const output = friends.some((friend) => friend.endsWith("i"));
// const output2 = friends.every((friend) => friend.endsWith("i"));
// console.log(output);
// console.log(output2);

// // Chaining Method
// const newArr = [7, 5, 2, 3, 1, 6, 8];
// let sum = 0;
// const newNum = newArr.map((num) => num * 2).filter((num) => num > 10).forEach((num) => (sum += num));
// console.log(sum);

// // Reduce
// const myNumbers = [10, 20, 30, 40, 50];
// const sum = myNumbers.reduce((sum, num) => (sum += num));
// console.log(sum);

// // Reduce Right
// const product = myNumbers.reduceRight((product, num) => (product *= num));
// console.log(product);

// sort()

// Example-1
const foods = ["Custard Apple", "Guava", "Choclate", "Pomgranet", "Ice-Cream", "Cake"];
foods.sort();
console.log(foods);

// Example-2
const shoppingCart = [
    { id: 1, title: "Shirt", price: 1000, rating: 4.5 },
    { id: 2, title: "T-Shirt", price: 950, rating: 5 },
    { id: 3, title: "Sari", price: 2000, rating: 4.9 },
    { id: 4, title: "Kamiz", price: 3000, rating: 4.2 },
    { id: 5, title: "Jeans", price: 1500, rating: 4.7 },
];
const sortedCart = shoppingCart.sort((a, b) => a.price - b.price);
const sortedCart2 = shoppingCart.sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedCart);
console.log(sortedCart2);

// flat() & flatMap()
const nestedArray = [1, 2, [4, 5], 7, 8];
const flattedArray = nestedArray.flat(2).flatMap((el) => el + 4);
console.log(flattedArray);