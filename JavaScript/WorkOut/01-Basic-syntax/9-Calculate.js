/*
Write a function that accepts two integers "numOne" and "numTwo". Following the
described sequence, find and print in the shown format: 
- Sum of numbers
- Difference Between Numbers
- Multiplication
- Arithmetic mean
Tip: use Math.abs()to calculate the absolute value of the difference.
 */

let numOne = 25;
numOne = 7;
let numTwo = 5;
numTwo = 14;

function arithmeticOperations(numOne, numTwo) {
  const sumNumbers = numOne + numTwo;
  const diffNumbers = numOne - numTwo;
  const MultiplyNumbers = numOne * numTwo;
  const averageNumber = (numOne + numTwo) / 2;

  console.log(
    `Sum: ${sumNumbers}\nDifference: ${diffNumbers}\nProduct: ${MultiplyNumbers}\nAverage: ${averageNumber}`
  );
}

arithmeticOperations(numOne, numTwo);
