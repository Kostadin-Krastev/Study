"use strict";
/*
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?

2. Increase the population of your country by 1 and log the result to the console

3. Finland has a population of 6 million. Does your country have more people than
Finland?

4. The average population of a country is 33 million people. Does your country
have less people than the average country?

5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
const isIsland = false;
const language = "bulgarian";
const country = "Bulgaria";
const continent = "Europe";
let population = 5000000;

// Task 1
const splitCountry = population / 2;
console.log(splitCountry);

// Task 2
const increasePopulation = ++population;
console.log(increasePopulation);

// Task 3
let populationFinland = 6000000;
const hasBulgariaHaveMorePopulation = population >= populationFinland;
console.log(hasBulgariaHaveMorePopulation);

// Task 4
const averageCountryPopulation = 33000000;
const isBulgariaPopulationSmaller = population >= averageCountryPopulation;
console.log(isBulgariaPopulationSmaller);

// Task 5
let description = `${country} is in ${continent}, and it's ${population} people speaks ${language}.`;
