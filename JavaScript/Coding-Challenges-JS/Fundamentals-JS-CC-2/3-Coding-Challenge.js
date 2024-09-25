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
respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
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
    this.calculateBmi = this.weightKg / this.heightCm ** 2;
    return this.calculateBmi;
  },
};

const johnInfo = {
  firstName: "John",
  lastName: "Smith",
  weightKg: 92,
  heightCm: 1.95,
  calcBMI: function () {
    this.calculateBmi = this.weightKg / this.heightCm ** 2;
    return this.calculateBmi;
  },
};

// Calling the functions that calculate the BMI
markInfo.calcBMI();
johnInfo.calcBMI();

/*
Using if else statement to determent who have the higher BMI
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
 */
if (markInfo.calculateBmi > johnInfo.calculateBmi) {
  console.log(
    `${markInfo.firstName} ${
      markInfo.lastName
    }'s BMI (${markInfo.calculateBmi.toFixed(2)}) is higher than ${
      johnInfo.firstName
    } ${johnInfo.lastName}'s (${johnInfo.calculateBmi.toFixed(2)})`
  );
} else {
  console.log(
    `${johnInfo.firstName} ${
      johnInfo.lastName
    }'s BMI (${johnInfo.calculateBmi.toFixed(2)}) is higher than ${
      markInfo.firstName
    } ${markInfo.lastName}'s (${markInfo.calculateBmi.toFixed(2)})`
  );
}
