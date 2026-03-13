'use strict';
/*
Calculate the daily water consumption per person in a household. Given the total water
consumption in liters for a week and the number of people in the household, find out the daily
consumption per person.

Use the formula
Daily consumption per person = Total weekly consumption / 7 * Number of people
 */

// store water consumption and people in household
let waterWeeklyConsumption = 2450;
waterWeeklyConsumption = 3150;
let numberPeople = 7;
numberPeople = 10;

const calcWaterConsumptionPerPerson = function (inputWater, inputPeople) {
  // calculate the daily water consumption per person
  const dailyWaterConsum = inputWater / (7 * inputPeople);

  return dailyWaterConsum.toFixed(2);
};

console.log(
  calcWaterConsumptionPerPerson(waterWeeklyConsumption, numberPeople),
);
