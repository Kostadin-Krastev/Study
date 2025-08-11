# JavaScript lectures

## 01. Values and Variables

### What is Value?

Value is a piece of data. It is the smallest unit of information that we have in JavaScript.

Values are dividet by strings and numbers. String are typed inside quotation marks or dubble quotation marks.

Example for a string:

<pre>
'Kostadin'
</pre>

Numbers are typed without quotation marks.

Value can be an object or a primitive value. A value is only a primitive when is not an object.

Example for object value:

```javascript
let me = {
    name = 'Kostadin;
}
```

Exampe for primitive value:

```javascript
let name = 'Kotce';
let age = 39;
```

(more in lecture 2.Data types)

### What are Variables?

Variables store values. Before assigning a variable value, we must give a name to that variable. A variable name should always describe what variable is storing. That way we can easily understand what variable is holding.

Example:

```javascript
const firstName = 'Kostadin';
```

Also, we can assign two or more values to one variable. But the values must be undefined (empty). ( I am not very sure about that. It needs to be learned more)

Example:

```javascript
const firstName, lastName;
2-nd example
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // this is x = y = 10
```

For variable names we can use only letters, \_ (underscore), $ (dolar sign), and numbers (but variable names can not begin with numbers). There are rules how we have to write variables names and they are:

- every name should be written with small letter if it is one word.
- Camel case - when the name is more then one word. We write first word with small letter and then every after word with capital letter. It is a standart to write names like this in JavaScript

Example:

<pre>
firstNamePerson
</pre>

- Underscore "\_" example:
<pre>
first_name_person
</pre>

They are illegal names for variables. We cannot start a name with a number, space and most importantly they cannot be a JavaScript keyword or a JavaScript reserved word such as new, if, else, var, function, etc.

Examples:

```javascript
let 3years = 3;
let = 3 years = 3;
let var = 3;
```

We can use reserved words by adding in front of them underscore or dollar sign.

Example:

```javascript
let _var = 3;
let $var = 3;
```

The only reserved word that can be used is "name". But in some cases that can cost a problems. So better to avoid using keyword "name" as a name of our variable.

We **call variables** by using their names in console.log.

Example:

```javascript
console.log(variableName);
```

Variables are like boxes that keep information. We say "declaring variable" when we create a variable. Variables are divide by **let** and **const**.

### What is let and const variable?

- **let** let variable stores values that can be updated within its scope. In technical terms, this is called reassigning a value of a variable or mutate the variable;
- **const** variable maintain constant values and remains the same within its scope. It cannot be changed. In technical terms, this is called an immutable variable.
  Also because const is an immutable we cannot declear empty (Undefined) const varariables.

Example:

```javascript
let personYears = 39;
 const firstName = "Kostadin";
 const personYear; - this is not legal.
```

As a recommendation, we have always used const instead of let variables. let variables we have to use when we are sure that the variable will be changed in time. The reason for this is that it is a good practice to have as little as possible mutate variables.

#### Dynamic typing

When we change the value of a variable we do not need to write again keyword let.

Example:

```javascript
let age = 39;
age = 40;
```

#### Undefined (empty value)

```javascript
let year;
console.log(year);
```

---

## 02. Data types

JavaScript has **7 primitive Data types**

1. **String** - let firstName = "Kotce";
2. **Number** - let age = 39;
3. **Boolean** - logical type that can be only true or false. It is used for taking decisions /let fullAge = true/;
4. **Undefined** - is variable that has no value yet in to store (empty value) /let age/;
5. **Null** - very similar with Undefined;
6. **Symbol** - define a value that is unique and cannot be changed.
7. **Bigint** - It is another type of numbers. It is used for larger integers (numbers) that the Number type cannot hold.

### The Object Data type

The object data type can contain:

1. **An object**
2. **An array**
3. **A date**

In JavaScript value has the type, not the variable. For example, one variable can be a number but later can be changed into a string. This is not a problem, but in longer terms can be a cost for bugs in the code.

JavaScript has dynamic typing which means that we do not have to manually define the data type of the value stored in the variable. Instead, the data type is determined automatically.

### Typeof operator

You can use them to find the data type of a JavaScript variable.

Example:

<pre>
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined"
typeof null                   // Returns "object"
</pre>

### null bug

