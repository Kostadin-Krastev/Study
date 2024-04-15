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
