'use strict';
/*
Receive two string arrays and print on the console whether they are identical or not.
Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on the console the following message: 'Arrays are identical. Sum: {sum}', otherwise find the first index where the arrays differ and print on the console following message:
'Arrays are not identical. Found difference at {index} index'.
 */

// Test data 1
let numbersArr = ['10', '20', '30'];
let numbersArr2 = ['10', '20', '30'];

// Test data 2
numbersArr = ['1', '2', '3', '4', '5'];
numbersArr2 = ['1', '2', '4', '4', '5'];

// Test data 3
numbersArr = ['1'];
numbersArr2 = ['10'];

function areIdenticalArr(numbersArr, numbersArr2) {
  let sumArr = 0;
  let isIdentical = true;
  let index = null;
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] === numbersArr2[i]) {
      sumArr += Number(numbersArr[i]);
    } else {
      isIdentical = false;
      index = i;
      break;
    }
  }
  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sumArr}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}
areIdenticalArr(numbersArr, numbersArr2);
