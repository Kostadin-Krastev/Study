/* LECTURE: Values and Variables
 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

const country = "Bulgaria";
const continent = "Europe";
const population = 5000000;

console.log(country, continent, population);
*/

/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

const isIsland = false;
const population = 5000000;
const country = "Bulgaria";
const language = "bulgarian";

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
*/

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens

no need to exercies this!
*/

/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?

let populationOfBulgaria = 5000000;
console.log(populationOfBulgaria / 2);

/*
2. Increase the population of your country by 1 and log the result to the console

populationOfBulgaria++;
console.log(populationOfBulgaria);

/*
4. The average population of a country is 33 million people. Does your country
have less people than the average country?

const averageCountryPopulation = 33000000;
console.log(averageCountryPopulation > populationOfBulgaria);

/*
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'


const description =
  "Bulgaria is in Europe, and its 5 million people speak bulgarian";
console.log(description);
*/

/*
LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax


let populationOfBulgaria = 5000000;
// creating description "Bulgaria is in Europe, and its 5 million people speak bulgarian"
const description = `Bulgaria is in Europe, and its ${populationOfBulgaria} million people speaks bulgarian`;
console.log(description);
*/

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original


let populationOfBulgaria = 5000000;
populationOfBulgaria = 13000000;
populationOfBulgaria = 130000000;
const averageCountryPopulation = 33000000;

if (populationOfBulgaria > averageCountryPopulation) {
  console.log("Bulgaria's population is above average");
} else {
  console.log(
    `Bulgaria's population is ${
      averageCountryPopulation - populationOfBulgaria
    } million below average`
  );
}
*/

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143
2. Execute the operations to check if you were right

const test = "9" - "5";
console.log(test);
*/

/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation


// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?");

// LATER : This helps us prevent bugs
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)


if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More then 1 border");
} else {
  console.log("No borders");
}

console.log(numNeighbours);
*/

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)


const countryLanguage = "bulgarian";
let countryPopulation = 5000000;
const isIsland = false;

if (
  countryLanguage === "elnglish" &&
  countryPopulation < 50000000 &&
  !isIsland
) {
  console.log("You should live in Bulgaria");
} else {
  console.log("Bulgaria does not meet your criteria");
}
*/
/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'


let language = "engl";

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Not a valid language");
}
*/

/*
LECTURE: The Conditional (Ternary) Operator
*/

/*
What is Value?
Value is a piece of data. It is the smallest unit of information that we have in JavaScript. Values are dividet by strings and numbers. String are type inside quotation marks or dubble quotation marks.
Example:
"Kotce"
Numbers are type without quotation marks.
*/

/*
What are Variables?
Variables store values. Before assigning a variable value, we must give a name to that variable. A variable name should always describe what variable is storing. That way we can easily understand what variable we are looking at.
Example:
const firstName = "Kostadin"

For variable names we can use only letters, _ (underscore), $ (the dolar sign), and numbers (but variable names can not begin with numbers). There are rules how we have to write variables names and they are:
- every name should be written with small letter if it is one word.
- Camel case - when the name is more then one word. We write first word with small letter and then every after word with capital letter. It is a standart to write names like this in JavaScript
Example:
firstNamePerson
- Underscore _
Example:
first_name_person

They are illegal names for variables. We cannot start a name with a number, space and most importantly they cannot be a JavaScript keyword or a JavaScript reserved word such as new, if, else, var, function, etc.
Examples:
let 3years = 3;
let = 3 years = 3;
let new = 3;

We can use reserved words by adding in front of them underscore or dollar sign.
Example:
let _new = 3;
let $new= 3;

The only reserved word that can be used is name. but in some cases that can cost a problems. So better to avoid using keyword name as a name of our variable.

We call variables by using their names in console.log.
Example:
console.log(firstName)
Variables are like boxes that keep information. We say "declaring variable" when we create a variable. Variables are dividet by let and const.
*/

/**
 What is let and const variable?
 - let variable stores values that can be updated within its scope;
 - const variable maintain constant values and remains the same within its scope.
 Example:
 let personYears = 39;
 const firstName = "Kostadin";
 */

