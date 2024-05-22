"use strict";
function referenceByGender(age, gender) {
  if (gender === "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}

referenceByGender(17, "m");
