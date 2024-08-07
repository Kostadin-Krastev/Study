"use strict";
/*
Write a function that accepts text (string) and calculates and prints the sum of the values
of the vowel letters according to the table below:
*/

function text(inputText) {
  let sum = 0;
  for (let i = 0; i < inputText.length; i++) {
    switch (inputText[i]) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
    }
  }
  console.log(sum);
}

text("hello");
