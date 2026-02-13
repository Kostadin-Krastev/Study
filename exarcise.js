'use strict';
/*
Write a function that accepts a positive number n and prints the numbers from n to 1 in
reverse order (from largest to smallest).
*/

let number = 10;
number = 5;

const printNumbersRevesed = function (number) {
  for (let i = number; i >= 1; i--) {
    console.log(i);
  }
};
printNumbersRevesed(number);
