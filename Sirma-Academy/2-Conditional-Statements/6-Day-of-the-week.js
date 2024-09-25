"use strict";
/*
Write a function that receives an integer and prints a day of the week (in English), within the limits [1...7] or prints "Error" in case the entered number is invalid.
 */

const dayOfWeek = function (numberDay) {
  switch (numberDay) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
      break;
  }
};
dayOfWeek(0);
