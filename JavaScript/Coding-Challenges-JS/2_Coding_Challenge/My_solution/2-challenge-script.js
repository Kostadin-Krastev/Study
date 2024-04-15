/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/

// the code from Challange #1
// Data 1: Mark and John height and mass
let kilogramsMark = 78;
// kilogramsMark = 95; // Data 2: Mark and John height and mass
let heightMark = 1.69;
// heightMark = 1.88; // Data 2: Mark and John height and mass
let kilogramsJohn = 92;
// kilogramsJohn = 85; // Data 2: Mark and John height and mass
let heightJohn = 1.95;
// heightJohn = 1.76; // Data 2: Mark and John height and mass

// Calculating their BMI`s
const bmiMark = kilogramsMark / heightMark ** 2;
const bmiJohn = kilogramsJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

// Comperasing Mark and John BMI`s
const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);

// if else statemant compering Mark and John's BMI's
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's!`);
}

/**
 * Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
 */
