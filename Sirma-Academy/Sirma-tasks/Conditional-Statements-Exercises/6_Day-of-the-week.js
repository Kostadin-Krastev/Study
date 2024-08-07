"use strict";
function dayOfWeek(inputDay) {
  if (inputDay === 1) {
    console.log("Monday");
  } else if (inputDay === 2) {
    console.log("Tuesday");
  } else if (inputDay === 3) {
    console.log("Wednesday");
  } else if (inputDay === 4) {
    console.log("Thursday");
  } else if (inputDay === 5) {
    console.log("Friday");
  } else if (inputDay === 6) {
    console.log("Saturday");
  } else if (inputDay === 7) {
    console.log("Sunday");
  } else {
    console.log("Error");
  }
}

dayOfWeek(7);
