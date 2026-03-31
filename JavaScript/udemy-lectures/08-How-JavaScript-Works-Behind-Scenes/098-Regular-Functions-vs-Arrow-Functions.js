'use strict';
// Object example
const jonas = {
  firsName: 'Jonas',
  year: 1991,
  // Solution 1 with variable "self"
  /*calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const self = this; // self or that
    const isMillennial = function () {
      console.log(self);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillennial();
  },*/

  // Solution 2 with arrow function - it is a very useful case
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
  greet: () => console.log(`Hey, ${this.firsName}`),
};

jonas.greet();
jonas.calcAge();

// How to deal with multiple arguments passed to a function (Example function with two input parameters is passed 4 parameters (arguments))
// arguments keyword (it exists only in regular functions NOT in arrow functions)
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

const loopTest = function (a, b) {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
};
console.log(loopTest(2, 5, 8, 12));
