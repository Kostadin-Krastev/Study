// New operator
/*
The new operator in JavaScript is used to create instances of objects that are derived from a constructor function or a class. It essentially makes the constructor function behave like a blueprint for creating new objects, and it handles the setup of the prototype chain.
 */

// Define function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define methods inside prototype
Person.prototype.greet = function (name) {
  return `Hello ${name}, my name is ${this.name}`;
};

// Create newOperator function alternative
function newOperator(Constructor, ...args) {
  // 1. Create new object instance
  const instance = {};
  //   2. Assign prototype
  Object.setPrototypeOf(instance, Constructor.prototype);
  // 3. Change the context of the instance
  Constructor.apply(instance, args);
  //   4. return new instance
  return instance;
}

// Create instance from function constructor
// const person = new Person('Mariyka', 20)
const person = newOperator(Person, 'Mariyka', 20);

console.log(person);
console.log(person.greet('Stamat'));
