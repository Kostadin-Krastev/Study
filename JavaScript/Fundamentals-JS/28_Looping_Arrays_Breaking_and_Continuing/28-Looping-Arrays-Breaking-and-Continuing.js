// 28: Looping Arrays, Breaking and Continuing 047
/*
In JavaScript, looping over arrays allows you to efficiently access and manipulate elements. You can use different types of loops, and also control the flow of these loops using break and continue statements.

1. Looping Through Arrays
There are several ways to loop through arrays in JavaScript. Common ones include for, for...of, and forEach.

Basic for Loop
The for loop is the most flexible and commonly used way to iterate over an array.

Example:
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);  // Output: apple, banana, mango
}

- i is the index variable that starts at 0.
- fruits[i] accesses the array elements.
for...of Loop
The for...of loop is a modern and cleaner way to iterate over arrays, introduced in ES6.

Example:
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);  // Output: apple, banana, mango
}

- This directly iterates over array values, rather than the index.
forEach Method
forEach is a built-in array method for looping, which executes a function for each element.

Example:
const fruits = ["apple", "banana", "mango"];

fruits.forEach(function (fruit) {
  console.log(fruit);  // Output: apple, banana, mango
});

With forEach, you pass a callback function that runs on each element of the array.

2. Breaking the Loop
The break statement terminates the loop entirely and exits it. It can be useful when you want to stop the loop after a certain condition is met.

Example:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    break;  // Stops the loop when i equals 3
  }
  console.log(numbers[i]);  // Output: 1, 2
}

3. Continuing the Loop
The continue statement skips the current iteration of the loop and proceeds with the next one. This is useful when you want to ignore certain values in an array.

Example:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    continue;  // Skips the rest of the code for the current iteration
  }
  console.log(numbers[i]);  // Output: 1, 2, 4, 5 (3 is skipped)
}

4. Other Looping Methods
map()
The map() method creates a new array by applying a function to each element.

Example:
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);

console.log(squares);  // Output: [1, 4, 9, 16, 25]

filter()
The filter() method creates a new array with only elements that pass a test condition.

Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // Output: [2, 4]

Summary:
- Looping arrays: for, for...of, and forEach are common methods.

- break: Stops the loop entirely.

- continue: Skips to the next iteration of the loop.

- Higher-order array methods like map() and filter() provide more functional ways to work with arrays without explicitly managing the loop.

These techniques give you flexibility in working with arrays depending on your needs.
 */

const jonas = [
  "Jonas",
  "Smedman",
  2037 - 1991,
  "teacher",
  ["Michal", "Peter", "Steven"],
  true,
];

// creating an empty array that will be fill with information after the for loop past the jonas array
const types = [];

// Creating arrays using loop that contains the types of elements inside the jonas array
for (i = 0; i < jonas.length; i++) {
  // console.log(jonas[i]);

  // // creating the new array Method 1
  // types[i] = typeof jonas[i];

  // creating new array Method 2: using .push
  types.push = typeof jonas[i];
}

// Calling the new array
// console.log(types);

// New example calculating the age by dividing birth year from 2024
const birthYears = [1991, 2007, 1969, 2020];

// using loop inside of a function to go thru the array and calculate the age
function calculateAge(birthYears) {
  for (let i = 0; i < birthYears.length; i++) {
    const age = 2024 - birthYears[i];
    console.log(age);
  }
}

calculateAge(birthYears);

// Continue and Break examples
console.log("--------------ONLY STRINGS-------------");
for (i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--------------BREAK WITH NUMBER-------------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