/**
 JavaScript has 7 primitive Data types
1. String / let firstName = "Kotce";
2. Number / let age = 39;
3. Boolean / logical type that can be only true or fals. It is used for taking desicisions / let fullAge = true;
4. Undefined / is variable that has no value yet in to store (empty value) / let age;
5. Null / very similar with Undefined;
6. Symbol / define a value that is unique and cannot be changed.
7. Bigint / It is another type of numbers. It is used for larger integers (numbers) that the Number type cannot hold.

The Object Data type
The object data type can contain:

1. An object
2. An array
3. A date
 */

/*
 In JavaScript value has the type, not the variable. For example, one variable can be a number but later can be changed into a string. This is not a problem, but in longer terms can be a cost for bugs in the code.
JavaScript has dynamic typing which means that we do not have to manually define the data type of the value stored in the variable. Instead, the data type is determined automatically.
 */

/* Boolian example
let javasriptIsFun = true;
console.log(javasriptIsFun);
*/
/**
 typeof operator - You can use it to find the data type of a JavaScript variable.
 Example:
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
 */

/* typeof operator
let javasriptIsFun = true;
console.log(typeof javasriptIsFun);
*/

/*Dynamic typing
When we change the value of a veriable we do not need to write again keyword let. 
Example:
let age = 39;
age = 40; 
*/

/*
Undefined (empty value)
let year;
console.log(year);
 */

/* null bug
when we use typeof to define null operator, JavaScript gives us a bug. It says that null is an object which is not true. It should return undefined.
Example:
console.log(typeof null);
*/

/**
Basic Operators:
What is operator?
An operator allows us to combine or transform values. Becacly they are used to performing specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands. In JavaScript, operators are used to compare values, perform arithmetic operations, etc. 

They are many operatiors - mathematical, logical, comparison, assigning, and many more.
 */

/**
 Mathematical operators or Arithmetic operators perform arithmetic on numbers (literals or variables).
 Thye are:
+ 	(Addition)
-	(Subtraction)
*	(Multiplication)
**	(Exponentiation (ES2016))
/	(Division)
%	(Modulus (Remainder))
++	(Increment)
--	(Decrement)
 */

// Example for mathematical operatiors:
const thisYear = 2023;
const ageKotce = thisYear - 1983;
const ageShara = thisYear - 2018;
console.log(ageKotce, ageShara);

console.log(ageKotce * 2, ageKotce / 2);

// Concatenation (concat) method joins two or more strings. He does not change the existing string but the return is a new string - a combination between two or more strings.

// Example for Concatenation:
const firstName = "Kostadin";
const spaceBetweenNames = " ";
const secundName = "Krastev";
console.log(firstName + spaceBetweenNames + secundName);

/*  
Assignment operators assign a value to a variable. Also, they can be used as a comparison.

Operator	Example	   Same As
=	         x = y	    x = y
+=	         x += y	    x = x + y
-=	         x -= y	    x = x - y
*=	         x *= y	    x = x * y
/=	         x /= y	    x = x / y
%=	         x %= y	    x = x % y
**=	         x **= y	x = x ** y
*/

// Example for Assignment operators
let x = 10 + 5; // 10 + 5 is done first and then the result is assign to variable x
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 (increasing the value by 1)
x--; // x = x - 1 (decreasing the value by 1)
console.log(x);

/**
 Comparison operators:
 The Comarison are used in logical statements to determine equality or difference between variables or values. They return us a boolian - logical type that can be only true or fals. It is used for taking desicisions.

 Operator	    Description	    Comparing	    Returns	
==	            equal to	    x == 8	        false	
                                x == 5	        true	
                                x == "5"	    true	
===	    equal value and equal type	
                                x === 5	        true	
                                x === "5"	    false	
!=	            not equal	    x != 8	        true	
!==	    not equal value or not equal type	
                                x !== 5	        false	
                                x !== "5"	    true	
                                x !== 8	        true	
>	        greater than	    x > 8	        false	
<	        less than	        x < 8	        true	
>=	    greater than or equal to	
                                x >= 8	        false	
<=	    less than or equal to	x <= 8	        true
 */

// Example for Comparioson operators
console.log(ageKotce > ageShara);
console.log(ageShara >= 18);

/**
 5. Operator Precedence:
 
 the is a table in MDN Operator precedence where is discribed the order of execution of every operatior.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 */

