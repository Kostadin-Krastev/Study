"use strict";
/*
A car started from the city of Sofia to the city of Berlin at a speed of x km / h, and 2
hours later another car went to the same destination at a speed y km / h. How many
kilometers will be the distance between the two cars 3 hours after the departure of the
second car?
 */

function calcDistanceBetweenCars(car1speed, car2speed) {
  let car1Distance = car1speed * 5;
  let car2Distance = car2speed * 3;
  const distanceBetweenCars = car1Distance - car2Distance;
  console.log(`${distanceBetweenCars} km`);
}

calcDistanceBetweenCars(75, 90);
