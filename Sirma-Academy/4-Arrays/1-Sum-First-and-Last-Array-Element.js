"use strict";
/*
Write a function that receives an array of strings and prints the sum of the first and last element in that array.
 */

const arr = ["20", "30", "40"];
// add new test data 2
arr[0] = "10";
arr[1] = "17";
arr[2] = "22";
arr.push("33");
// add new test data 3
arr[0] = "11";
arr[1] = "58";
arr[2] = "69";
arr.pop();

function sumOfFirsLastArray(arr) {
  const result = Number(arr[0]) + Number(arr[arr.length - 1]);
  console.log(result);
}

sumOfFirsLastArray(arr);