const thisYear = 2023;
const ageKotce = thisYear - 1983;
const ageShara = thisYear - 2018;

console.log(thisYear - 1991 > thisYear - 2018); // here first is the calculations and then is the comparison.

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // x = y = 10

const averageAge = (ageKotce + ageShara) / 2; // the calculation in the parentheses is done first and then the division

console.log(ageKotce, ageShara, averageAge);

/**
 06. Strings and Template Literals
 Template literals are enclosed by backtick (`) characters instead of double or single quotes.

Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}. 
Example:
const templeteLiterals = `I'm ${firstName}`

Multi-line strings
Thy are used when we want a new line. For example wen we write a text and whant to start a new row (new line). With milti-line in templet literal we just simply press enter to creat new line (new row).
Example:
const someText = `some text 
and a text in a new row (line)`

Multi-line strings are very useful when we build HTML from JavaScript and insert them dinamicly.
 */

const firstName = "Kostadin";
const job = "SEO and fron-end specialist";
const birthYear = 1983;
const year = 2023;

const whoImI = `I'm ${firstName}, and my jobs is ${job}. I'm ${
  year - birthYear
} years old.`;

console.log(whoImI);

/**
 5. Operator Precedence:
 
 the is a table in MDN Operator precedence where is discribed the order of execution of every operatior.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 */

const thisYear = 2023;
const ageKotce = thisYear - 1983;
const ageShara = thisYear - 2018;

console.log(thisYear - 1991 > thisYear - 2018); // here first are the calculations and then is the comparison.

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // x = y = 10

const averageAge = (ageKotce + ageShara) / 2; // the calculation in the parentheses is done first and then the division

console.log(ageKotce, ageShara, averageAge);

/**
 06. Strings and Template Literals
 Template literals are enclosed by backtick (`) characters instead of double or single quotes.

Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}. 
Example:
const templeteLiterals = `I'm ${firstName}`

Multi-line strings
Thy are used when we want a new line. For example wen we write a text and whant to start a new row (new line). With milti-line in templet literal we just simply press enter to creat new line (new row).
Example:
const someText = `some text 
and a text in a new row (line)`

Multi-line strings are veru useful when we build HTML from JavaScript and insert them dinamicly.
 */

const firstName = "Kostadin";
const job = "SEO and fron-end specialist";
const birthYear = 1983;
const year = 2023;

const whoImI = `I'm ${firstName}, and my jobs is ${job}. I'm ${
  year - birthYear
} years old.`;

console.log(whoImI);

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

// 8 Type Conversion and Coercion

/*
- type conversion is when we manually convert from one type to another. They are three types that we convert - to a string, to a number, and to a boolian.
    Example for type conversion:
    const inputYear = 1991;
    console.log(inputYear + 18); - we can`t do this calculation because JavaScript sees "inputYear" as a string. Therefore it will not add 18 to 1991 as a number but will add 18 to 1991 as a string. The result will be 199118.
    The solution is to use build in Number function:
    consol.log(Number(inputYear) + 18);

    If we want to convert something in to string we use the String function.
    Example:
    consol.log(String(23)) - the number now is a string


- type coercion is when JavaScript automatically converts types for us completely hidden from us.
    Example:
    console.log("I`m " + 23 + " years old") - here the number will converted into a string and the result will be (I`m 23 years old). Always when we have an operation with addition (+) between a string and a number, the number will be converted into a string. And the opposite when we have an operation with subtraction, multiplication, and division (-, *, /) between a string and a number, the strings will be converted into a number.
    Example:
    console.log("23" - "10" - 3) - here the result will be 10.
    console.log("23" * "10" * 3) - here the result will be 690.
    console.log("23" / "2") - here the result will be 11,5.
*/

// 9. Truthy and Falsy Values

