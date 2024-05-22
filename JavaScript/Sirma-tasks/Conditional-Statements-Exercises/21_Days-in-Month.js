"use strict";
function daysInMonth(month) {
  let days;

  if (month === 2) {
    days = 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
  } else {
    days = 31;
  }

  console.log(days);
}

// daysInMonth(1);
daysInMonth(2);
// daysInMonth(4);
// daysInMonth(7);
