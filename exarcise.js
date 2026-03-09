'use strict';
/*
You will receive 3 integers. Write a JS function sum to get the sum of the first two
integers and subtract function that subtracts the third integer from the result from the
Sum function.
 */
let firstInteger = 23;
let secondInteger = 6;
let thirdInteger = 10;

const sum = function (inputA, inputB) {
  const additionSum = inputA + inputB;

  return additionSum;
};

const subtractSum = function (inputFunction, inputC) {
  const subtractResult = inputFunction - inputC;

  return subtractResult;
};

console.log(subtractSum(sum(firstInteger, secondInteger), thirdInteger));
