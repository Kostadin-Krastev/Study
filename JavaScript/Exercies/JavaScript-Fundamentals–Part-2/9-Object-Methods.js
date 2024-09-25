"use strict";
/*
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.

2. Call the 'describe' method

3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
 */

// Task 1:
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "bulgarian",
  population: 5000000,
  neighbours: ["Romania", "Serbia", "Macedonia", "Greece", "Turkey"],

  //   Adding a method called 'describe'
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  // Task 3: Adding a method called 'isIsland'
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// Task 2: Call the 'describe' method
console.log(myCountry.describe());

// Task 3: Call the 'isIsland' method
myCountry.checkIsland(); // This will set the isIsland property so I can use it in consol.log with the object myCountry
console.log(myCountry.isIsland);
