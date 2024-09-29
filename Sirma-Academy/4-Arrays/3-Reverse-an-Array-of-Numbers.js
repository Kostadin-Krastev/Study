/*
Receive a number n and an array of elements, create a new array with n numbers,
reverse it and print its elements on a single line, space separated.
 */

let numberInput = 3;
let arrOfNumbers = [10, 20, 30, 40, 50];

// Test data 2
numberInput = 4;
arrOfNumbers = [-1, 20, 99, 5];

// Test data 3
numberInput = 2;
arrOfNumbers = [66, 43, 75, 89, 47];

function reverseArray(numberInput, arrOfNumbers) {
  let newArray = [];

  for (let i = numberInput - 1; i >= 0; i--) {
    newArray.push(arrOfNumbers[i]);
  }
  console.log(newArray.join(" "));
}

reverseArray(numberInput, arrOfNumbers);
