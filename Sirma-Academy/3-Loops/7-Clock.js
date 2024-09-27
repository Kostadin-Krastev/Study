"use strict";
/*
Write a function that prints the hours of the day from 0:0 to 23:59, each on a separate
line. Hours must be written in the format '{hour}:{minutes}'.
 */

function clock(hours, minutes) {
  for (hours = 0; hours < 24; hours++) {
    for (minutes = 0; minutes < 60; minutes++) {
      console.log(`${hours}:${minutes}`);
    }
  }
}

clock();
