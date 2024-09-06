"use strict";
/*
 Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
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

// Create a Boolean variable 'markHigherBMI'
const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);
