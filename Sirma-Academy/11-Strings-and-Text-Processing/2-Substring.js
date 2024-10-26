'use strict';
/*
Write a function that receives a string and two numbers. The numbers will be a
starting index and count of elements to substring. Print the result.
 */

const substringText = function (stringInput, numberA, numberB) {
  let newString = stringInput.substring(numberA, numberB);

  console.log(newString);
};

// Test data 1
// substringText('ESentence', 1, 8);

// Test data 2
substringText('DropWord', 4, 8);
