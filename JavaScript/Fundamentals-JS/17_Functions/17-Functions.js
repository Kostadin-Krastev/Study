"use strict";
// 17. Functions

/*
In JavaScript, functions are a fundamental building block of the language. They allow you to group code into reusable units and perform specific tasks. Function is a piece of code that we can use over and over in our code. Here are some key aspects of functions in JavaScript:

- Function Declaration:
You can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.
Example:
function add(a, b) {
  return a + b;
}

- Function Expression:
You can also create a function using a function expression. In this case, you define an anonymous function and assign it to a variable.
Example:
const subtract = function(a, b) {
  return a - b;
};

- Arrow Functions:
ES6 introduced arrow functions, a concise way to write functions. They are especially useful for short, anonymous functions.
Example:
const multiply = (a, b) => a * b;

- Function Invocation:
You can call or invoke a function by using its name followed by parentheses containing the arguments.
Example:
const result = add(3, 5); // result is now 8

- Parameters and Arguments:
Parameters are the variables listed in a function's definition, while arguments are the values passed into the function when it is called.
Example:
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

- Return Statement:
Functions can return a value using the return keyword. If no return statement is present, the function returns undefined.
Example:
function square(x) {
  return x * x;
}

const result = square(4); // this means 4*4*4*4, and the result is now 16

- Scope:
Variables declared inside a function are scoped to that function and are not accessible outside of it.

- Higher-Order Functions:
JavaScript supports higher-order functions, which are functions that can take other functions as arguments or return them.
Example:
function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(3, 4, add); // result is now 7

These are the basic concepts of functions in JavaScript. They play a crucial role in creating modular and maintainable code.
*/
// This is function
function logger() {
  console.log("My name is Kostadin");
}
//This is colled / Calling / Running / Invoking the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Without capturing the value into a variable
console.log(fruitProcessor(5, 0));

// Making onother juice with the same function
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
