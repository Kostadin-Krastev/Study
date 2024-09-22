"use strict";
/*
Write a console program that assumes age (real number) and gender ('m' or 'f'), and prints a reference among the following: 
• "Mr." — male (sex 'm') 16 years of age or older 
• "Master" – boy (gender 'm') under 16 years 
• "Ms." — woman (sex 'f') 16 years of age or older 
• "Miss" – girl (gender 'f') under 16 
 */

// Storing age and gender in variables
let age = 14;
age = 17;
age = 10;
age = 32;
let gender = "f";
gender = "m";
gender = "m";
gender = "f";

const addressByAgeAndGender = function (age, gender) {
  if (age >= 16 && gender === "m") {
    console.log("Mr.");
  } else if (age < 16 && gender === "m") {
    console.log("Master");
  } else if (age >= 16 && gender === "f") {
    console.log("Ms.");
  } else if (age < 16 && gender === "f") {
    console.log("Miss");
  }
};

addressByAgeAndGender(age, gender);