When we use **typeof** to define **null operator**, JavaScript gives us a bug. It says that null is an object which is not true. It should return undefined.

Example:

```javascript
console.log(typeof null);
```

---

## 03. Basic Operators

What is operator?

An operator allows us to combine or transform values. Becacly they are used to performing specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands. In JavaScript, operators are used to compare values, perform arithmetic operations, etc.

They are many operators - **mathematical**, **logical**, **comparison**, **assigning**, and many more.

- Mathematical operators or Arithmetic operators perform arithmetic on numbers (literals or variables).

They are:

 <pre>
+ 	(Addition)
-	(Subtraction)
*	(Multiplication)
**	(Exponentiation (ES2016))
/	(Division)
%	(Modulus (Remainder))
++	(Increment)
--	(Decrement)
 </pre>

Example for mathematical operatiors:

```javascript
const thisYear = 2023;
const ageKotce = thisYear - 1983;
const ageShara = thisYear - 2018;
console.log(ageKotce, ageShara); // return may age, and Sara`s

console.log(ageKotce * 2, ageKotce / 2);
```

- Concatenation (concat) method joins two or more strings. It does not change the existing string but the return is a new string - a combination between two or more strings.

Example for Concatenation:

```javascript
const firstName = 'Kostadin';
const spaceBetweenNames = ' ';
const secundName = 'Krastev';
console.log(firstName + spaceBetweenNames + secundName); // returns Kostadin Krastev
```

- Assignment operators assign a value to a variable. Also, they can be used as a comparison.
<pre>
Operator	Example	   Same As
=	         x = y	    x = y
+=	         x += y	    x = x + y
-=	         x -= y	    x = x - y
*=	         x *= y	    x = x * y
/=	         x /= y	    x = x / y
%=	         x %= y	    x = x % y
**=	         x **= y	x = x ** y
</pre>

Example for Assignment operators:

```javascript
let x = 10 + 5; // 10 + 5 is done first and then the result is assign to variable x
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 (increasing the value by 1)
x--; // x = x - 1 (decreasing the value by 1)
console.log(x);
```

- The Comarison are used in logical statements to determine equality or difference between variables or values. They return us a boolian - logical type that can be only true or fals. It is used for taking desicisions.
<pre>
Operator	    Description	    Comparing	    Returns	
==	            equal to	    x == 8	        false	
                              x == 5	        true	
                              x == "5"	      true

=== equal value and equal type
x === 5 true
x === "5" false

!= not equal x != 8 true

!== not equal value or not equal type
x !== 5 false
x !== "5" true
x !== 8 true

>             greater than	    x > 8	        false

< less than x < 8 true

> = greater than or equal to

                                x >= 8	        false

<= less than or equal to x <= 8 true

</pre>

Example for Comparioson operators

```javascript
console.log(ageKotce > ageShara);
console.log(ageShara >= 18);

console.log(thisYear - 1991 > thisYear - 2018);
```

---

## 04. Operator Precedence

There is a table in MDN Operator precedence where is discribed the order of execution of every operator.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

```javascript
const thisYear = 2023;
const ageKotce = thisYear - 1983;
const ageShara = thisYear - 2018;

console.log(thisYear - 1991 > thisYear - 2018); // here first is the calculations and then is the comparison.

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // x = y = 10

const averageAge = (ageKotce + ageShara) / 2; // the calculation in the parentheses is done first and then the division

console.log(ageKotce, ageShara, averageAge);
```

---

## 05. Strings and Template Literals

Template literals are enclosed by backtick (`) characters instead of double or single quotes.

Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}.

Example:

```javascript
const templeteLiterals = `I'm ${firstName}`;
```

- Multi-line strings

They are used when we want a new line. For example wen we write a text and whant to start a new row (new line). With milti-line in templet literal we just simply press enter to creat new line (new row).

Example:

```javascript
const someText = `some text 
and a text in a new row (line)`;
```

Multi-line strings are very useful when we build HTML from JavaScript and insert them dynamically.

Example:

```javascript
const firstName = 'Kostadin';
const job = 'SEO and fron-end specialist';
const birthYear = 1983;
const year = 2023;

const whoAmI = `I'm ${firstName}, and my jobs is ${job}. I'm ${
  year - birthYear
} years old.`;

