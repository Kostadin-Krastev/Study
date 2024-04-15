// 14. Statements and Expressions
/*
- Expressions
An expression is a piece of code that produces a value. It can be a combination of variables, values, and operators. Expressions can be as simple as a single variable or as complex as a full mathematical equation.
Example:
3+4 is an expression. Result 7 is their value
At its core, an expression is a bit of JavaScript code that produces a value.

For example, these are all expressions:

1 → produces 1
"hello" → produces "hello"
5 * 10 → produces 50
num > 100 → produces either true or false
isHappy ? "🙂" : "🙁" → produces an emoji
[1, 2, 3].pop() → produces the number 3
Expressions can contain expressions.
*/

/*
Statements
A statement is a complete line of code that performs a specific action. It is like a command that instructs the computer to do something.
Statement is like bigger piece of code that is executed and does not produce a value on it self.
A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

Here are some examples of statements in JavaScript:

let hi = 5;

if (hi > 10) {
  // More statements here
}
*/

/*
Statements are the rigid structure that holds our program together, while expressions fill in the details.

Statements often have "slots" for expressions. We can put any expression we like into those slots.

For example, declaring a variable has an expression slot:

let hi = // some expression;
*/

/*
In summary, statements are like complete sentences or commands in JavaScript, while expressions are like words that produce values. 
An important distinction is that expressions can be part of statements, but not all statements are expressions. 
For example, an if statement is not an expression because it doesn't produce a value, while a ternary operator is an expression because it does produce a value.
*/
