"use strict";
/*
Write a program that receives an integer 'n' and prints its reverse.
 */
let integer = 123;
integer = 9876;

function printNumbersRevers(integer) {
  let numberIntoString = integer.toString(); // converting integer into string
  for (let i = numberIntoString.length - 1; i >= 0; i--) {
    console.log(numberIntoString[i]);
  }
}
printNumbersRevers(integer);
