'use strict';
/*
Write a function that receives a string and prints all the characters on separate lines.
 */

// Test data 1
let strInput = 'AWord';

function printString(strInput) {
  for (let i = 0; i < strInput.length; i++) {
    console.log(strInput[i]);
  }
}

printString(strInput);
