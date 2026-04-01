'use strict';
/*
Write a function that prints the hours of the day from 0:0 to 23:59, each on a separate
line. Hours must be written in the format '{hour}:{minutes}'.
*/

const clock = function () {
  for (let hour = 0; hour <= 23; hour++) {
    for (let minutes = 0; minutes < 60; minutes++) {
      console.log(
        `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
      );
    }
  }
};

clock();
