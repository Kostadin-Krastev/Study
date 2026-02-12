'use strict';
/*
Write a function that prints the numbers from 1 to 100, each on a new line.
 */

function printingNumbers(numbers) {
  for (numbers = 1; numbers <= 100; numbers++) {
    console.log(numbers);
  }
}

printingNumbers(1);

// my solution with array. Обяснявам си с него как работи loop и array. Иначе горното решение е правилния избор за тази задача

const printNumbers = function () {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
};

console.log(printNumbers());
