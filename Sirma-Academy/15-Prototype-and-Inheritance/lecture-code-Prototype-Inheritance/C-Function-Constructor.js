// Function constructor
/*
The Function constructor allows you to create functions on the fly with dynamic code.
Functions created using the Function constructor are always executed in the global scope.
The Function constructor is a powerful tool but should be used sparingly due to its performance and security issues. For most use cases, traditional function declarations, expressions, or modern alternatives (like Arrow Functions) are recommended.

!!! The name of the Function constructor must always be written with capital letter!!!
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return `My name is ${this.name}, and I'm ${this.age} years old.`;
  };
}

const firstPerson = new Person('Pesho', 20);
console.log(firstPerson);
const secondPerson = new Person('Gosho', 18);

console.log(firstPerson.info());
console.log(secondPerson.info());

console.log(firstPerson.info === secondPerson.info); // firstPerson and secondPerson are two separate functions

/*
------------------------------------------
Every function in JavaScript (except arrow functions) has a special property called prototype. This property plays a key role in how inheritance and the prototype chain work.

When a function is created, it gets a prototype property automatically. By default:

- The prototype property is an object.
- This object has one default property, constructor, which points back to the function itself.

Why Use Prototypes?
- Memory Efficiency: Instead of copying methods into every instance, the methods are shared via the prototype.
- Dynamic Extension: You can add new methods or properties to the prototype, and all instances will have access to them.
 */
Person.prototype.greet = function (name) {
  return `Hello ${name}, my name is ${this.name}`;
};
console.log(Person.prototype === firstPerson.__proto__);

// Call prototype method
console.log(firstPerson.greet('Stamat'));
console.log(secondPerson.greet('Stamat'));
console.log(firstPerson.greet === secondPerson.greet); // Same reference in prototype
