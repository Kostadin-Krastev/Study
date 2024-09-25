"use strict";
/*
Write a function that accepts text (string) and calculates and prints the sum of the values of the vowel letters according to the table below:
letter: a e i o u
value: 1 2 3 4 5
 */

let text = "hello";
text = "hi";
text = "bey";
text = "zzzz";

function sumOfVowels(text) {
  let sum = 0;

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
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

sumOfVowels(text);
