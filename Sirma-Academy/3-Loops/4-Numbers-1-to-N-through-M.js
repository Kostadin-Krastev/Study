"use strict";
/*
Write a function that takes two numbers n and m and prints the numbers from 1 to n
through m (with step m).
 */

let integer = 10;
integer = 8;
let steps = 2;
steps = 3;

function printNumbers(integer, steps) {
  for (let i = 1; i < integer; i += steps) {
    console.log(i);
  }
}

printNumbers(integer, steps);
