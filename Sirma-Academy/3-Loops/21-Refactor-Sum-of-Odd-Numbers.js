/*
You are assigned to find and fix the bugs in an existing piece of code, using the
debugger. You should trace the program execution to find the lines of code that produce
incorrect or unexpected results.
You are given a program (existing source code) that prints the next n odd numbers
(starting from 1) and on the last row, prints the sum of them.
 */
// Test data 1
let n = 5;

// Test data 2
n = 3;

function sumOddNumbers(n) {
  let sum = 1;
  for (let i = 0; i < n; i++) {
    sum += 2 * i;
    console.log(2 * i + 1);
  }
  console.log(`Sum: ${sum}`);
}

sumOddNumbers(n);
