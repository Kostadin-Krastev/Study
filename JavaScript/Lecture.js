/* LECTURE: Values and Variables
 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

const country = "Bulgaria";
const continent = "Europe";
const population = 5000000;

console.log(country, continent, population);
*/

/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

const isIsland = false;
const population = 5000000;
const country = "Bulgaria";
const language = "bulgarian";

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
*/

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens

no need to exercies this!
*/

/*
LECTURE: Basic Operators
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
/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?

let populationOfBulgaria = 5000000;
console.log(populationOfBulgaria / 2);

/*
2. Increase the population of your country by 1 and log the result to the console

populationOfBulgaria++;
console.log(populationOfBulgaria);

/*
4. The average population of a country is 33 million people. Does your country
have less people than the average country?

const averageCountryPopulation = 33000000;
console.log(averageCountryPopulation > populationOfBulgaria);

/*
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'


const description =
  "Bulgaria is in Europe, and its 5 million people speak bulgarian";
console.log(description);
*/

/*
LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax


let populationOfBulgaria = 5000000;
// creating description "Bulgaria is in Europe, and its 5 million people speak bulgarian"
const description = `Bulgaria is in Europe, and its ${populationOfBulgaria} million people speaks bulgarian`;
console.log(description);
*/

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original


let populationOfBulgaria = 5000000;
populationOfBulgaria = 13000000;
populationOfBulgaria = 130000000;
const averageCountryPopulation = 33000000;

if (populationOfBulgaria > averageCountryPopulation) {
  console.log("Bulgaria's population is above average");
} else {
  console.log(
    `Bulgaria's population is ${
      averageCountryPopulation - populationOfBulgaria
    } million below average`
  );
}
*/

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143
2. Execute the operations to check if you were right

const test = "9" - "5";
console.log(test);
*/

/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation


// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?");

// LATER : This helps us prevent bugs
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)


if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More then 1 border");
} else {
  console.log("No borders");
}

console.log(numNeighbours);
*/

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)


const countryLanguage = "bulgarian";
let countryPopulation = 5000000;
const isIsland = false;

if (
  countryLanguage === "elnglish" &&
  countryPopulation < 50000000 &&
  !isIsland
) {
  console.log("You should live in Bulgaria");
} else {
  console.log("Bulgaria does not meet your criteria");
}
*/
/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'


let language = "engl";

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Not a valid language");
}
*/

/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original


const country = "Bulgaria";
let populationOfBulgaria =
  7000000 > 33000000
    ? "Bulgaria's population is above average"
    : "Bulgaria's population is below average";

console.log(populationOfBulgaria);
*/

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console


function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people, and its capital city is ${capitalCity}`;
}

const finland = describeCountry("Finland", 6, "Helsinki");
const bulgaria = describeCountry("Bulgaria", 7, "Sofia");
const greece = describeCountry("Greece", 10, "Athens");

console.log(greece);
*/

/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)


function percentageOfWorld1(country, population) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the word population.`;
}
const china = percentageOfWorld1("China", 1441);

console.log(china);

const percentageOfWorld2 = function (country, population) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population.`;
};

console.log(percentageOfWorld2("China", 1441));
*/

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'

const percentageOfWorld3 = (country, population) => {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population.`;
};

console.log(percentageOfWorld3("China", 1441));
*/

/*
------------------------------------------------
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice


// Task 2: calculating percenteg of the world
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(1);
}

// Task 1: crating discribing string for the population of a country
const describePopulation = function (country, population) {
  const calcPercentegOfWorld = percentageOfWorld1(population);
  return `${country} has ${population} million people, so it's about ${calcPercentegOfWorld}% of the word population.`;
};

// Task 3: calling function describePopulation for 3 countries
console.log(describePopulation("Bulgaria", 6));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Greece", 11));
*/

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values


// Task 1 creating Array for population
const populations = [5, 15, 25, 40];

// Task 2
console.log(populations.length);

// Task 3 containing the percentages of the world
function percentageOfWorld1(populations) {
  return ((populations / 7900) * 100).toFixed(1);
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];

console.log(percentages);
*/

/*
--------------------------------------------
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'

2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array

3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array

4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.


// Taska 1: Array containing all the neighbor countries
const neighbors = ["Greece", "Romania", "Serbia"];

// Task 2: Adding a country Utopia to the last position
neighbors.push("Utopia");

// Task 3: Removing the new country Utopia
neighbors.pop();

// Task 4: We ask is it include Germany in Array
if (neighbors.includes("Germany")) {
} else {
  console.log("Probably not a central European country");
}

// Task 4: Teacher solution
if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European country");
}
// Task 5A: searching an index of a country Serbia
console.log(neighbors.indexOf("Serbia"));

// Task 5B: renaming Serbia into Sweden
neighbors[2] = "Sweden";
console.log(neighbors);

// Task 5: teacher solution - the result is something strange, and I don't like it because I think is incorrect
neighbors[neighbors.indexOf("Serbia")] = "Sweden";
console.log(neighbors);
*/

/*
---------------------------------------------------------
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
    country: "Bulgaria",
    capital: "Sofia",
    language: "Bulgarian",
    population: 6000000,
    neighbours: ["Greece", "Serbia", "Mecedonia"],
  };
  
  /*
  LECTURE: Dot vs. Bracket Notation
  1. Using the object from the previous assignment, log a string like this to the
  console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
  and a capital called Helsinki.'
  2. Increase the country's population by two million using dot notation, and then
  decrease it by two million using brackets notation.
  */
  // Task 1: log string to the console
  console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, and ${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}`
  );
  
  // Task 2: A) increasing the country population by two million using dot notaion
  console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, and ${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}`
  // Task 2: B) decreaseing the country population by two million using brackets notation
  `${myCountry.country} has ${myCountry["population" + 2000000]} million ${myCountry.language}-speaking people, and ${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}`