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

// Creating class Cat
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method Meow
  meow() {
    {
      console.log(`${this.name}, age ${this.age} says meow`);
    }
  }
}

// Function that will take the array and parse the input data
function cats(catsInfo) {
  // empty array that will contain cats info
  const cats = [];

  // for loop to accesses the array catsInfo
  for (const line of catsInfo) {
    // variable that splits the array words
    const [name, ageText] = line.split(' ');

    // variable that take the string number and covert it ti Number
    const age = Number(ageText);

    // creating new cat into the empty array cat
    cats.push(new Cat(name, age));

    // for loop that go through array cats and calling the method meow
    for (const cat of cats) {
      cat.meow();
    }
  }
}

cats(catsInfo);
