'use strict';
/*
Write a function that gets a name, surname, and eye color and saves them in an object.
The created object must be converted to JSON and printed.
 */

// Test data 1
let name = 'Ivan';
let surname = 'Ivanov';
let eyeColor = 'blue';

// Test data 2
name = 'Maria';
surname = 'Petrova';
eyeColor = 'brown';

function person(name, surname, eyeColor) {
  const personInfo = {
    name,
    surname,
    eyeColor,
  };

  const personJson = JSON.stringify(personInfo);
  console.log(personJson);
}

person(name, surname, eyeColor);
