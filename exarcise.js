'use strict';
/*
Calculate the circumference of a circle given its radius R.
Use the formula: Circumference = 2 * pi * R
On the first line, you receive the radius R.
INPUT       OUTPUT
5           31.42
7           43.96
10          62.83
*/

let radius = 5;
radius = 7;
radius = 10;

const calculateCircumference = function (radius) {
  const calculatingCircumferenceFormula = 2 * 3.14159 * radius;

  return calculatingCircumferenceFormula.toFixed(2);
};

console.log(calculateCircumference(radius));
