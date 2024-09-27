"use strict";
/*
Write a program that receives an integer 'n' and calculates the sum of the first 'n' even numbers. Display the result on the console.
 */
let integer = 3;
integer = 5;
integer = 1;
integer = 0;
integer = 10;

function sumOfFirstEvenNumbers(integer) {
  let resultOfEvenNumbers = 0;
  for (let i = 0; i < integer; i++) {
    resultOfEvenNumbers += 2 * integer;
    console.log(resultOfEvenNumbers);
  }
}
sumOfFirstEvenNumbers(integer);
