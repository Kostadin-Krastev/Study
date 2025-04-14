/*
Write a function that accepts a positive number n and prints the numbers from n to 1 in reverse order (from largest to smallest).
 */

let integer = 10;

const printNumbersReverse = function (integer) {
  for (let i = integer; i >= 1; i--) {
    console.log(i);
  }
};

printNumbersReverse(integer);
