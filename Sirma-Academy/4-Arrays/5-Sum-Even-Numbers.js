'use strict';
/*
Receive an array of strings parse them to numbers and sum only the even numbers.
 */
// Test data 1
let stringArr = ['1', '2', '3', '4', '5', '6'];
// Test data 2
stringArr = ['3', '5', '7', '9'];
// Test data 3
stringArr = ['2', '4', '6', '8', '10'];

function calcEvenNumbers(stringArr) {
  // Converting string array into array with number
  let numberArr = stringArr.map((str) => parseInt(str, 10));

  // Storing in variable even numbers
  let evenNumber = 0;

  // Looping the number array to find and sum even numbers
  for (let i = 0; i < numberArr.length; i++) {
    // Calculating if the number is even
    let sumOfEvenNumber = numberArr[i] % 2 === 0;

    // Checking If the number is even and doing the calculation
    if (sumOfEvenNumber) {
      evenNumber += numberArr[i];
    }
  }
  console.log(evenNumber);
}

calcEvenNumbers(stringArr);
