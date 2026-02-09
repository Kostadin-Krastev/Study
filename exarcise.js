'use strict';
/*
A car started from the city of Sofia to the city of Berlin at a speed of x km / h, and 2
hours later another car went to the same destination at a speed y km / h. How many
kilometers will be the distance between the two cars 3 hours after the departure of the
second car?
 */

/*
destination Sofia - Berlin
firstCar
2 hours later
secondCar

how many kilometars will be the distance between the two cars after 3 hours
*/
let firstCarSpeed = 81;
firstCarSpeed = 100;
let secondCarSpeed = 120;
secondCarSpeed = 90;

const findeDistance = function (inputFirstCarSpeed, inputSecondCarSpeed) {
  let timeHourse = 3;
  // distance each car hase past
  const firstCarDistance = inputFirstCarSpeed * (timeHourse + 2);
  const secondCarDistance = inputSecondCarSpeed * timeHourse;

  // distance between the two cars
  const distance = `The distance between the two cars after ${timeHourse} hours will be ${firstCarDistance - secondCarDistance}`;

  return distance;
};

console.log(findeDistance(firstCarSpeed, secondCarSpeed));
