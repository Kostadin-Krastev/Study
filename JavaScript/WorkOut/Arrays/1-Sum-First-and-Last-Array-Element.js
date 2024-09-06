"use strict";
/*
Write a function that receives an array of strings and prints the sum of the first and last element in that array.
 */
const stringsArray = [20, 30, 40];

const sumArray = function (stringsArray) {
  return stringsArray[0] + stringsArray.length - 1;
};

console.log(sumArray);
