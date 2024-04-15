// 10. Equality Operators == vs. === And the not equal operator != vs !==

/*
What are Comparison Operators in JS?
Comparison operators in programming languages are used to compare two values. These operators return a boolean value (true or false) based on the condition. Sence these operators are used in decision making or as conditional statements for loops.
*/

/*
The == and === operators in JavaScript are comparison operators that we use to determine if two values are equal or not.

The == operator performs a loose equality comparison that performs type coercion if necessary to make the comparison possible.
Exampel:
"18" == 18
the string will be equal to a number and the result will be true

The === operator, on the other hand, performs a strict equality comparison that does not perform type coercion and requires the operands to have the same type (as well as the same value).
Exampel:
"18" == 18
the string will be not equal to a number and the result will be false

As a general rule for a clean code, we must avoid loose operator (==) as much as possible.
*/

/*
The not equal operator != vs !==
Loose vertion (!=)
Loose version of not equal or inequality operator (!=) checks whether two values are not equal and returns a boolean value. This operator tries to compare values irrespective of whether they are of different types.

The strict version (!==) does not attempt to do so and returns false if the values are unequal or of different types.

As a general rule for a clean code, we must avoid loose operator (!=) as much as possible.
*/

// Creating a pop-up window with question and field for input the answer. We store it in a variable
/*
const faivourNumber = prompt("What is your favourite number?");

if (faivourNumber == 23) {
  // here 23 is a string. But because we use loose operator (==) the result will be "23" == 23 and the progrm will show the message Cool! That's an amazing number. If we use strict operator (===) the program will not show as the text because string "23" is not equale to the number 23.
  console.log("Cool! That's an amazing number.");
}

// like this
if (faivourNumber === 23) {
  console.log("Cool! That's an amazing number.");
}
*/

// if we want to work all the code above with strict operator (===) we have to convert the prompt string into a number like this:
const faivourNumber = Number(prompt("What is your favourite numer?")); // converting string into a number
if (faivourNumber === 23) {
  // here number from the variable is no longer a string. There for the result is 23 === 23
  console.log("Cool! That's an amazing number.");
} else if (faivourNumber === 7) {
  console.log("7 is also a coll number.");
} else {
  console.log("Number is not 23 or 7.");
}

if (faivourNumber !== 23) console.log("Why not 23?"); // here !== means different than 23
