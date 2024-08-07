"use strict";
function calculateVacation(budget, season) {
  let destination;
  let typeOfHoliday;
  let amountSpent;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      typeOfHoliday = "Camp";
      amountSpent = budget * 0.3;
    } else if (season === "winter") {
      typeOfHoliday = "Hotel";
      amountSpent = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Europe";
    if (season === "summer") {
      typeOfHoliday = "Camp";
      amountSpent = budget * 0.4;
    } else if (season === "winter") {
      typeOfHoliday = "Hotel";
      amountSpent = budget * 0.8;
    }
  } else {
    destination = "Asia";
    typeOfHoliday = "Hotel";
    amountSpent = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${typeOfHoliday} - ${amountSpent.toFixed(2)}`);
}

calculateVacation(50, "summer");