console.log(whoAmI);
```

---

## 06. Taking Decisions if - else Statements

### Conditional Statements

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- **if** to specify a block of code to be executed, if a specified condition is true;
- **else** to specify a block of code to be executed, if the same condition is false;
- **else if** to specify a new condition to test, if the first condition is false;
- **switch** to specify many alternative blocks of code to be executed.

Variables that are created in if else statement are only active in that statemant and cannot be accessible outside of that block.

Example with variable centurey:

```javascript
const birthYear = 1991;
let century; - we created outside the block and lived empty
if (birthYear <= 2000) {
  century = 20; - here inside the block we difine its value
} else {
  century = 21; - here inside the block we difine its value
}
console.log(century);
```

### The if Statement

Use the **if statement** to specify a block of JavaScript code to be executed if a condition is true.

Example:

```javascript
Make a "Good day" greeting if the hour is less than 18:00:

if (hour < pre 18) {
  greeting = "Good day";
}
```

When we use **if statemant** without **else** statemant we cane write it only in one line like this:

```javascript
if (age === 18) console.log('You are an adult');
```

### The else if Statement

We use the **else if statement** to specify a new condition if the first condition is false.

Example:

```javascript
if (favouriteNumber === 23) {
  console.log('Cool!');
} else if (favouriteNumber === 7) {
  console.log('It is a lucky number!');
} else {
  console.log('Not a bad number!');
}
```

### The else Statement

Use the **else statement** to specify a block of code to be executed if the condition is false.

Example:

```javascript
If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

