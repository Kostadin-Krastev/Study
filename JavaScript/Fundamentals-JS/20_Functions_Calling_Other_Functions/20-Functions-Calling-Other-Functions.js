// 20. Functions Calling Other Functions

/*
In JavaScript, you can have functions call other functions, which is a fundamental concept in programming known as function composition. This allows you to break down complex problems into smaller, more manageable parts.

Here's a basic example to illustrate function calling in JavaScript:
// Function that adds two numbers
function add(a, b) {
  return a + b;
}

// Function that squares a number
function square(x) {
  return x * x;
}

// Function that combines the above functions
function addAndSquare(c, d) {
  // Calling the add function
  const sum = add(c, d);
  
  // Calling the square function
  const result = square(sum);

  return result;
}

// Example usage
const result = addAndSquare(2, 3);
console.log(result); // Output: 25

In this example, the addAndSquare function calls both the add and square functions to perform a sequence of operations. This makes the code more modular and easier to understand.

Here are the steps in the addAndSquare function:
1. It calls the add function with parameters c and d and stores the result in the variable sum.

2. Then calls the square function with the result from step 1 (sum) and stores the final result in the variable result.

3. The final result is returned.
*/

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // calling function cutFruitPieces and storing it in variable applePieces
  const orangePieces = cutFruitPieces(oranges); // calling function cutFruitPieces and storing it in variable orangePieces
  const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
