"use strict";
/*
Calculate the daily water consumption per person in a household. Given the total water
consumption in liters for a week and the number of people in the household, find out the daily consumption per person.
Use the formula
Daily consumption per person = Total weekly consumption / 7 * Number of people
 */
// Storing in variables the total water consumption and the number of people
let weeklyWaterConsumption = 3150;
let people = 10;

// Function that calculate the daily water consumption per person
function calculateWater(weeklyWaterConsumption, people) {
  const waterConsumption = weeklyWaterConsumption / (7 * people);
  console.log(waterConsumption.toFixed(2));
}

calculateWater(weeklyWaterConsumption, people);
