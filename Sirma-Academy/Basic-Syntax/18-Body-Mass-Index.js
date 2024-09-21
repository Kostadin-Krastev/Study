"use strict";
/*
Calculate the Body Mass Index (BMI) based on the given weight (in kilograms) and height (in meters).
Use the formula BMI= Weight / Height2. 
 */

function calculateBMI(kilograms, height) {
  const bmi = kilograms / height ** 2;
  console.log(bmi.toFixed(2));
}

calculateBMI(85, 1.8);
