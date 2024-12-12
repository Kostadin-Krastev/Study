'use strict';
/*
Write a JS function that checks if a given password is valid. Password rules are: 
 6 – 10 characters (inclusive)
 Consists only of letters and digits
 Have at least 2 digits
If a password is valid print "Password is valid". If it is not valid, for every unfulfilled rule
print a message: 
 "Password must be between 6 and 10 characters"
 "Password must consist only of letters and digits"
 "Password must have at least 2 digits"
Write a function for each rule.
 */

// Test data 1
let password = 'passpasss';

function hasCorrectLength(password) {
  return password.length >= 6 && password.length <= 10
    ? 'Password is valid'
    : 'Password must be between 6 and 10 characters';
}

function isOnlyLettersAndDigits(password) {
  let hasLetters = false;
  let hasDigits = false;
}

console.log(hasCorrectLength(password));
