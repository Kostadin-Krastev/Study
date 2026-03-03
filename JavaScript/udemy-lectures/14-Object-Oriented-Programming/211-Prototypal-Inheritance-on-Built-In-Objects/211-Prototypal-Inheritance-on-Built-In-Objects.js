/*
// 211 Prototypal Inheritance on Built-In Objects

Prototypal inheritance in JavaScript is a system where objects inherit properties and methods from other objects via the prototype chain. This model applies not only to custom objects but also to built-in objects like Array, Object, Function, and others. Understanding how prototypal inheritance works with built-in objects is essential because many of the methods you use in JavaScript are inherited from the prototypes of these objects.

Built-In Objects and Their Prototypes:
JavaScript provides several built-in objects (such as Object, Array, Function, Date, etc.), and each of these has a prototype object where shared methods and properties are defined. When you create an instance of one of these objects, the new instance automatically inherits the methods and properties from the prototype.

Example with Array:
The Array constructor function has a prototype object (Array.prototype) that contains useful methods like push(), pop(), map(), and others. All arrays created in JavaScript automatically inherit these methods via the prototype.
const arr = [1, 2, 3];

// `arr` inherits methods from `Array.prototype`
console.log(arr.push); // function push() {...} from Array.prototype
console.log(arr.map);  // function map() {...} from Array.prototype

Example with Object:
The Object constructor also has a prototype (Object.prototype), and all objects in JavaScript inherit methods such as toString(), hasOwnProperty(), and others from it.
const obj = { name: "Alice" };

// `obj` inherits from Object.prototype
console.log(obj.toString()); // [object Object] from Object.prototype
console.log(obj.hasOwnProperty('name')); // true, method from Object.prototype
----
Key Concepts in Prototypal Inheritance for Built-In Objects:
1. Prototype Chain: 
Every object in JavaScript has an internal link ([[Prototype]]) to its prototype. For built-in objects like Array, this link points to Array.prototype. When a method or property is accessed, JavaScript first looks for it on the object itself. If it’s not found, it checks the object’s prototype, and then it continues up the prototype chain until it either finds the property or reaches the null prototype at the end of the chain.

2. Inheritance Across Built-In Types:
Every object in JavaScript inherits from Object.prototype at the root of the chain, even built-in objects like arrays and functions.
This means that all objects, arrays, and functions can access the methods defined in Object.prototype.

3. Built-In Object Prototype Hierarchy: 
Let’s look at the prototype chain for some common built-in types:
- Array Prototype Chain:
    - An array instance ([]) inherits from Array.prototype.
    - Array.prototype itself inherits from Object.prototype.
Example:
const arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

- Function Prototype Chain:
    - A function instance (created using the Function constructor or function expressions) inherits from Function.prototype.
    - Function.prototype also inherits from Object.prototype.
Example:
function greet() {
    console.log("Hello");
}

console.log(Object.getPrototypeOf(greet) === Function.prototype); // true
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); // true

Customizing Built-In Objects via the Prototype:
You can add custom methods or properties to the prototypes of built-in objects, which will then be available to all instances of that type. However, modifying built-in prototypes is generally not recommended as it can lead to conflicts and unexpected behavior, especially when working with third-party libraries.

Example of Adding a Method to Array.prototype:
Array.prototype.last = function() {
    return this[this.length - 1];
};

const arr = [1, 2, 3];
console.log(arr.last()); // Output: 3
In this example, the last() method is added to Array.prototype, so now all arrays will have this method available.

Object.prototype as the Ultimate Prototype:
All objects in JavaScript, including instances of built-in objects like arrays and functions, inherit from Object.prototype. This is why every object has access to methods such as toString(), valueOf(), and hasOwnProperty(), which are defined on Object.prototype.
Example:
const arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3" (inherited from Object.prototype)

const func = function() {};
console.log(func.toString()); // Output: "function() {}" (inherited from Function.prototype)

Even though arrays have their own version of toString() (inherited from Array.prototype), they still have access to the toString() method from Object.prototype.

Overriding Methods on Built-In Prototypes:
You can override methods that are defined on built-in prototypes, but this should be done cautiously. If you override core methods, it can break functionality or cause inconsistencies in the behavior of your application.

Example of Overriding toString() on Object.prototype:
Object.prototype.toString = function() {
    return "Custom toString method";
};

const obj = {};
console.log(obj.toString()); // Output: Custom toString method

In this example, every object now uses the custom toString() method, which can have unintended consequences.

Prototype Inheritance in Built-In Objects – Summary:
- Inheritance from Prototypes: 
JavaScript's built-in objects like Array, Object, Function, etc., use prototypal inheritance. Each instance of these objects inherits properties and methods from their respective prototype objects (Array.prototype, Object.prototype, etc.).

- Prototype Chain: 
All objects in JavaScript have a prototype chain that eventually leads back to Object.prototype. This allows objects to inherit methods and properties defined at various levels of the chain.

- Customizing Prototypes: 
You can extend the prototypes of built-in objects by adding methods or properties, but this is generally discouraged in production code as it may cause issues with other code.

- Overriding Methods: 
It's possible to override existing methods on built-in prototypes, but care should be taken to avoid breaking the default behavior of built-in objects.

Prototypal inheritance is fundamental to JavaScript and affects how both custom and built-in objects behave in the language. By understanding the prototype chain, you can effectively harness this inheritance model for efficient and reusable code.
 */

const Person = function (firstName, birthYear) {
  // instance prorates of Person
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// instance of the Person object
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);

// Prototype of Person
Person.prototype.calcAge = function () {
  const age = 2037 - this.birthYear;
  console.log(age);
};

// Checking the prototype of the prototype until we get Object.prototype and after that to null
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructure);

const arr = [3, 6, 9, 5, 4, 8];
console.log(arr.__proto__);
