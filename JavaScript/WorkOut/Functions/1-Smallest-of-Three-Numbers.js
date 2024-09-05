/*
1. Smallest of Three Numbers
Write a JS function which receive three integer numbers to print the smallest of the three integer numbers. Use appropriate name for the function. 
 */
//using if else statement
const smallestNumber = function (inputNumber1, inputNumber2, inputNumber3) {
  if (inputNumber1 < inputNumber2 && inputNumber1 < inputNumber3) {
    console.log(inputNumber1);
  } else if (inputNumber2 < inputNumber1 && inputNumber2 < inputNumber3) {
    console.log(inputNumber2);
  } else if (inputNumber3 < inputNumber1 && inputNumber3 < inputNumber2) {
    console.log(inputNumber3);
  }
};

smallestNumber(600, 342, 123);
