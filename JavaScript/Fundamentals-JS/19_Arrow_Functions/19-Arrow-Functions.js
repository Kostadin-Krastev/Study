// 19. Arrow Functions

/*
Arrow functions are a concise way to write anonymous functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a shorter syntax compared to traditional function expressions. Arrow functions are especially useful for short, simple functions. Here's the basic syntax:
// Traditional Function Expression
const add = function (a, b) {
  return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

Key features of arrow functions:

1. Concise Syntax:
Arrow functions have a more concise syntax, especially when the function body consists of a single expression. If the function has only one parameter and a single statement, you can omit the parentheses and curly braces.
Example:
// Traditional Function Expression
const square = function (x) {
  return x * x;
};

// Arrow Function
const squareArrow = x => x * x;

2. No Binding of this:
Arrow functions do not bind their own this value. Instead, they inherit the this value from the enclosing scope. This behavior is often desirable when working with object methods or callback functions.
Example:
function Person() {
  this.age = 0;

  // Traditional Function Expression
  setInterval(function growUp() {
    // In this context, `this` does not refer to the Person object
    this.age++;
  }, 1000);

  // Arrow Function
  setInterval(() => {
    // In this context, `this` refers to the Person object
    this.age++;
  }, 1000);
}

3. No arguments Object:
Arrow functions do not have their own arguments object. If you need access to the arguments, you should use the rest parameters (...).
Example:
// Traditional Function Expression
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

// Arrow Function
const sumArrow = (...args) => args.reduce((acc, val) => acc + val, 0);

Arrow functions are a powerful addition to JavaScript, but it's essential to be aware of their behavior, especially regarding the handling of this and the lack of an arguments object. They are commonly used in modern JavaScript code for their brevity and clarity.
*/

// Arrow function
const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(1991);
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires after ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Kostadin"));
