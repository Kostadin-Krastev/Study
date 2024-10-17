/*
// 209 Prototypes
In JavaScript, every object has a built-in property called a prototype, which is itself an object. A prototype is a mechanism for object inheritance, allowing objects to share properties and methods. Understanding prototypes is key to understanding how inheritance works in JavaScript.

Key Concepts of Prototypes:
1. Prototype Object: Every JavaScript object has a hidden property, often referred to as [[Prototype]], that references another object called its prototype. This prototype object can have its own prototype, forming a chain known as the prototype chain. The chain ends when an object’s prototype is null.

2. Prototype Chain: If a property or method is not found on an object, JavaScript will look for it on the object's prototype. If it's not found there, it moves up the prototype chain, searching the prototype’s prototype, and so on, until it either finds the property or reaches null. This process is called delegation.

Example of prototype chain:
const obj = {}; // empty object
console.log(obj.toString()); // found in Object.prototype
n this case, obj doesn't have a toString method of its own, so JavaScript looks up its prototype chain to Object.prototype, which has the toString method.

3. Constructor Functions and Prototypes: When you create an object using a constructor function, the object’s prototype is set to the prototype property of the constructor function.

Example:
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // Output: Hello, my name is Alice

In this case, alice is an instance of Person, but the greet method is not defined directly on alice. Instead, it’s defined on Person.prototype, so when JavaScript doesn’t find greet on alice, it looks for it on Person.prototype.


4. Prototype Property (prototype): When you define a constructor function, JavaScript automatically assigns it a prototype property. This property is an object and is shared among all instances created by that constructor.

Example:
function Animal(type) {
    this.type = type;
}

Animal.prototype.sayType = function() {
    console.log(`I am a ${this.type}`);
};

const dog = new Animal('Dog');
const cat = new Animal('Cat');

dog.sayType(); // Output: I am a Dog
cat.sayType(); // Output: I am a Cat
Here, the sayType method is shared among all instances of Animal because it’s defined on Animal.prototype.

5. Object's __proto__ Property: In most environments, you can access the prototype of an object using the __proto__ property (though this is a legacy feature and is not recommended in modern code). The modern, preferred way to access or set the prototype is using Object.getPrototypeOf() and Object.setPrototypeOf().

Example:
const animal = new Animal('Bird');
console.log(animal.__proto__ === Animal.prototype); // true

6. Prototype Chain Example: Here’s an example of how JavaScript looks up the prototype chain:
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
};

const john = new Person('John');

console.log(john.sayName); // Output: Function sayName
console.log(john.hasOwnProperty('sayName')); // false (sayName is not on the john object itself)
console.log(Person.prototype.hasOwnProperty('sayName')); // true
In this case, the sayName method is defined on Person.prototype, and all instances of Person have access to it through the prototype chain.
------------------------------------------------------
Prototypes in Built-In Objects:
JavaScript's built-in objects like Array, Object, Function, and others have their methods (such as push, map, toString, etc.) defined on their prototypes. All arrays, for instance, inherit methods like push and map from Array.prototype.

Example:
const arr = [1, 2, 3];
arr.push(4); // 'push' is inherited from Array.prototype

Prototype vs __proto__:
- prototype: This is a property of constructor functions. It’s used to define methods and properties that will be shared across all instances created by the constructor.

- __proto__: This is a property of individual objects that points to the object’s prototype. It links instances to the prototype of their constructor.
Creating an Object with a Specific Prototype:
You can create an object with a specific prototype using Object.create(). This is useful for creating objects that inherit from a certain prototype without using a constructor function.

Example:
const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const bob = Object.create(personPrototype);
bob.name = 'Bob';
bob.greet(); // Output: Hello, my name is Bob

Prototype Inheritance:
Prototypes allow for inheritance in JavaScript. When an object inherits properties or methods from another object via the prototype chain, it’s referred to as prototype-based inheritance.

Example of inheritance:
function Animal(type) {
    this.type = type;
}

Animal.prototype.describe = function() {
    console.log(`This is a ${this.type}`);
};

function Dog(name) {
    this.name = name;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
};

const myDog = new Dog('Fido');
myDog.type = 'Dog';
myDog.describe(); // Inherited from Animal: This is a Dog
myDog.bark();     // Own method: Fido barks!

Summary:
- Prototype: A mechanism for inheritance in JavaScript. Objects can inherit properties and methods from a prototype.

- Prototype Chain: The chain of linked prototype objects that JavaScript searches through when accessing properties or methods.

- prototype: A property of constructor functions, used to define shared methods and properties.

- __proto__: A reference to an object’s prototype.
 */

const Person = function (firstName, birthYear) {
  // instance properties of Person
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// instances of the Person
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = 'Homo sapiens';

// Checking if Person.prototype is a prototype of another object using key word "isPrototypeOf". The result always is "true" (if Person.prototype is prototype of jonas) or "false" (if it is not).
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));

console.log(jonas.species, matilda.species);

// Checking if an specific object has his own property using key word "hasOwnProperty()"
console.log(jonas.hasOwnProperty('firstName'));
// But we cant check for prototypes because they are not really inside of matilda and jonas objects. It will return false.
console.log(matilda.hasOwnProperty('species'));
