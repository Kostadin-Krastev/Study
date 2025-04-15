/*
Write a function that takes a parameter kilometer (real number) and converts them to miles. Print the result on the console.
Note 1 kilometer = 0.621371 miles. 
 */

let kmNumber = 5;

const convertKilometerInMiles = function (kmNumber) {
  const milesLength = 0.621371;
  const convertKmToMl = kmNumber * milesLength;

  return convertKmToMl;
};

console.log(convertKilometerInMiles(kmNumber));
