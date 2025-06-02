/*
Write a function that accepts text in JSON format and converts it to an object. Print all values in the following format: {key}: {value}
 */

const convertJson = function (inputJson) {
  let jsonToObject = JSON.parse(inputJson);

  for (let key in jsonToObject) {
    console.log(`${key}: ${jsonToObject[key]}`);
  }
};

convertJson({ name: 'Ivan', age: 40, town: 'Sofia' });
