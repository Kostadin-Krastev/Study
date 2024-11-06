// From lecture Functions in Sirma academy
/*
Write a function that prints the triangle shape as
shown:
 */

// function that prints only 1 row of the figure
function printLine(inputNumber) {
  //empty array that contains all the numbers from the loop
  let numbers = [];

  //   looping over the declaration inputNumber
  for (let i = 1; i <= inputNumber; i++) {
    // Pushing numbers in the empty array numbers
    numbers.push(i);
  }
  //   Printing numbers in the array numbers by joining them with empty space
  console.log(numbers.join(' '));
}

// Function that will print the entire shape by calling function printLine()
function printTriangle(side) {
  // First loop creates upper part of the triangle shape
  for (let i = 1; i <= side; i++) {
    // Calling the function printLine
    printLine(i);
  }

  //   Secund loop creates bottom part
  for (let i = side - 1; i > 0; i--) {
    // Calling the function printLine
    printLine(i);
  }
}

printTriangle(3);
