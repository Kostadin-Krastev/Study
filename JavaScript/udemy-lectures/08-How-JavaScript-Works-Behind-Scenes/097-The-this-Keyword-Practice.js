'use strict';
console.log(this);
// regular function example
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
// Arrow function example
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

// Object example
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // Method borrowing (взимане на заем на функция от обекта jonas, за да не се налага да го пишем повторно и по този начин да дублираме кода)
matilda.calcAge();

// Example - taking out entirely the calcAge function outside of the object
const calcAgeCopy = jonas.calcAge;
// But with this method we don't copy the this keyword. When we call the function calcAgeCopy it will give us undefined and error
calcAgeCopy();
