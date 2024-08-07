"use strict";
/*
Write a function that takes two numbers n and m and prints the numbers from 1 to n
through m (with step m).
*/
function printNumbers(n, m) {
  for (let i = 1; i <= n; i += m) {
    console.log(i);
  }
}

printNumbers(8, 3);
