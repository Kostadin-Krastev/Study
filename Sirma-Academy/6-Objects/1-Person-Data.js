'use strict';
/*
Write a function that takes 3 parameters (name, surname and age) and returns an object.
 */

// Test data 1
let name = 'Ivan';
let surname = 'Ivanov';
let age = 29;

// Test data 2
name = 'Maria';
surname = 'Marinova';
age = 13;

function returnsObject(name, surname, age) {
  let person = {
    name,
    surname,
    age,
  };
  return person;
}

console.log(returnsObject(name, surname, age));
