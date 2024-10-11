'use strict';
/*
Write a function that accepts text in JSON format and converts it to an object. Print all values in the following format: {key}: {value}
 */

// Test data 1
let jsonText = '{"name": "Ivan", "age": 40, "town": "Sofia"}';

//Test data 2
jsonText = '{"firstName": "Ivan", "lastName":"Ivanov"}';

function convertJsonIntoObject(jsonText) {
  const convertJson = JSON.parse(jsonText);
  for (let jsonKey in convertJson) {
    console.log(`${jsonKey}: ${convertJson[jsonKey]}`);
  }
}

convertJsonIntoObject(jsonText);
