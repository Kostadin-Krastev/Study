'use strict';
/*
Write a program that calculates the difference between the sum of the even and the sum
of the odd numbers in an array.
 */
// Test data 1
let numberArr = [1, 2, 3, 4, 5, 6];
// Test data 2
numberArr = [3, 5, 7, 9];
// Test data 3
numberArr = [2, 4, 6, 8, 10];

function sumEvenOdd(numberArr) {
  // Creating variables for even and odd numbers
  let sumEvenNumbers = 0;
  let sumOddNumbers = 0;

  //   Using for of loop to loop the array
  for (const number of numberArr) {
    // Checking if the number is Even or odd and updating the sumEvenNumbers and sumOddNumbers
    if (number % 2 === 0) {
      sumEvenNumbers += number;
    } else sumOddNumbers += number;
  }
  //   Variable containing the difference between sum of even and odd numbers
  const diffNumber = sumEvenNumbers - sumOddNumbers;

  console.log(diffNumber);
}

sumEvenOdd(numberArr);
