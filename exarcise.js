'use strict';
/*
Write a console program that assumes age (real number) and gender ('m' or 'f'), and
prints a reference among the following: 
• "Mr." — male (sex 'm') 16 years of age or older 
• "Master" – boy (gender 'm') under 16 years
• ""Ms." — woman (sex 'f') 16 years of age or older
 */

let age = 14;
age = 17;
let gender = 'f';
gender = 'm';

const adressByAgeGender = function (inputAge, inputGender) {
  if (inputGender === 'f') {
    console.log(inputAge >= 16 ? 'Ms.' : 'Miss.');
  } else if (inputGender === 'm') {
    console.log(inputAge >= 16 ? 'Mr.' : 'Master');
  }
};
adressByAgeGender(age, gender);
