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

const whoAmI = `I'm ${firstName}, and my jobs is ${job}. I'm ${
  year - birthYear
} years old.`;

console.log(whoAmI);
