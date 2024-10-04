'use strict';
/*
Write a program to receive an array of numbers and condense them by summing
adjacent couples of elements until a single number is obtained. For example, if we have
3 elements {2, 10, 3}, we sum the first two and the second two elements and obtain
{2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13}
= {25}.
 */
// Test data 1
let numbersArr = [2, 10, 3];

// Test data 2
numbersArr = [5, 0, 4, 1, 2];

// Test data 3
numbersArr = [1];

function condenseArray(numbersArr) {
  while (numbersArr.length > 1) {
    let condenseArr = [];
    for (let i = 0; i < numbersArr.length - 1; i++) {
      let condenseValue = numbersArr[i] + numbersArr[i + 1];
      condenseArr.push(condenseValue);
    }
    numbersArr = condenseArr;
  }
  console.log(numbersArr);
}

condenseArray(numbersArr);
