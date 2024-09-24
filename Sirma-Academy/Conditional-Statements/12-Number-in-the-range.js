"use strict";
/*
Write a program that checks whether the received number is in the range [-100, 100] and
is different from 0 and outputs "Yes" if it meets the conditions, or "No" if it is outside
them.
 */
let integer = -25;
integer = 0;
integer = 25;

function checksTheNumber(integer) {
  if (integer >= -100 && integer <= 100 && integer != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

checksTheNumber(integer);
