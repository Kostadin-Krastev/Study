/*
Write a function that reads accepts two integers and prints the larger of the two.
 */

const printsLargeNumber = function (inputNumberOne, inputNumberTwo) {
  if (inputNumberOne > inputNumberTwo) {
    console.log(inputNumberOne);
  } else {
    console.log(inputNumberTwo);
  }
};

printsLargeNumber(-1, -5);
