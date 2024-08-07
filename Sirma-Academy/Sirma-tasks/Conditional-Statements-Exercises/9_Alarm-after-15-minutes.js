"use strict";
function clock(hours, minutes) {
  minutes += 15;

  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }

  if (hours >= 24) {
    hours -= 24;
  }

  let formattedMinutes = minutes.toString().padStart(2, "0");

  console.log(`${hours}:${formattedMinutes}`);
}

clock(1, 47);
