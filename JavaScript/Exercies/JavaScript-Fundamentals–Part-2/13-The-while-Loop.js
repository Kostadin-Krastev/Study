"use strict";
/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
 */
const populations = [6, 5, 10, 1441];
const percentages3 = [];
let i = 0;

while (populations.length > i) {
  percentages3.push((populations[i] / 7900) * 100);
  i++;
}

console.log(percentages3);
