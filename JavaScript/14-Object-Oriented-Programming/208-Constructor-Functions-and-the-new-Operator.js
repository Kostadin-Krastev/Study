/*
14 Object-Oriented Programming (OOP) With JavaScript
--------------------------------------------------------------------------------------
// 208 Constructor Functions and the new Operator

In JavaScript, a constructor function is a special type of function used to create and initialize objects. When called with the new keyword, it serves as a blueprint for creating instances of a specific type of object.

Here’s a breakdown of how constructor functions work:

Key Characteristics:
1. Naming Convention: Constructor function names are typically capitalized (e.g., Person, Car) to distinguish them from regular functions.

2. Usage with new: When a constructor function is called with new, it does the following:
- Creates a new empty object.
- Sets the this keyword to the new object.
- Adds properties and methods to the object.
- Returns the object automatically unless the constructor explicitly returns an object.

Example:
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Method for this object
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Creating instances
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Accessing properties and methods
person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.
person2.greet();  // Output: Hello, my name is Bob and I am 25 years old.

Benefits of Constructor Functions:
- They allow you to create multiple objects with the same structure and behavior.
- They enable better code organization and reusability by defining methods on the prototype.
- They help implement object-oriented programming concepts in JavaScript.
 */

const Person = function (firstName, birthYear) {
  // instance properties of Person
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   method of Person !!! this is a bad practice. If we create many instances using Person object that will means that all will carry this method of calculating age
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991); // variable jonas is instance of the constructor function Person
const matilda = new Person('Mathilda', 2017); // variable matilda is instance of the constructor function Person
const jack = new Person('Jack', 1975); // variable jack is instance of the constructor function Person
console.log(jonas);
console.log(matilda, jack);
/* In this example the function nothing print when we call it. But behind the scenes are happening several things
1. New empty object is created.
2. Function is called and sets the "this" keyword to the newly created empty object.
3. The new empty object is linked to a prototype.
4. Returns the empty object automatically unless the constructor explicitly returns an object.
*/

// Checking if variable jonas is instance of the constructor function Person using key word "instanceof". The result always is "true" (if jonas is instance of Person) or "false" (if it is not).
console.log(jonas instanceof Person);
