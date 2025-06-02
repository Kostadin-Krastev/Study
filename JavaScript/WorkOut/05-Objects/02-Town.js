/*
Create a function that accepts an object, traverses it, and prints all properties and values
 */

const location = {
  name: 'Sofia',
  population: 1234567,
  country: 'Bulgaria',
  postcode: 1000,
};

const printTown = function (inputLocation) {
  for (let info in inputLocation) {
    console.log(`${info} -> ${inputLocation[info]}`);
  }
};

printTown(location);
