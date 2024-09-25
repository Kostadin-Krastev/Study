"use strict";
/*
Calculate the fuel efficiency of a car given the total distance traveled D in kilometers and the total fuel consumed F in liters.

Use the formula: Fuel Efficiency = D / F

On the first line, you receive the distance D in kilometers.
On the second line, you receive the fuel F in liters.
 */

// Storing in variables the distance and the fuel
let distance = 750;
let fuel = 40;

// Using function expression to calculate the fuel efficiency of a car

const calculateCarFuelEfficiency = function (distance, fuel) {
  const fuelEfficiency = distance / fuel;
  console.log(fuelEfficiency.toFixed(2));
};

calculateCarFuelEfficiency(distance, fuel);
