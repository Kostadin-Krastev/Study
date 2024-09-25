"use strict";
/*
Write a function that takes an hour and minutes of a 24-hour day and calculates what
time it will be after 15 minutes. 
Print the result in hours:minutes format.
Hours are always between 0 and 23, and minutes are always between 0 and 59. Hours
are written in one or two digits.
Minutes are always written with two digits, with a leading zero when necessary.
 */
// Storing hours and minutes in variables
let hours = 1;
hours = 0;
hours = 23;
hours = 11;
let minutes = 47;
minutes = 2;
minutes = 59;
minutes = 0o7; // in modern JavaScript I can't store numbers that start with Zero(0). the correct way to represent an number like this (07) is by using the prefix 0o (the letter "o" after the 0). So the number instead 07 have to written 0o7.

function alarmClock(hours, minutes) {
  // Calculate the added 15 minutes to the clock
  const add15Minutes = (minutes += 15);
  //Here if the clock reaches 60 minutes will show 59 and the hour wil go up by 1
  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }
  //Here when the hour reach 24 it will show 0
  if (hours >= 24) {
    hours = 0;
  }
  // Here we format the minutes to be double digits, and show 0 when the integer is not a double number
  const formatMinutes = String(minutes).padStart(2, "0");
  console.log(`${hours}:${formatMinutes}`);
}
alarmClock(hours, minutes);
