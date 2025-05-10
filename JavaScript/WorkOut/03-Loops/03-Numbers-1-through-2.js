/*
Write a function that accepts a number n and prints the numbers from 1 to n through 2 (with step 2).
 */

const printNumbersWithTwoStep = function (integer) {
  for (let i = 1; i <= integer; i += 2) {
    console.log(i);
  }
};

printNumbersWithTwoStep(10);