/*
 Falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

The following table provides a complete list of JavaScript falsy values:

Value	        Type	    Description
null	        Null	    The keyword null — the absence of any value.

undefined	    Undefined	undefined — the primitive value.
-------------------------------------------------------------------------------------------
false	        Boolean	    The keyword false.
-------------------------------------------------------------------------------------------
NaN	            Number	    NaN — not a number.
-------------------------------------------------------------------------------------------
0	            Number	    The Number zero, also including 0.0, 0x0, etc.
-------------------------------------------------------------------------------------------
-0	            Number	    The Number negative zero, also including -0.0, -0x0, etc.
-------------------------------------------------------------------------------------------
0n	            BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
-------------------------------------------------------------------------------------------
""	            String	    Empty string value, also including '' and ``.
-------------------------------------------------------------------------------------------
document.all    Object	T   he only falsy object in JavaScript is the built-in document.all.
-------------------------------------------------------------------------------------------

Example for Falsy value:
const money = 0;
if(money) {
    console.log("Don`t spend it all");
} else {
    console.log("You should get a job!");
}
Here money value is a number 0 (zero). Number 0 (zero) is a false value. There for in this if else statement number 0 will be a falsy value which is why the result of the if else statement will be the string "You should get a job!".
If we change the number 0 into 10 then the result will be true and the printed string will be "Don`t spend it all".

Another example:
const firstName;
if(firstName) {
    console.log("Nice to meet you");
} Else {
    console.log("Who are you?")
}
In this example the variable firstName is empty. There for an empty variable is a falsy value and the result in this if else statemant will be the string "Who are you?".
 */

/*
Truthy value: 
is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
*/

// 10. Equality Operators == vs. === And the not equal operator != vs !==

/*
What are Comparison Operators in JS?
Comparison operators in programming languages are used to compare two values. These operators return a boolean value (true or false) based on the condition. Hence these operators are used in decision making or as conditional statements for loops.
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

// 11 Boolean Logic

/*
Boolean logic is a branch of Computer science that uses true and false values to solve complex logical problems.

Most basic logical operators are And (&&), or (||) and not (!). 
*/

//12. Logical Operators

/*
Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	Description	         Example
-------------------------------------------
&&	and	    (x < 10 && y > 1)    is true	
-------------------------------------------
||	or	    (x == 5 || y == 5)   is false	
-------------------------------------------
!	not	    !(x == y)            is true
 */

// Examples with && and operator
/*
const hasDriverLicens = true;
const hasGoodVison = true;

console.log(hasDriverLicens && hasGoodVison); // the result will be true
*/
/*
const hasDriverLicens = true;
const hasGoodVison = false;

console.log(hasDriverLicens && hasGoodVison); // the result will be false
*/

/*
// Examples with || or operator
const hasDriverLicens = true;
const hasGoodVision = false;

console.log(hasDriverLicens || hasGoodVision); // the result will true. Here is enough for one of the variables to be true for the whole operation to be true.
*/
/*
// Examples with ! not operator
const hasDriverLicens = true;

console.log(!hasDriverLicens); // the result will be false
*/

/*
// Example with && and operator
const hasDriverLicens = true;
const hasGoodVision = false;

if (hasDriverLicens && hasGoodVision) {
  console.log("Shara is able to drive");
} else {
  console.log("Someone else should drive.");
}
// here the result will be "Someone else should drive" because hasGoodVision is false. To have "Shara is able to drive" both hasDriverLicens and hasGoodVions must be true.
*/

// Example with && and operator, and ! or operator
const hasDriverLicens = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriverLicens && hasGoodVision && !isTired) {
  console.log("Shara is able to drive.");
} else {
  console.log("Someone else should drive.");
}

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

// 16. Strict Mode
/*
 Strict mode is a feature in JavaScript that was introduced in ECMAScript 5 (ES5). It is a way to opt into a restricted version of JavaScript that disallows certain error-prone features or behavior, promotes best practices, and makes it easier to write secure and maintainable code. Strict mode helps catch common coding errors and prevents the usage of some poorly designed features.

To enable strict mode, you simply include the following string at the beginning of a script or a function:
"use strict";

Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

Using strict mode is generally a good practice because it helps catch errors that might otherwise go unnoticed and enforces better coding habits. It's important to note that strict mode applies either to the entire script or to an individual function, and it's not reversible. Once strict mode is enabled, it remains in effect for the entire script or function.

When strict mode is enabled, the following changes occur:

- Variable Declaration: Variables must be declared with var, let, or const before they are used. Assigning a value to an undeclared variable, or using delete on a variable or function name, is not allowed.
// This will throw an error in strict mode
x = 10;

- Assignment Restrictions: Assigning values to read-only properties, global objects, or non-writable global variables results in an error.
// This will throw an error in strict mode
NaN = 42;

- Octal Literal: Octal literals (e.g., 0123) are not allowed.
// This will throw an error in strict mode
var num = 0123;

- Duplicate Parameter Names: Function parameter names must be unique.
// This will throw an error in strict mode
function duplicateParams(a, a) {
    // function body
}

- with Statement: The use of the with statement is not allowed.
// This will throw an error in strict mode
with (obj) {
    // code that uses properties of obj directly
}

- eval and arguments: Assigning values to eval and arguments is not allowed.
// This will throw an error in strict mode
eval = 42;

- this in Functions: In functions, the this value is undefined if the function is not called as a method or through call/apply.
function strictModeExample() {
    console.log(this); // 'undefined' in strict mode
}
strictModeExample();
*/

