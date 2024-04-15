// 15. The Conditional (Ternary) Operator
/*
The conditional operator, often referred to as the ternary operator, is a compact way to write conditional statements in JavaScript. It provides a shorthand for expressing simple if-else logic in a single line.

The ternary operator is often used for short, simple conditional assignments or to provide a default value. However, it's essential to use it judiciously to maintain code readability. Complex conditions or multiple nested ternary operators can make code harder to understand. In such cases, it might be more readable to use traditional if-else statements.
*/
/*
Example for the structure of Ternery operator:
condition ? expressionIfTrue : expressionIfFalse;

Here's a breakdown of how it works:

- condition: An expression that is evaluated to either true or false.
- expressionIfTrue: The value to be returned if the condition is true.
- expressionIfFalse: The value to be returned if the condition is false.
The idea is that the entire expression evaluates to expressionIfTrue if the condition is true, and to expressionIfFalse otherwise.
Example:
const age = 3;
age >= 18 ? console.log("I like to drink") : console.log("I'am not alowed to drink");
*/

// We can store Ternery operator in Variables
const age = 23;
const drink = age >= 18 ? "I like to drink wine :)" : "I'm not alowed to drink";
console.log(drink);

// Example of Ternary operator inside of Template literal
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
