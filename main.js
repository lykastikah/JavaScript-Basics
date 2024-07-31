// Part 1: Data Types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "John", age: 30 };
let symbolVar = Symbol("unique");

console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Object:", objectVar);
console.log("Symbol:", symbolVar);

// Part 2: Arrays

let numbersArray = [5, 10, 15, 20, 25];

// 2. Using map method to create a new array where each number is multiplied by 2
let doubledArray = numbersArray.map(num => num * 2);
console.log("Doubled Array:", doubledArray);

// 3. Using filter method to create a new array that only includes numbers greater than 10
let filteredArray = numbersArray.filter(num => num > 10);
console.log("Filtered Array:", filteredArray);

// 4. Using reduce method to find the sum of all numbers in the array
let sumOfArray = numbersArray.reduce((sum, num) => sum + num, 0);
console.log("Sum of Array:", sumOfArray);

// 5. Using forEach method to print each number in the array to the console
numbersArray.forEach(num => console.log("Array Element:", num));

// Part 3: Functions
// 1. Creating a function named greet that takes a name and prints a greeting message to the console
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 2. Create a function named sumArray that takes an array of numbers and returns the sum of all elements
function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// 3. Create a function named findMax that takes an array of numbers and returns the maximum number
function findMax(array) {
    return Math.max(...array);
}

// Example usage
greet("Alice");
console.log("Sum of [1, 2, 3]:", sumArray([1, 2, 3]));
console.log("Max of [1, 2, 3]:", findMax([1, 2, 3]));
