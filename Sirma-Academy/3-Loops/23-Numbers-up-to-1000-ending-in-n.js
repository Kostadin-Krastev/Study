/*
Write a program that prints the numbers in the range [1... 1000], which end in n. 
 */

// Test data 1
let integer = 6;

// Test data 2
integer = 8;

function printsNumbers(integerInput) {
  for (let i = 1; i <= 1000; i++) {
    let checkNumber = i % 10 === integerInput;
    if (checkNumber === true) {
      console.log(i);
    }
  }
}

printsNumbers(integer);
