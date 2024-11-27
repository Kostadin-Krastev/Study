'use strict';
/*
Create an object with a method that logs a message using this.name. Create a second
object and use bind to set the method's this context to the second object. Log the result.
 */
const obj1 = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const obj2 = {
  name: 'Bob',
};
// Bind method that assign greeting method of obj1 to obj2 and stores it into variable obj2Greeting
const obj2Greeting = obj1.greet.bind(obj2);
obj2.greet = obj2Greeting;

obj2.greet();