("use strict");
let hasDriverLicens = false;
const pastTest = true;

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

// Making another juice with the same function
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

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

// 20. Functions Calling Other Functions

/*
In JavaScript, you can have functions call other functions, which is a fundamental concept in programming known as function composition. This allows you to break down complex problems into smaller, more manageable parts.

Here's a basic example to illustrate function calling in JavaScript:
// Function that adds two numbers
function add(a, b) {
  return a + b;
}

// Function that squares a number
function square(x) {
  return x * x;
}

// Function that combines the above functions
function addAndSquare(c, d) {
  // Calling the add function
  const sum = add(c, d);
  
  // Calling the square function
  const result = square(sum);

  return result;
}

// Example usage
const result = addAndSquare(2, 3);
console.log(result); // Output: 25

In this example, the addAndSquare function calls both the add and square functions to perform a sequence of operations. This makes the code more modular and easier to understand.

Here are the steps in the addAndSquare function:
1. It calls the add function with parameters c and d and stores the result in the variable sum.

2. Then calls the square function with the result from step 1 (sum) and stores the final result in the variable result.

3. The final result is returned.
*/

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // calling function cutFruitPieces and storing it in variable applePieces
  const orangePieces = cutFruitPieces(oranges); // calling function cutFruitPieces and storing it in variable orangePieces
  const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// 21. Reviewing Functions

