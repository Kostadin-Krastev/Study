'use strict';
/*
You will receive 3 integers. Write a JS function sum to get the sum of the first two
integers and subtract function that subtracts the third integer from the result from the
Sum function.
 */

// Test data 1
let integer1 = 23;
let integer2 = 6;
let integer3 = 10;
// Test data 2
integer1 = 1;
integer2 = 17;
integer3 = 30;
// Test data 3
integer1 = 42;
integer2 = 58;
integer3 = 100;

function sumOfFirstTwoNumburs(integer1, integer2) {
  const result = integer1 + integer2 - integer3;
  return result;
}

function subtractNumbers(integer1, integer2, integer3) {
  const result = sumOfFirstTwoNumburs(integer1, integer2, integer3);
  console.log(result);
}

subtractNumbers(integer1, integer2, integer3);
