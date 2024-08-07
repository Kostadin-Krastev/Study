"use strict";
function checkNumberInRange(number) {
  if (number >= -100 && number <= 100 && number !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

checkNumberInRange(-25);
