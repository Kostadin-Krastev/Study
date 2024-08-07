"use strict";
function speedInfo(inputNumber) {
  if (inputNumber <= 10 && inputNumber >= 0) {
    console.log("slow");
  } else if (inputNumber >= 10 && inputNumber <= 60) {
    console.log("average");
  } else if (inputNumber >= 60 && inputNumber <= 120) {
    console.log("fast");
  } else if (inputNumber >= 120 && inputNumber <= 160) {
    console.log("super-fast");
  } else {
    inputNumber > 160;
    console.log("turbo-fast");
  }
}

speedInfo(60.001);
