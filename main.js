//Data Types
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

//Arrays

let numbersArray = [5, 10, 15, 20, 25];

// 2.
let doubledArray = numbersArray.map(num => num * 2);
console.log("Doubled Array:", doubledArray);

// 3.
let filteredArray = numbersArray.filter(num => num > 10);
console.log("Filtered Array:", filteredArray);

// 4. 
let sumOfArray = numbersArray.reduce((sum, num) => sum + num, 0);
console.log("Sum of Array:", sumOfArray);

// 5. 
numbersArray.forEach(num => console.log("Array Element:", num));

//Functions
// 1. 
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 2.
function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// 3. 
function findMax(array) {
    return Math.max(...array);
}

// Example usage
greet("Sonia");
console.log("Sum of [1, 2, 3]:", sumArray([1, 2, 3]));
console.log("Max of [1, 2, 3]:", findMax([1, 2, 3]));
