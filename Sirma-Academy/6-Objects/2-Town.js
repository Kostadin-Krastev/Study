'use strict';
/*
Create a function that accepts an object, traverses it, and prints all properties and values
 */
const town = {
  name: 'Sofia',
  population: 1234567,
  country: 'Bulgaria',
  postcode: '1000',
};

function traverseObject(town) {
  for (let townKey in town) {
    console.log(`${townKey} -> ${town[townKey]}`);
  }
}

traverseObject(town);
