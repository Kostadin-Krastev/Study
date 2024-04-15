// 18. Function Declarations vs. Expressions

/*
In JavaScript, there are two main ways to define functions: Function Declarations and Function Expressions. While both methods allow you to create functions, there are some key differences in how they are defined and hoisted.

- Function Declarations:
A function declaration is a statement that defines a named function. It starts with the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.
Example:
function add(a, b) {
  return a + b;
}

One important characteristic of function declarations is hoisting. In JavaScript, function declarations are hoisted to the top of their containing scope, meaning you can call the function before its actual declaration in the code.
Example:
console.log(add(2, 3)); // Works even though add is called before its declaration

function add(a, b) {
  return a + b;
}

- Function Expressions:
A function expression defines a function as part of an expression. In this case, you assign the function to a variable. The function can be anonymous (no name) or have a name.
Example:
const subtract = function(a, b) {
  return a - b;
};

Function expressions are not hoisted in the same way as function declarations. If you try to call a function expression before its definition, you'll encounter an error.
Example:
// This would result in an error
console.log(subtract(5, 2));

const subtract = function(a, b) {
  return a - b;
};

- Named Function Expression:
You can also have a named function expression, where the function has a name that can be used within the function itself. This can be useful for recursion or debugging.
Example:
const multiply = function multiply(a, b) {
  return a * b;
};

In summary, both function declarations and function expressions allow you to define functions in JavaScript, but they differ in hoisting behavior and how they are defined in the code. Function declarations are hoisted, while function expressions are not, and they must be defined before they are called. Choose the appropriate method based on your coding needs and style preferences.
*/

// This is Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// This is Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);
