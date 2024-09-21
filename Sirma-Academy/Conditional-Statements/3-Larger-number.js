"use strict";
/*
Write a function that reads accepts two integers and prints the larger of the two.
 */

let number1 = -1;
let number2 = -5;

function printsLargerNumber(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else {
    console.log(number2);
  }
}

printsLargerNumber(number1, number2);
