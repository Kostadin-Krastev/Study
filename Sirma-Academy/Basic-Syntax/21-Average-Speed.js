"use strict";
/*
Calculate the average speed of a vehicle that has traveled a certain distance D in kilometers over a given time T in hours.

Use the formula Average Speed = D / T.

On the first line, you receive the distance D in kilometers.
On the second line, you receive the time T in hours.
 */

// Storing in variables
let kilometers = 300;
let time = 5;

// Using function declaration to calculate the average speed of the vehicle
function calculateAverageSpeed(kilometers, time) {
  const averageSpeed = kilometers / time;
  console.log(averageSpeed.toFixed(2));
}

calculateAverageSpeed(kilometers, time);
