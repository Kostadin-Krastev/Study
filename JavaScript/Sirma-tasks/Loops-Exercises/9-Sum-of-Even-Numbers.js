"use strict";
/*
Write a program that receives an integer n; and calculates the sum of the first n even
numbers. Display the result on the console.
*/

function calcEven(inputNumber) {
  let sum = 0;
  for (let i = 0; i <= inputNumber; i++) {
    sum += 2 * i;
  }
  console.log(sum);
}

calcEven(5);
