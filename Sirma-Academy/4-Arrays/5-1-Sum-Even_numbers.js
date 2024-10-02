'use strict';
/*
Receive an array of strings parse them to numbers and sum only the even numbers.
 */
// Test data 1
let stringArr = ['1', '2', '3', '4', '5', '6'];

function sumOfEvenNumbers(stringArr) {
  // String for the calculation between even numbers
  let sumEvenNumbers = 0;

  //   Using for of loop
  for (const element of stringArr) {
    // Converting the element string into a number
    let numberArr = Number(element);

    // Checking if the number is even
    const isEven = numberArr % 2 === 0;

    if (isEven) {
      sumEvenNumbers += numberArr;
    }
  }

  console.log(sumEvenNumbers);
}

sumOfEvenNumbers(stringArr);
