// 24. Introduction to Objects #42

/*
In JavaScript, most things are objects, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. 

- Booleans can be objects (if defined with the 'new' keyword)
- Numbers can be objects (if defined with the 'new' keyword)
- Strings can be objects (if defined with the 'new' keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects

All JavaScript values, except primitives, are objects.

You can even create your own objects to encapsulate related functions and variables into efficient packages and act as handy data containers. 

An object is a complex data type that allows you to store and organize data in key-value pairs. Objects are one of the fundamental concepts in the language, and they provide a way to represent and structure data in a more flexible manner. 

---------------------------------------------------
Object Creation:
You can create an object using object literal notation or the Object constructor. (more in the next lecture)

- Object Literal:
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

- Object Constructor:
let person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";

----------------------------------------------------
    JavaScript Primitives
A primitive value is a value that has no properties or methods.

3.14 is a primitive value

A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:
- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Immutable
Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

Example:
Value	    Type	        Comment
------------------------------------------------------
"Hello"	    string	        "Hello" is always "Hello"
3.14	    number	        3.14 is always 3.14
true	    boolean	        true is always true
false	    boolean	        false is always false
null	    null (object)	null is always null
undefined	undefined	    undefined is always undefined

---------------------------------------------------------
    Objects are Variables
JavaScript variables can contain single values.
Example:
const person = "John Doe";

JavaScript variables can also contain many values. Objects are variables too. But objects can contain many values.

Object values are written as:
name : value pairs (name and value separated by a colon).

Example:
let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

A JavaScript object is a collection of named values

It is a common practice to declare objects with the const keyword.

Example:
const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

-------------------------------------------------------------
    Object Properties
The named values, in JavaScript objects, are called properties.

Property	    Value
---------------------
firstName	    John
lastName	    Doe
age	            50
eyeColor	    blue

Overall we should use Array for moe structured data, and Object for more unstructured data. Data that we want to name, and extract from the Object based on that name.
*/

// Example of an Array that can be modified as an object for better coding and understanding
const jonasArray = [
  "Jonas",
  "Shemdmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Example of an object - we turn the Array jonasArray into an object jonas
const jonas = {
  firstName: "Jonas",
  lastName: "Shemdamann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
