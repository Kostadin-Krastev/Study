'use strict';
/*
Calculate the fuel efficiency of a car given the total distance traveled D in kilometers and the
total fuel consumed F in liters.
Use the formula: Fuel Efficiency = D / F

INPUT           OUTPUT
500, 40         12.50
600, 40         15.00
750, 40         18.75
*/

let totalDistanceKm = 500;
totalDistanceKm = 600;
totalDistanceKm = 750;
let totalFuelConsumed = 40;

const calculateFuelEfficiency = function (totalDistanceKm, totalFuelConsumed) {
  const fullEfficiency = totalDistanceKm / totalFuelConsumed;

  return `The fuel efficiency of a car base of total distance ${totalDistanceKm}, and the total fuel consumed ${totalFuelConsumed} is ${fullEfficiency.toFixed(2)}`;
};

console.log(calculateFuelEfficiency(totalDistanceKm, totalFuelConsumed));
