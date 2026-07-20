'use strict';
/*
Write a function that accepts an array of names and phone numbers. Write down all the
names in the phone book. If you get an existing name, replace the number with the new
one.
*/

// array of names and phone numbers
let data = ['Peter 0888 657 212', 'Bob 0899 657 212', 'Peter 123123'];
data = ['Maria 123', 'Samantha 456', 'Nicole 789'];

// function that accepts an array of names and phone numbers
const buildPhonebook = function (data) {
  let phonebook = {};

  for (const entry of data) {
    const [name, ...phoneNumberParts] = entry.split(' ');
    const phoneNumber = phoneNumberParts.join(' ');

    phonebook[name] = phoneNumber; // overrides if the name already exist
  }

  for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
  }
};

buildPhonebook(data);
