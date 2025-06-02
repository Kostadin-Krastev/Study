/*
Write a function that gets a name, surname, and eye color and saves them in an object.
The created object must be converted to JSON and printed.
 */

let firstName = 'Ivan';
let surName = 'Ivanov';
let eyeColor = 'blue';

const convertObjectToJson = function (
  inputFirstName,
  inputSurName,
  inputEyeColor
) {
  const personInfo = {
    firstName: inputFirstName,
    surName: inputSurName,
    eyeColor: inputEyeColor,
  };

  const convertObjectToJson = JSON.stringify(personInfo);

  console.log(convertObjectToJson);
};

convertObjectToJson(firstName, surName, eyeColor);
