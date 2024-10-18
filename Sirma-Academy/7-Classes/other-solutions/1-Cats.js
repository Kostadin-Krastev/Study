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
  // for loop to accesses the array catsInfo
  for (const line of catsInfo) {
    // variable that splits the array words
    const [name, ageText] = line.split(' ');
    // variable that take the string number and covert it ti Number
    const age = Number(ageText);
    // creating new cat
    const cat = new Cat(name, age);
    // calling the method with the created new cat
    cat.meow();
  }
}

cats(catsInfo);
