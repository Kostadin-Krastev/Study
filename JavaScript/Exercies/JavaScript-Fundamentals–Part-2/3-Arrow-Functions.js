"use strict";
/*
Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
 */
// Function which calculate percentage of the population in a country
const percentageOfWorld3 = (population) => (population / 7900) * 100;

// The counters are:
let china = 1441;
let bulgaria = 6;
let greece = 10;

console.log(`China has ${china} million people, so it's about ${percentageOfWorld3(
  china
).toFixed(1)}% of
the world population`);

console.log(`Bulgaria has ${bulgaria} million people, so it's about ${percentageOfWorld3(
  bulgaria
).toFixed(1)}% of
the world population`);

console.log(`Greece has ${greece} million people, so it's about ${percentageOfWorld3(
  greece
).toFixed(1)}% of
the world population`);
