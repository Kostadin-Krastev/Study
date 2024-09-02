"use strict";
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
//1. Storing Mark and John body mass and height
let kgMark = 78;
kgMark = 95; // Data 2 Mark kilograms
let heightMark = 1.69;
heightMark = 1.88; // Data 2 Mark height
let kgJohn = 92;
kgJohn = 85; // Data 2 John kilograms
let heightJohn = 1.95;
heightJohn = 1.76; // Data 2 John height

// 2. Calculating Mark and John BMI's
const bmiMark = kgMark / heightMark ** 2;
const bmiJohn = kgJohn / heightJohn ** 2;

// 3. Printing to the console who have the higher BMI
if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark.toFixed(
      2
    )}) is higher than John's (${bmiJohn.toFixed(2)})!`
  );
} else {
  console.log(
    `John's BMI (${bmiJohn.toFixed(
      2
    )}) is higher than Mark's (${bmiMark.toFixed(2)})!`
  );
}
