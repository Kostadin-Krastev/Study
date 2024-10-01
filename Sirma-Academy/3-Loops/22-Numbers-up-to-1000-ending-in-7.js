/*
Write a program that prints the numbers in the range [1... 1000], which end in 7.
 */

function printNumbersEndIn7() {
  for (let i = 1; i <= 1000; i++) {
    let isNumber7 = i % 10 === 7;
    console.log(`Number ${i} does end with 7? Answer:${isNumber7}`);
  }
}

printNumbersEndIn7();