if (hour < pre 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

<u>Lecture task</u>

```javascript
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving licens 🐱‍💻');
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
```

---

## 07. Type Conversion and Coercion

### Type conversion

Type conversion is when we manually convert from one type to another. They are three types that we convert

- to a string;
- to a number;
- to a boolian.

Example for type conversion:

```javascript
const inputYear = '1991';
console.log(inputYear + 18);
```

We can't do this calculation because JavaScript sees "inputYear" as a string. Therefore it will not add 18 to 1991 as a number but will add 18 to 1991 as a string. The result will be 199118.

The solution is to use build in Number function:

```javascript
consol.log(Number(inputYear) + 18);
```

If we want to convert something in to string we use the String function.

Example:

```javascript
consol.log(String(23)) - the number now is a string
```

### Type coercion

Type coercion is when JavaScript automatically converts types for us completely hidden from us.

Example:

```javascript
console.log('I`m ' + 23 + ' years old');
```

here the number 23 will be converted into a string and the result will be (Im 23 years old). Always when we have an operation with addition (+) between a string and a number, the number will be converted into a string. And the opposite when we have an operation with subtraction, multiplication, and division (-, \*, /) between a string and a number, the strings will be converted into a number.

Example:

```javascript
console.log("23" - "10" - 3) - here the result will be 10 because subtraction convert stings into numbers.

console.log("23" * "10" * 3) - here the result will be 690 because multiplication convert string into numbers.

console.log("23" / "2") - here the result will be 11,5 because division convert string into numbres.
```

---

## 08. Truthy and Falsy Values

Falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

The following table provides a complete list of JavaScript falsy values:

<pre>
| Falsy Value | Type      | Description                                                       |
| ----------- | --------- | ----------------------------------------------------------------- |
| `false`     | Boolean   | The Boolean value `false`.                                        |
| `0`         | Number    | The number zero.                                                  |
| `-0`        | Number    | Negative zero (distinct from `0` in some cases).                  |
| `0n`        | BigInt    | BigInt version of zero.                                           |
| `""`        | String    | An empty string.                                                  |
| `null`      | Object    | Represents the intentional absence of any object value.           |
| `undefined` | Undefined | A variable that has not been assigned a value.                    |
| `NaN`       | Number    | "Not-a-Number" result of invalid or undefined numeric operations. |
</pre>

Example for Falsy value:

```javascript
const money = 0;
if (money) {
  console.log('Don`t spend it all');
} else {
  console.log('You should get a job!');
}
```

Here money value is a number 0 (zero). Number 0 (zero) is a false value. There for in this if else statement number 0 will be a falsy value which is why the result of the if else statement will be the string "You should get a job!".
If we change the number 0 into 10 then the result will be true and the printed string will be "Don`t spend it all".

Another example:

```javascript
const firstName;
if(firstName) {
    console.log("Nice to meet you");
} Else {
    console.log("Who are you?")
}
```

In this example the variable firstName is empty. There for an empty variable is a falsy value and the result in this if else statement will be the string "Who are you?".

### Truthy value

Truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except **false**, **0**, **-0**, **0n**, **""**, **null**, **undefined**, and **NaN**.

---

## 09. Equality Operators == vs. === And the not equal operator != vs !==

### What are Comparison Operators in JS?

**Comparison operators** in programming languages are used to compare two values. These operators return a boolean value (true or false) based on the condition. Sence these operators are used in decision making or as conditional statements for loops.

### The == and === operators

**The == and === operators** in JavaScript are comparison operators that we use to determine if two values are equal or not.

The **==** operator performs a loose equality comparison that performs type coercion if necessary to make the comparison possible.

Exampel:

<pre>
"18" == 18
the string will be equal to a number and the result will be true
</pre>

### The === operator

The **===** operator, on the other hand, performs a strict equality comparison that does not perform type coercion and requires the operands to have the same type (as well as the same value).

Exampel:

<pre>
"18" === 18
the string will be not equal to a number and the result will be false
</pre>

As a general rule for a clean code, we must avoid **loose operator (==)** as much as possible.

### The not equal operator != vs !==

### Loose vertion (!=)

Loose version of not equal or **inequality operator (!=)** checks whether two values are not equal and returns a boolean value. This operator tries to compare values irrespective of whether they are of different types.

**The strict version (!==)** does not attempt to do so and returns false if the values are unequal or of different types.

As a general rule for a clean code, we must avoid **loose operator (!=)** as much as possible.

### Lecture task:

Creating a pop-up window with question and field for input the answer. We store it in a variable

```javascript
const favourNumber = prompt('What is your favorite number?');
if (favourNumber == 23) {
  // here 23 is a string. But because we use loose operator (==) the result will be "23" == 23 and the progrm will show the message Cool! That's an amazing number. If we use strict operator (===) the program will not show as the text because string "23" is not equale to the number 23.
  console.log("Cool! That's an amazing number.");
}

// like this
if (faivourNumber === 23) {
  console.log("Cool! That's an amazing number.");
}
```

```javascript
// if we want to work all the code above with strict operator (===) we have to convert the prompt string into a number like this:
const faivourNumber = Number(prompt('What is your favourite numer?')); // converting string into a number
if (faivourNumber === 23) {
  // here number from the variable is no longer a string. There for the result is 23 === 23
  console.log("Cool! That's an amazing number.");
} else if (faivourNumber === 7) {
  console.log('7 is also a coll number.');
} else {
  console.log('Number is not 23 or 7.');
}

if (faivourNumber !== 23) console.log('Why not 23?'); // here !== means different than 23
```

---

## 10. Boolean Logic

Boolean logic is a branch of Computer science that uses true and false values to solve complex logical problems.

Most basic logical operators are:

- **And (&&)**;
- **or (||)**;
- **not (!)**.

---

## 11. Logical Operators

Logical operators are used to determine the logic between variables or values.

<pre>
Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	  Description	         Example
-------------------------------------------
&&	and	    (x < 10 && y > 1)    is true	
-------------------------------------------
||	or	    (x == 5 || y == 5)   is false	
-------------------------------------------
!	not	      !(x == y)            is true
</pre>

- Examples with **&& and** operator

```javascript
const hasDriverLicens = true;
const hasGoodVison = true;

console.log(hasDriverLicens && hasGoodVison); // the result will be true
```

```javascript
const hasDriverLicens = true;
const hasGoodVison = false;

console.log(hasDriverLicens && hasGoodVison); // the result will be false
```

- Example with **|| or** operator

```javascript
const hasDriverLicens = true;
const hasGoodVision = false;

console.log(hasDriverLicens || hasGoodVision); // the result will true. Here is enough for one of the variables to be true for the whole operation to be true.
```

- Example with **! not** operator

```javascript
const hasDriverLicens = true;

console.log(!hasDriverLicens); // the result will be false
```

- Example with **&& and** operator

```javascript
const hasDriverLicens = true;
const hasGoodVision = false;

if (hasDriverLicens && hasGoodVision) {
  console.log('Shara is able to drive');
} else {
  console.log('Someone else should drive.');
}
// here the result will be "Someone else should drive" because hasGoodVision is false. To have "Shara is able to drive" both hasDriverLicens and hasGoodVions must be true.
```

- Example with **&& and** operator, and **! or** operator

```javascript
const hasDriverLicens = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriverLicens && hasGoodVision && !isTired) {
  console.log('Shara is able to drive.');
} else {
  console.log('Someone else should drive.');
}
```

---

## 12. The switch Statement

```javascript
const day = 'thurstday';

switch (day) {
  case 'monday':
    console.log('Planing courses');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Preaper theory videos');
    break;
  case 'wensday':
  case 'thurstday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'monday') {
  console.log('It is monday');
} else if (day === 'thurstday') {
  console.log('It is thurstday');
} else {
  console.log('It is not  a day');
}
```

---

## 14. Statements and Expressions

### Expressions

An **expression** is a piece of code that produces a value. It can be a combination of variables, values, and operators. Expressions can be as simple as a single variable or as complex as a full mathematical equation.

Example:

<pre>
3 + 4 is an expression. Result 7 is their value
At its core, an expression is a bit of JavaScript code that produces a value.
</pre>

For example, these are all expressions:

<pre>
1 → produces 1
"hello" → produces "hello"
5 * 10 → produces 50
num > 100 → produces either true or false
isHappy ? "🙂" : "🙁" → produces an emoji
[1, 2, 3].pop() → produces the number 3
Expressions can contain expressions.
</pre>

### Statements

A **statement** is a complete line of code that performs a specific action. It is like a command that instructs the computer to do something.
Statement is like bigger piece of code that is executed and does not produce a value on it self.
A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

Here are some examples of statements in JavaScript:

```javascript
let hi = 5;

if (hi > 10) {
  // More statements here
}
```

**Statements** are the rigid structure that holds our program together, while **expressions** fill in the details.

Statements often have "slots" for expressions. We can put any expression we like into those slots.

For example, declaring a variable has an expression slot:

```javascript
let hi = // some expression;
```

In summary, **statements** are like complete sentences or commands in JavaScript, while **expressions** are like words that produce values.
An <u>important distinction is that expressions can be part of statements</u>, but not all statements are expressions.
For example, an if statement is not an expression because it doesn't produce a value, while a ternary operator is an expression because it does produce a value.

---

## 15. The Conditional (Ternary) Operator

The **conditional operator**, often referred to as the **ternary operator**, is a compact way to write conditional statements in JavaScript. It provides a shorthand for expressing simple if-else logic in a single line.

The **ternary operator** <u>is often used for short, simple conditional assignments or to provide a default value</u>. However, it's essential to use it judiciously to maintain code readability. <u>Complex conditions or multiple nested ternary operators can make code harder to understand</u>. In such cases, it might be more readable to use traditional if-else statements.

Example for the structure of Ternery operator:

<pre>
condition ? expressionIfTrue : expressionIfFalse;
</pre>

Here's a breakdown of how it works:

- **condition**: An expression that is evaluated to either true or false.
- **expressionIfTrue**: The value to be returned if the condition is true.
- **expressionIfFalse**: The value to be returned if the condition is false.
  The idea is that the entire expression evaluates to expressionIfTrue if the condition is true, and to expressionIfFalse otherwise.

Example:

```javascript
const age = 3;
age >= 18
  ? console.log('I like to drink')
  : console.log("I'am not alowed to drink");
```

We can store Ternery operator in Variables

```javascript
const age = 23;
const drink = age >= 18 ? 'I like to drink wine :)' : "I'm not alowed to drink";
console.log(drink);
```

Example of Ternary operator inside of Template literal

```javascript
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
```

---

## 16. Strict Mode

**Strict mode** is a feature in JavaScript that was introduced in ECMAScript 5 (ES5). It is a way to opt into a restricted version of JavaScript that disallows certain error-prone features or behavior, promotes best practices, and makes it easier to write secure and maintainable code. <u>Strict mode helps catch common coding errors and prevents the usage of some poorly designed features.</u>

To enable strict mode, you simply include the following string at the beginning of a script or a function:

<pre>
"use strict";
</pre>

Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

<u>Using strict mode is generally a good practice because it helps catch errors that might otherwise go unnoticed and enforces better coding habits</u>.

<u>It's important to note that strict mode applies either to the entire script or to an individual function, and it's not reversible</u>. Once strict mode is enabled, it remains in effect for the entire script or function.

When strict mode is enabled, the following changes occur:

- **Variable Declaration**: Variables must be declared with var, let, or const before they are used. Assigning a value to an undeclared variable, or using delete on a variable or function name, is not allowed.

```javascript
// This will throw an error in strict mode
x = 10;
```

- **Assignment Restrictions**: Assigning values to read-only properties, global objects, or non-writable global variables results in an error.

```javascript
// This will throw an error in strict mode
NaN = 42;
```

- **Octal Literal**: Octal literals (e.g., 0123) are not allowed.

```javascript
// This will throw an error in strict mode
var num = 0123;
```

- **Duplicate Parameter Names**: Function parameter names must be unique.

```javascript
// This will throw an error in strict mode
function duplicateParams(a, a) {
  // function body
}
```

- **with Statement**: The use of the with statement is not allowed.

```javascript
// This will throw an error in strict mode
with (obj) {
  // code that uses properties of obj directly
}
```

- **eval and arguments**: Assigning values to eval and arguments is not allowed.

```javascript
// This will throw an error in strict mode
eval = 42;
```

- **this in Functions**: In functions, the this value is undefined if the function is not called as a method or through call/apply.

```javascript
function strictModeExample() {
  console.log(this); // 'undefined' in strict mode
}
strictModeExample();
```

```javascript
'use strict';
let hasDriverLicens = false;
const pastTest = true;
```

---

## 17. Functions

In JavaScript, **functions** are a fundamental building block of the language. They allow you to group code into reusable units and perform specific tasks. <u>Function is a piece of code that we can use over and over in our code</u>. Here are some key aspects of functions in JavaScript:

### Function Declaration:

You can declare a function using the **function keyword**, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

### Function Expression:

You can also create a function using a function expression. <u>In this case, you define an anonymous function and assign it to a variable</u>.

Example:

```javascript
const subtract = function (a, b) {
  return a - b;
};
```

### Arrow Functions:

ES6 introduced arrow functions, a concise way to write functions. They are especially <u>useful for short, anonymous functions</u>.

Example:

```javascript
const multiply = (a, b) => a * b;
```

### Function Invocation:

You can **call or invoke** a function by using its name followed by parentheses containing the arguments.

Example:

```javascript
const result = add(3, 5); // result is now 8
```

### Parameters and Arguments:

**Parameters** are the variables listed in a function's definition, while **arguments** are the values passed into the function when it is called.

Example:

```javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Alice'); // Output: Hello, Alice!
```

### Return Statement:

Functions can return a value using the **return keyword**. <u>If no return statement is present, the function returns undefined.</u>

Example:

```javascript
function square(x) {
  return x * x;
}

const result = square(4); // this means 4*4, and the result is now 16
```

### Scope:

Variables declared inside a function are scoped to that function and are not accessible outside of it.

### Higher-Order Functions:

JavaScript supports higher-order functions, which are functions that can take other functions as arguments or return them.

Example:

```javascript
function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(3, 4, add); // result is now 7
```

These are the basic concepts of functions in JavaScript. They play a crucial role in creating modular and maintainable code.

```javascript
// This is function
function logger() {
  console.log('My name is Kostadin');
}
//This is colled / Calling / Running / Invoking the function
logger();
```

Javascript task:

```javascript
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
```

---

## 18. Function Declarations vs. Expressions

---

## 00A. DOM and Events fundamentals

### What is the DOM?

**DOM** stands for **Document Object Model**. It's a **tree-like structure** that represents the content of an HTML document as objects that JavaScript can interact with.

For example, this HTML:

```html
<body>
  <h1>Hello</h1>
  <button>Click me</button>
</body>
```

Is represented in the DOM as:

<pre>
document
 └── html
     └── body
         ├── h1
         └── button
</pre>

Each element (body, h1, button) becomes a node in the tree. JavaScript can read, modify, or delete these nodes.

### Common DOM Methods

<pre>
| Task                    | JavaScript                         |
| ----------------------- | ---------------------------------- |
| Select an element by ID | `document.getElementById("id")`    |
| Select by class 1 method| `document.querySelector(".class")` |
| Select by class 2 method| `getElementsByClassName('.class')` |
| Change content          | `element.textContent = "New text"` |
| Change style            | `element.style.color = "red"`      |
| Create new element      | `document.createElement("div")`    |
| Append child element    | `parent.appendChild(child)`        |
</pre>

#### Other DOM methods

<pre>
| Task                               | JavaScript                                 |
| ---------------------------------- | ------------------------------------------ |
| Select an element by name 1 method | `getElementsByName('element-name')`        |
| Select an element by name 2 method | `htmlElementName.elements['element-name']` |
</pre>

### What are Events?

**Events** are actions that happen in the browser — like a **click**, **hover**, **keypress**, or **form submission**.

JavaScript can listen for these events and respond with a function, called an **event handler**.

Example: Click Event

```html
<button id="btn">Click Me</button>
<script>
  const button = document.getElementById('btn');
  button.addEventListener('click', function () {
    alert('Button clicked!');
  });
</script>
```

#### Other Common Events

<pre>
| Event Type  | Triggered When...            |
| ----------- | ---------------------------- |
| `click`     | Element is clicked           |
| `mouseover` | Mouse hovers over an element |
| `keydown`   | A key is pressed             |
| `submit`    | A form is submitted          |
| `change`    | Form input value is changed  |
| `load`      | Page finishes loading        |
</pre>

### Event Handling Best Practice: addEventListener

Why use **addEventListener()** instead of **onclick**?

```javascript
// Better
element.addEventListener('click', handler);

// Not recommended
element.onclick = handler;
```

Using <u>**addEventListener**</u> allows **multiple listeners**, doesn't overwrite old ones, and is more flexible.

### Event Object

When an event happens, the browser passes an **event object** to the **handler** (function(event)):

```html
<form id="myForm">
  <input type="text" name="name" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // ⛔ Stop the form from submitting (page reload)
    console.log('Form submission prevented!');
  });
</script>
```

This object contains info like:

- **event.target** — the element that triggered the event.In this case: the <form> element (form id="myForm") because the event type is submit.;
- **event.type** — the type of the event. In this case: "submit" — the event was a form submission.;
- **event.preventDefault()** — cancels the default browser behavior. In this case: stops the page from reloading after the form is submitted.

#### Summary

<pre>
| Concept            | Description                                  |
| ------------------ | -------------------------------------------- |
| **DOM**            | JS-accessible tree structure of your webpage |
| **Event**          | Action that JS can respond to                |
| `addEventListener` | Attaches a function to respond to an event   |
| `event.target`     | The element that triggered the event         |
</pre>

---

## 00B. Selecting and manipulating elements in the DOM

### 1. Selecting Elements

You can select elements in the DOM using several methods:

- By **ID**

```javascript
const element = document.getElementById('myId');
```

- By **Class**

```javascript
const elements = document.getElementsByClassName('myClass'); // Returns HTMLCollection
```

- By **Tag Name**

```javascript
const elements = document.getElementsByTagName('div'); // Also returns HTMLCollection
```

- Using **Query Selector** (Modern and Powerful)

```javascript
const element = document.querySelector('.myClass'); // First match
const elements = document.querySelectorAll('.myClass'); // All matches (NodeList)
```

**Tip**: Use querySelector and querySelectorAll for most cases. They're more flexible.

### 2. Manipulating Elements

Once selected, you can manipulate elements in many ways:

- Change Text Content

```javascript
element.textContent = 'Hello World!';
```

- Change HTML Content

```javascript
element.innerHTML = '<strong>Hello</strong>';
```

- Change Style

```javascript
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
```

- Add/Remove Class

```javascript
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('dark-mode'); // Adds if not present, removes if present
```

- Change Attributes

```javascript
element.setAttribute('src', 'image.jpg');
element.setAttribute('alt', 'A beautiful image');
element.removeAttribute('disabled');
```

### 3. Creating & Inserting Elements

- Create Element

```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'I am new!';
```

- Append to Another Element

```javascript
document.body.appendChild(newDiv);
parentElement.appendChild(newDiv);
```

- Insert Before Another Element

```javascript
parentElement.insertBefore(newDiv, existingChildElement);
```

### 4. Removing Elements

- Remove Specific Element

```javascript
element.remove(); // Modern way
```

- Or via parent

```javascript
element.parentNode.removeChild(element); // Older way
```

<u>**Example:**</u>

```html
<div id="greeting">Hi!</div>
<button id="changeBtn">Click Me</button>
```

```javascript
const btn = document.getElementById('changeBtn');
const greeting = document.getElementById('greeting');

btn.addEventListener('click', () => {
  greeting.textContent = 'Hello, DOM!';
  greeting.style.color = 'blue';
});
```

---

## 00C. Handling click events

### 1. What Is a Click Event?

A **click event** is triggered when the user presses and releases a mouse button over an element (usually the left button).

### 2. Basic Syntax

```javascript
element.addEventListener('click', function () {
  // code to run when element is clicked
});
```

Or using an arrow function:

```javascript
element.addEventListener('click', () => {
  // your code here
});
```

### 3. Example: Button Click

```html
<button id="myBtn">Click Me</button>
<p id="message"></p>
```

```javascript
const btn = document.getElementById('myBtn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  message.textContent = 'You clicked the button!';
});
```

### 4. Reusable Function Example

```javascript
function sayHello() {
  alert('Hello!');
}

document.getElementById('myBtn').addEventListener('click', sayHello);
```

### 5. Handling Multiple Elements

If you want to handle clicks on multiple elements (e.g. all buttons with class .btn):

```javascript
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('Button clicked:', btn.textContent);
  });
});
```

### 6. Accessing the Event Object

You can get info about the click using the event object:

```javascript
btn.addEventListener('click', function (event) {
  console.log(event.target); // element that was clicked
});
```

### 7. Preventing Default Behavior

For example, stopping a link from navigating:

```html
<a href="https://example.com" id="myLink">Click me</a>
```

```javascript
document.getElementById('myLink').addEventListener('click', function (event) {
  event.preventDefault();
  alert('Link clicked, but not going anywhere!');
});
```

### 8. Removing Click Event Listener (optional)

```javascript
function handleClick() {
  alert('Clicked!');
  btn.removeEventListener('click', handleClick);
}

btn.addEventListener('click', handleClick);
```

---

## 00D. Manipulating CSS styles

Manipulating CSS styles with JavaScript lets you dynamically change how elements look — like changing colors, sizes, visibility, or adding animations.

### 1. Using element.style

You can directly change the inline style of an element:

```javascript
const box = document.getElementById('box');
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.display = 'none';
```

<u>**Note**</u>: Property names use camelCase (e.g., **backgroundColor**, not **background-color**).

Example:

```html
<div id="box" style="width:100px; height:100px; background:red;"></div>
<button id="changeBtn">Change Style</button>
```

```javascript
const box = document.getElementById('box');
const btn = document.getElementById('changeBtn');

btn.addEventListener('click', () => {
  box.style.backgroundColor = 'green';
  box.style.borderRadius = '10px';
});
```

### 2. Toggling Styles

To turn styles on/off:

```javascript
box.style.display = box.style.display === 'none' ? 'block' : 'none';
```

Or toggle class instead (recommended 👇).

### 3. Using classList (Better Practice)

- Add a class:

```javascript
element.classList.add('active');
```

- Remove a class:

```javascript
element.classList.remove('hidden');
```

- Toggle a class:

```javascript
element.classList.toggle('dark-mode');
```

**Why better**? It keeps your JavaScript clean and your CSS in the stylesheet, not inline.

### 4. Example with classList

```html
<style>
  #highlightBtn {
    background-color: yellow;
    font-weight: bold;
  }
</style>

<p id="text">Click the button to highlight this text.</p>
<button id="highlightBtn">Highlight</button>
```

```javascript
const text = document.getElementById('text');
const btn = document.getElementById('highlightBtn');

btn.addEventListener('click', () => {
  text.classList.toggle('highlight');
});
```

### 5. Get Computed Styles

To read styles applied via CSS (not inline):

```javascript
const styles = window.getComputedStyle(element);
console.log(styles.color); // e.g., "rgb(255, 0, 0)"
```

### Summary

<pre>
| Task                        | Method                                  |
| --------------------------- | --------------------------------------- |
| Change inline style         | `element.style.property = value`        |
| Add/remove/toggle CSS class | `element.classList.add/remove/toggle()` |
| Read final CSS value        | `window.getComputedStyle(element)`      |
</pre>
