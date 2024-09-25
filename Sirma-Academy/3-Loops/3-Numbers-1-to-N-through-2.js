"use strict";
/*
Write a function that accepts a number n and prints the numbers from 1 to n through 2
(with step 2).
 */

let integer = 10;
integer = 5;

function printsNumbersThrough2Steps(integer) {
  for (let i = 1; i <= integer; i += 2) {
    console.log(i);
  }
}

printsNumbersThrough2Steps(integer);
