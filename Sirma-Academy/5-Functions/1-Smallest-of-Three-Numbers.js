'use strict';
/*
Write a JS function which receive three integer numbers to print the smallest of the
three integer numbers. Use appropriate name for the function.
 */
// Test data 1
let integer1 = 2;
let integer2 = 5;
let integer3 = 3;
// Test data 2
integer1 = 600;
integer2 = 342;
integer3 = 123;
// Test data 3
integer1 = 25;
integer2 = 21;
integer3 = 4;

function printSmallestNumber(integer1, integer2, integer3) {
  if (integer1 < integer2 && integer1 < integer3) {
    console.log(integer1);
  } else if (integer2 < integer1 && integer2 < integer3) {
    console.log(integer2);
  } else {
    console.log(integer3);
  }
}

printSmallestNumber(integer1, integer2, integer3);
