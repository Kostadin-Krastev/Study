'use strict';

/*
Write a JS function which receive three integer numbers to print the smallest of the
three integer numbers. Use appropriate name for the function.
 */

const printSmallest = function (inputA, inputB, inputC) {
  if (inputA < inputB && inputA < inputC) {
    console.log(inputA);
  } else if (inputB < inputA && inputB < inputC) {
    console.log(inputB);
  } else {
    console.log(inputC);
  }
};

printSmallest(600, 342, 123);
