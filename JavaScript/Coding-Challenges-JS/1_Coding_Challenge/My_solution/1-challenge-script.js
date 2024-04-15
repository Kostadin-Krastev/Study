// #1 Codding challenge - my solution

/*
Task:
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

// Data 1: Mark and John height and mass
let kilogramsMark = 78;
kilogramsMark = 95; // Data 2: Mark and John height and mass
let heightMark = 1.69;
heightMark = 1.88; // Data 2: Mark and John height and mass
let kilogramsJohn = 92;
kilogramsJohn = 85; // Data 2: Mark and John height and mass
let heightJohn = 1.95;
heightJohn = 1.76; // Data 2: Mark and John height and mass

// Calculating their BMI`s
const bmiMark = kilogramsMark / heightMark ** 2;
const bmiJohn = kilogramsJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

// Comperasing Mark and John BMI`s
const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);
