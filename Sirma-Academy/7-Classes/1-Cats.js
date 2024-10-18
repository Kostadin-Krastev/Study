'use strict';
/*
Write a function that receives array of strings in the following format '{cat name}
{age}'. 

Create a Cat class that receives in the constructor the name and the age parsed from the input.

It should also have a method named "meow" that will print "{cat name}, age {age}
says meow" on the console.

For each of the strings provided, you must create a cat object and invoke the .meow()
method.
 */

// Test data 1
let catsInfo = ['Mellon 2', 'Tom 3'];
// Test data 2
catsInfo = ['Branch 1', 'Poppy 3', 'Goldy 2'];

function catInput(catsInfo) {
  let catNames = [];
  let catAges = [];

  for (let i = 0; i < catsInfo.length; i++) {
    let [name, age] = catsInfo[i].split(' ');
    catNames.push(name);
    catAges.push(Number(age));
  }

  class Cat {
    constructor(catName, catAge) {
      this.catName = catName;
      this.catAge = catAge;
    }

    meow() {
      console.log(`${this.catName}, age ${this.catAge} says meow`);
    }
  }

  for (let i = 0; i < catNames.length; i++) {
    let animal = new Cat(catNames[i], catAges[i]);
    animal.meow();
  }
}

catInput(catsInfo);
