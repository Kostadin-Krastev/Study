'use strict';
/*
Write a function that accepts an array of names and phone numbers. Write down all the
names in the phone book. If you get an existing name, replace the number with the new
one.
 */

// Test data 1
let information = ['Peter 0888 657 212', 'Bob 0899 657 212', 'Peter 123123'];

// Test data 2
information = ['Maria 123', 'Samantha 456', 'Nicole 789'];

function updatePhoneBook(information) {
  let phonebook = {};

  for (const element of information) {
    let elementArr = element.split(' ');
    let name = elementArr.shift(0);
    let phoneNumber = elementArr.join(' ');
    phonebook[name] = phoneNumber;
  }

  for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
  }
}

updatePhoneBook(information);
