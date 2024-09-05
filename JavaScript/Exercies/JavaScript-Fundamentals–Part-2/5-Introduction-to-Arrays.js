"use strict";
/*
Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
 */
// Task 1: creating array that contains 4 population values
const populations = [6, 5, 10, 1441];

// Task 2: log to the consol whether array population has 4 elements
console.log(populations.length === 4);

// Task 3A: creating array containing percentages of the world population
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

// Task 3B: using function to compute the 4 percentages value
function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}

console.log(percentages);
