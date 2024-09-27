"use strict";
/*
1. Let's bring back the 'populations' array from a previous assignment

2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier

3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
 */
const populations = [6, 5, 10, 1441];
const percentages2 = [];

function percentageOfWorld1(populations) {
  for (let i = 0; i < populations.length; i++) {
    percentages2.push((populations[i] / 7900) * 100);
  }
  return percentages2;
}

console.log(percentageOfWorld1(populations));
