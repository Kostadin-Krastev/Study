"use strict";
/*
Calculate the circumference of a circle given its radius R.
Use the formula: Circumference = 2 * pi * R
On the first line, you receive the radius R.
 */

// Storing in variable the radius of a circle
let circleRadius = 10;

// Using function expression to calculate the circumference of a circle
const calculateCircumference = function (circleRadius) {
  const circumference = 2 * Math.PI * circleRadius;
  console.log(circumference.toFixed(2));
};

calculateCircumference(circleRadius);
