"use strict";
/*
Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
 */

function describeCountry(inputCountry, inputPopulation, inputCapitalCity) {
  console.log(
    `${inputCountry} has ${inputPopulation} million people and its capital city is ${inputCapitalCity}.`
  );
}

const finland = describeCountry("Finland", 6, "Helsinki");
const bulgaria = describeCountry("Bulgaria", 5, "Sofia");
const greece = describeCountry("Greece", 10, "Athens");
