// 07. Taking Decisions if - else Statements

/**
Conditional Statements
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- if to specify a block of code to be executed, if a specified condition is true
- else to specify a block of code to be executed, if the same condition is false
- else if to specify a new condition to test, if the first condition is false
- switch to specify many alternative blocks of code to be executed

Variables that are created in if else statement are only active in that statemant and cannot be accessible outside of that block.
Example with variable centurey:

const birthYear = 1991;
let century; - we created outside the block and lived empty
if (birthYear <= 2000) {
  century = 20; - here inside the block we difine its value
} else {
  century = 21; - here inside the block we difine its value
}
console.log(century);

 */

/*
 The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
Example
Make a "Good day" greeting if the hour is less than 18:00:

if (hour < 18) {
  greeting = "Good day";
}

When we use if statemant without else statemant we cane write it only in one line like this:
if (age === 18) console.log("You are an adult")
 */

/*
The else if Statement
We use the else if statement to specify a new condition if the first condition is false.
Example:
if (favouriteNumber === 23) {
  console.log("Cool!");
} else if (favouriteNumber === 7) {
  console.log("It is a lucky number!");
} else {
  console.log("Not a bad number!");
}
*/

/*
The else Statement
Use the else statement to specify a block of code to be executed if the condition is false.

Example
If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
 */

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licens 🐱‍💻");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years. :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
