"use strict";
/*
Write a program which receives a number and prints the corresponding name of the day
of week. If the number is not a valid day, print 'Invalid day!
 */

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let numberInput = 3;
numberInput = 6;
numberInput = 11;

function dayOfWeek(numberInput) {
  if (daysOfWeek[numberInput]) {
    console.log(daysOfWeek[numberInput]);
  } else {
    console.log("Invalid day");
  }
}

dayOfWeek(numberInput);
