"use strict";
/*
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
 */

// Task 1:
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "bulgarian",
  population: 5000000,
  neighbours: ["Romania", "Serbia", "Macedonia", "Greece", "Turkey"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighboring countries and a capital called ${myCountry.capital}.`
);

// Task 2: Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

// increasing population using dot notation
myCountry.population += 2000000;

// decreasing using bracket notation. When using bracket notation, property names should be in quotes ("population"), otherwise JavaScript will look for a variable named population, which doesn't exist.
myCountry["population"] -= 2000000;

console.log(myCountry);
