"use strict";
/*
Write a program that receives a positive integer 'n' and calculates its factorial.
 */

let integer = 5;
integer = 3;
integer = 0;
integer = 1;
integer = 10;

function calculateFactorial(integer) {
  let number = 1;
  for (let i = 2; i <= integer; i++) {
    number *= i;
  }
  console.log(number);
}

calculateFactorial(integer);
