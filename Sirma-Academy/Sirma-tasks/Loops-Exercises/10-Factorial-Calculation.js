"use strict";
/*
Write a program that receives a positive integer n and calculates its factorial.
*/

function calcFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}

calcFactorial(0);
