/*
Write a function that takes 3 parameters (name, surname and age) and returns an object.
 */

function returnsObject(name, surname, age) {
  let person = {
    firstName: name,
    secondName: surname,
    currantAge: age,
  };

  return person;
}

console.log(returnsObject('Maria', 'Marinova', 13));
