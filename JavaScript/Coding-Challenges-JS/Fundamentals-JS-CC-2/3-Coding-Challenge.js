"use strict";
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
 */

//Task 1 and 2 create an object with properties for their names, mass, height and calculate BMI
const markInfo = {
  firstName: "Mark",
  lastName: "Miller",
  weightKg: 78,
  heightCm: 1.69,
  calcBMI: function () {
    const calculateBmiMark = this.weightKg / this.heightCm ** 2;
    return calculateBmiMark.toFixed(2);
  },
};

const bmiMark = markInfo.calcBMI();

const johnInfo = {
  firstName: "John",
  lastName: "Smith",
  weightKg: 92,
  heightCm: 1.95,
  calcBMI: function () {
    const calculateBmiJohn = this.weightKg / this.heightCm ** 2;
    return calculateBmiJohn.toFixed(2);
  },
};

const bmiJohn = johnInfo.calcBMI();
/*
Log to the console who has the higher BMI, together with the full name and the
respective BMI. 
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
 */
console.log(
  `${johnInfo.firstName}'s BMI (${bmiMark}) is higher than ${markInfo.firstName}'s (${bmiJohn})!`
);
