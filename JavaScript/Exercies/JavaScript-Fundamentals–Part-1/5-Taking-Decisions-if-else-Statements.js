"use strict";
/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
 */
const isIsland = false;
const language = "bulgarian";
const country = "Bulgaria";
const continent = "Europe";
let population = 5000000;

// Task 1

if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33000000 - population} milion below average`
  );
}
