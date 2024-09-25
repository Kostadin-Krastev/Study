"use strict";
/*
Write a function that accepts a positive number n and prints the numbers from n to 1 in
reverse order (from largest to smallest).
 */

let positiveNumber = 10;
positiveNumber = 5;

function printsNumbersReversed(positiveNumber) {
  for (let i = positiveNumber; i >= 1; i--) {
    console.log(i);
  }
}

printsNumbersReversed(positiveNumber);
