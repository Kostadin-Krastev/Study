'use strict';
/*
Calculate the average speed of a vehicle that has traveled a certain distance D in kilometers
over a given time T in hours.
Use the formula Average Speed = D / T.

On the first line, you receive the distance D in kilometers.
On the second line, you receive the time T in hours.
*/

let distanceKm = 200;
distanceKm = 150;
distanceKm = 300;
let timeHours = 2;
timeHours = 3;
timeHours = 5;

const calculateAverageSpeed = function (distanceKm, timeHours) {
  const averageSpeed = distanceKm / timeHours;

  return averageSpeed.toFixed(2);
};

console.log(calculateAverageSpeed(distanceKm, timeHours));