/*
- Function declarations are functions that can be used before it's declared in the code.
- Function expresion are functions that are value stored in a variable.
- Arrow functions they are also function expresions, and are great for one-line functions. 
*/

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires after ${retirement} years`;
  } else {
    return `${firstName} is already retired`;
  }
};

console.log(yearsUntilRetirement(1991, "Jonos"));
console.log(yearsUntilRetirement(1970, "Mike"));

// 22. Introduction to Arrays
/*
An array is a special variable, which can hold more than one value.
Example:
const cars = ["Saab", "Volvo", "BMW"];

In JavaScript, an array is a data structure that allows you to store and organize multiple values. Arrays can hold elements of different data types, and they are one of the most commonly used data structures in JavaScript. 

You can declare an array using the Array constructor or using the array literal syntax []
Example:
// Using array literal syntax
const myArrayLiteral = [];

// Using Array constructor (always we have to use the keyword 'new')
const myArray = new Array();

- Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
const car1 = "Saab";
const car2 = "Volvo";
const car3 = "BMW";

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

- Creating an Array:
Using an array literal is the easiest way to create a JavaScript Array.
It is a common practice to declare arrays with the const keyword.
Example:
const cars = ["Saab", "Volvo", "BMW"];

Spaces and line breaks are not important. A declaration can span multiple lines.
Example:
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

You can also create an array, and then provide the elements.
Example:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

- Using the JavaScript Keyword new:
The following example also creates an Array, and assigns values to it.
Example:
const cars = new Array("Saab", "Volvo", "BMW");

The two examples above do exactly the same. There is no need to use new Array().
For simplicity, readability and execution speed, use the array literal method.

- Accessing Array Elements:
You access an array element by referring to the index number.
Example:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); // this will call "Saab" car, because [0] is the first element. [1] is the second element.

Note: 
Array indexes start with 0.
[0] is the first element. [1] is the second element.

- Array Length:
The length property of an array gives you the number of elements in the array.
Example:
//Array
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars.length); // the answer is 3. It is not 0 based so it will count the cars from 1, and there are 3 cars (Saab, Volvo, and BMW)

The length property is always one more than the highest array index. So wen we accessing the last element in the Array we are using - 1, not - 2.

- Accessing the Last Array Element:
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]); // the result will be Mango. if its - 2 it will be Apple. This is because the length property is always one more than the highest array index.

- Changing an Array Element:
This statement changes the value of the first element in cars:
cars[0] = "Opel"; // cars is the name of the Array, [0] is the position of the element we want to change, and "Opel" is the new element.
Example:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
Important!
We cannot replace the entire Array at once. I need to understand more about that!!!
Example:
const cars = ["Saab", "Volvo", "BMW"];
cars = cars["Opel", "Mercedes", "Audi"];

- Putting Array inside of an Array:
We can put an Array inside of an Array.
Example:
const friends = ["Bob", "Go6o", "sa6o"];
const carsAndFriends = ["Saab", "Opel", "Mercedes", friends];

Arrays in JavaScript are versatile and provide a powerful way to work with collections of data. They play a crucial role in web development, especially when dealing with lists of items or managing data in a structured format.
 */
// The Array
const friends = ["Michle", "Go6o", "Sa6o"];

// calling Michle from Array frinds
console.log(friends[0]);

// Calling Go6o from Array frinds
console.log(friends[1]);

// Calling the last element (Sa6o) in the Array frends
console.log(friends[friends.length - 1]);

// Replacing element in the Array friends
friends[2] = "Tomy";
console.log(friends);

// friends = ["Opel", "Mercedes", "Audi"]; - we cannot replace the entire Array

// Putting Array frinds inside the Array carsAndFrinds
const carsAndFriends = ["Saab", "Opel", "Mercedes", friends];

console.log(carsAndFriends);

// Creating Array for Jonas info
const firstName = "Jonas";
const jonas = [firstName, "Schmeddman", 2037 - 1991, "teacher", friends];

console.log(jonas);

// Exercise for Array
// function for calculating age
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Array storing years
const years = [1990, 1967, 2002, 2010, 2018];

// Variables storing calculation from function calcAge and parametars from Array years
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// Creating Array wich calculate years by storing function calcAge and parametars from Array years
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Exercise from ChatGTP
/*
Task: Array Manipulation

Write a JavaScript program that performs the following operations on an array of numbers:

1. Create an array of numbers (you can choose the numbers).
2. Print the original array.
3. Add a new number to the end of the array.
4. Remove the first number from the array.
5. Print the final array after these operations.
*/

// Task 1: creating an Array that is storing numbers
const randomNumbers = [1, 7, 5, 10];

// Task 2: print the Array
// console.log(randomNumbers);

// Task 3: adding number in the last position of the Array
randomNumbers[randomNumbers.length - 1] = 11;
// console.log(randomNumbers);

// Task 4: Removing first number from the Array
randomNumbers.shift(0);

console.log(randomNumbers);

// 23. Basic Array Operations (Methods)

/*
- Basic Array Methods:
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()

- Array length
The length property returns the length (size) of an array:
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

- Array toString()
The JavaScript method toString() converts an array to a string of (comma separated) array values.

Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Result:
Banana,Orange,Apple,Mango

- Array at()
ES2022 intoduced the array method at():

Examples:
Get the third element of fruits using at():

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

Get the third element of fruits using []:
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];

The at() method returns an indexed element from an array.
The at() method returns the same as [].
The at() method is supported in all modern browsers since March 2022.
Note:
Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
The at() method was introduced in ES2022 to solve this problem.

- Array join()
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Result:
Banana * Orange * Apple * Mango

-----------------------------------------

Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.
This is what popping and pushing is:
Popping items out of an array, or pushing items into an array.

- Array pop()
The pop() method removes the last element from an array.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

The pop() method returns the value that was "popped out".
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

- Array push()
The push() method adds a new element to an array (at the end).
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

The push() method returns the new array length.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

-----------------------------

Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.

- Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

The shift() method returns the value that was "shifted out".
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();

- Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

The unshift() method returns the new array length.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

------------------------

Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

- Array length
The length property provides an easy way to add a new element to an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi"; // Kiwi is add at the back as a last element.

- Array delete()
Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

---------------------

Finding the Index of an Element:

indexOf(): Returns the index of the first occurrence of a specified element in an array. If the element is not found, it returns -1.
Example:
const fruits = ['apple', 'banana', 'orange'];
const index = fruits.indexOf('banana'); // the result is 1, because bannana is on secund position, and as we know 0 is the first posiotion in a Array

----------------------
- Array .includes()
.includes() method is used to check whether an array includes a specific element. 
It returns a boolean value:
- returns true if an array contains a specified value.
- returns false if the value is not found.
The includes() method is case sensitive, and its strict (does not covert a string into a number).
Example:
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // Expected output: true

console.log(pets.includes('at')); // Expected output: false
*/

const friends = ["Michael", "Steven", "Peter"];
// Add elements
// at the back of the Array with .push
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//at the front of the Array with .unshift
friends.unshift("John");
console.log(friends);

// Remove elements
// the last element with .pop
friends.pop();
console.log(friends);

// the first element with .shift
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// 24. Introduction to Objects #42

/*
In JavaScript, most things are objects, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. 

- Booleans can be objects (if defined with the new keyword)
- Numbers can be objects (if defined with the new keyword)
- Strings can be objects (if defined with the new keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects

All JavaScript values, except primitives, are objects.

You can even create your own objects to encapsulate related functions and variables into efficient packages and act as handy data containers. 

An object is a complex data type that allows you to store and organize data in key-value pairs. Objects are one of the fundamental concepts in the language, and they provide a way to represent and structure data in a more flexible manner. 

---------------------------------------------------
Object Creation:
You can create an object using object literal notation or the Object constructor. (more in the next lecture)

- Object Literal:
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

- Object Constructor:
let person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";

----------------------------------------------------
    JavaScript Primitives
A primitive value is a value that has no properties or methods.

3.14 is a primitive value

A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:
- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Immutable
Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

Example:
Value	    Type	        Comment
------------------------------------------------------
"Hello"	  string	       "Hello" is always "Hello"
3.14	    number	        3.14 is always 3.14
true	    boolean	        true is always true
false	    boolean	        false is always false
null	    null (object)	null is always null
undefined	undefined	    undefined is always undefined

---------------------------------------------------------
    Objects are Variables
JavaScript variables can contain single values.
Example:
const person = "John Doe";

JavaScript variables can also contain many values. Objects are variables too. But objects can contain many values.

Object values are written as:
name : value pairs (name and value separated by a colon).

Example:
let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

A JavaScript object is a collection of named values

It is a common practice to declare objects with the const keyword.

Example:
const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

-------------------------------------------------------------
    Object Properties
The named values, in JavaScript objects, are called properties.

Property	    Value
---------------------
firstName	    John
lastName	    Doe
age	            50
eyeColor	    blue

Overall we should use Array for moe structured datta, and Object for more 
*/

// Example of an Array that can be modified as an object for better coding and understanding
const jonasArray = [
  "Jonas",
  "Shemdmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Example of an object - we turn the Array jonasArray into an object jonas
const jonas = {
  firstName: "Jonas",
  lastName: "Shemdamann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// 25. Dot vs. Bracket Notation #43

/*
In JavaScript, both dot notation (.) and bracket notation ([]) are used to access and manipulate properties of objects. However, they have some differences in terms of syntax and use cases:

---------------------------------------------
- Dot Notation:

Syntax: object.property

Used when the property name is a valid identifier (starts with a letter, doesn't contain spaces or special characters except for _).
More concise and easier to read in certain cases.
Example:
const person = {
  name: 'John',
  age: 25,
  address: {
    city: 'New York',
    state: 'NY'
  }
};

console.log(person.name); // Output: John
console.log(person.address.city); // Output: New York

Pros of Dot Notation:

- Dot notation is easy to read and understand, especially for developers who are familiar with object-oriented programming.

- It provides a clean and concise syntax, making it easier to write and maintain code.

- Dot notation is faster than bracket notation, as it doesn’t require any additional processing.

Cons of Dot Notation:

- Dot notation cannot be used for properties with special characters or spaces in their names.

- It cannot be used for accessing properties dynamically.

----------------------------------------------
- Bracket Notation:

Syntax: object["property"] or object[expression]
Used when the property name is not a valid identifier, or when the property name is stored in a variable or is the result of an expression.
More flexible than dot notation.
Examples:
const person = {
  name: 'John',
  age: 25,
  address: {
    city: 'New York',
    state: 'NY'
  }
};

console.log(person['name']); // Output: John
console.log(person['address']['city']); // Output: New York

Pros of Bracket Notation:

- Bracket notation can be used for accessing properties dynamically, as the property name can be passed as a variable.

- It can be used for accessing properties with special characters or spaces in their names.

Cons of Bracket Notation:

- Bracket notation is slightly slower than dot notation, as it requires additional processing to evaluate the property name.

- It can be more verbose and harder to read, especially for developers who are not familiar with the syntax.
*/

const jonas = {
  firstName: "Jonas",
  lastName: "Shemdamann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas.lastName);
console.log(jonas["friends"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// Creating prompt
const intrestedIn = prompt(
  "What did you whant to know about Jonas? Choose between firstName, lastName, age, job, and friends."
);
console.log(jonas[intrestedIn]);

// Creating message that is shown to the user if he inputs something that does not exist
if (jonas[intrestedIn]) {
  console.log(jonas[intrestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends."
  );
}

// Adding new properties in the object
jonas.location = "Portugal";
jonas["tweeter"] = "@something";
console.log(jonas);

// Challenge
// Jonas has 3 friends, and his best friend is called Michal

console.log(
  `${jonas.firstName} has ${
    jonas["friends".lenght]
  } friends, and his best friend is called ${frinds[0]}.`
);

// 26. Object Methods 044
/*
Methods are actions that can be performed on objects.

Object properties can be both primitive values, other objects, and functions.

An object method is an object property containing a function definition.

Property	    Value
-------------------------------------------------------------------------
firstName	    John
lastName	    Doe
age	            50
eyeColor	    blue
fullName	    function() {return this.firstName + " " + this.lastName;}
-------------------------------------------------------------------------

JavaScript objects are containers for named values, called properties and methods. Methods are functions stored as object properties.

--------------------------------------------
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

In other words, this keyword is equal to the object calling the method.

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

The this keyword is a special keyword that refers to the current instance of an object in which the code is being executed. The value of this is determined by how a function is called or how it is used within the context of an object.

The behavior of this can be a source of confusion for beginners, as it is context-dependent. Here are some common scenarios:

- Global Context:
When used outside of any function or object, this refers to the global object. In a browser environment, the global object is usually the window object.
Example:
console.log(this === window); // Output: true

- Function Context:
When used within a function (not a method of an object), this still refers to the global object. However, in strict mode ('use strict';), this remains undefined.
Example:
function showThis() {
  console.log(this);
}

showThis(); // Output depends on whether in strict mode or not

- Object Method:
When this is used inside a method of an object, it refers to the object itself.
Example:
let person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // Output: Hello, my name is John

- Constructor Function:
Inside a constructor function, this refers to the instance of the object being created.
Example:
function Dog(name) {
  this.name = name;
}

let myDog = new Dog('Buddy');
console.log(myDog.name); // Output: Buddy

Understanding the context in which a function is called is crucial for correctly interpreting the value of this in JavaScript. 

Arrow functions, unlike regular functions, do not have their own this context; they inherit it from the enclosing scope. This behavior can be beneficial in certain scenarios, especially when dealing with callback functions or event handlers.
*/

const jonas = {
  firstName: "Jonas",
  lastName: "Shmedmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michele", "Peter", "Steven"],
  hasDriverLicense: true,
  // Using normal function expresion
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // Using this keyword in function expresion
  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },

  //   Creating this.age inside the function expresion
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // Part of the teacher solution of the chalenge
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver license`;
  },
};
// Here we calculate the age, and we have to do it only once
console.log(jonas.calcAge());

// Here we retrieve the result of the calculation that we do before. This is the most efficient solution
console.log(jonas.age);

// Chalenge
//"Jonas is 46-years old teacher, and he has a driver license."
// My solution
/* 
console.log(
  `${jonas.firstName} is ${jonas.age}-years old ${jonas.job}, and he ${
    jonas.hasDriverLicense
      ? "has a driver license."
      : "does not have a driver license."
  }`
);
*/

// Teacher solution - he creates a proparty getSummary inside of the object Jonas
console.log(jonas.getSummary());
