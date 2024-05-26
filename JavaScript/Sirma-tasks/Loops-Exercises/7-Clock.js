"use strict";
/*
Write a function that prints the hours of the day from 0:0 to 23:59, each on a separate
line. Hours must be written in the format {hour}:{minutes};.
*/

function clock() {
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      let hour = h.toString().padStart(2, 0);
      let minutes = m.toString().padStart(2, 0);
      let time = `${hour}:${minutes}`;
      console.log(time);
    }
  }
}

clock();
