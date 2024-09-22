"use strict";
/*
Write a function that receives an integer and prints on the console, whether even or odd.
 */

function evenOrOdd(integer) {
  if (integer % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(1024);
