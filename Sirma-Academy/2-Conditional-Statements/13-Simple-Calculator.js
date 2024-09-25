"use strict";
/*
Write a function that receives two numbers and an operation and prints the result of it. 
- add +
- subtract - 
- divide / 
- multiply *
Format the result to two decimal places.
 */

let integerOne = 5;
integerOne = 10;
integerOne = 9;
integerOne = 5;
integerOne = 3.1;

let integerTwo = 5;
integerTwo = 3;
integerTwo = 12;
integerTwo = 2;
integerTwo = 0.1;

let operation = "add";
operation = "subtract";
operation = "divide";
operation = "multiply";

const calculator = function (integerOne, integerTwo, operation) {
  if (operation === "add") {
    const addNumbers = integerOne + integerTwo;
    console.log(addNumbers);
  } else if (operation === "subtract") {
    const subtractNumbers = integerOne - integerTwo;
    console.log(subtractNumbers);
  } else if (operation === "divide") {
    const divideNumbers = integerOne / integerTwo;
    console.log(divideNumbers.toFixed(2));
  } else if (operation === "multiply") {
    const multiplyNumbers = integerOne * integerTwo;
    console.log(multiplyNumbers.toFixed(2));
  } else {
    console.log("Error");
  }
};

calculator(integerOne, integerTwo, operation);
