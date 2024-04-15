// 26. Object Methods 044
/*
Methods are actions that can be performed on objects.

Object properties can be both primitive values, other objects, and functions.

An object method is an object property containing a function definition.

Property	    Value
-------------------------------------------------------------------------
firstName	    John
lastName	    Doe
age	            50
eyeColor	    blue
fullName	    function() {return this.firstName + " " + this.lastName;}
-------------------------------------------------------------------------

JavaScript objects are containers for named values, called properties and methods. Methods are functions stored as object properties.

--------------------------------------------
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

In other words, this keyword is equal to the object calling the method.

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

The this keyword is a special keyword that refers to the current instance of an object in which the code is being executed. The value of this is determined by how a function is called or how it is used within the context of an object.

The behavior of this can be a source of confusion for beginners, as it is context-dependent. Here are some common scenarios:

- Global Context:
When used outside of any function or object, this refers to the global object. In a browser environment, the global object is usually the window object.
Example:
console.log(this === window); // Output: true

- Function Context:
When used within a function (not a method of an object), this still refers to the global object. However, in strict mode ('use strict';), this remains undefined.
Example:
function showThis() {
  console.log(this);
}

showThis(); // Output depends on whether in strict mode or not

- Object Method:
When this is used inside a method of an object, it refers to the object itself.
Example:
let person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // Output: Hello, my name is John

- Constructor Function:
Inside a constructor function, this refers to the instance of the object being created.
Example:
function Dog(name) {
  this.name = name;
}

let myDog = new Dog('Buddy');
console.log(myDog.name); // Output: Buddy

Understanding the context in which a function is called is crucial for correctly interpreting the value of this in JavaScript. 

Arrow functions, unlike regular functions, do not have their own this context; they inherit it from the enclosing scope. This behavior can be beneficial in certain scenarios, especially when dealing with callback functions or event handlers.
*/

const jonas = {
  firstName: "Jonas",
  lastName: "Shmedmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michele", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
};

console.log(jonas.calcAge(1991));
