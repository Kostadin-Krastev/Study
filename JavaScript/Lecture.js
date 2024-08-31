// 15. The Conditional (Ternary) Operator
/*
The conditional operator, often referred to as the ternary operator, is a compact way to write conditional statements in JavaScript. It provides a shorthand for expressing simple if-else logic in a single line.

The ternary operator is often used for short, simple conditional assignments or to provide a default value. However, it's essential to use it judiciously to maintain code readability. Complex conditions or multiple nested ternary operators can make code harder to understand. In such cases, it might be more readable to use traditional if-else statements.
*/
/*
Example for the structure of Ternery operator:
condition ? expressionIfTrue : expressionIfFalse;

Here's a breakdown of how it works:

- condition: An expression that is evaluated to either true or false.
- expressionIfTrue: The value to be returned if the condition is true.
- expressionIfFalse: The value to be returned if the condition is false.
The idea is that the entire expression evaluates to expressionIfTrue if the condition is true, and to expressionIfFalse otherwise.
Example:
const age = 3;
age >= 18 ? console.log("I like to drink") : console.log("I'am not alowed to drink");
*/

// We can store Ternery operator in Variables
const age = 23;
const drink = age >= 18 ? "I like to drink wine :)" : "I'm not alowed to drink";
console.log(drink);

// Example of Ternary operator inside of Template literal
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// 22. Introduction to Arrays
/*
An array is a special variable, which can hold more than one value.
Example:
const cars = ["Saab", "Volvo", "BMW"];

In JavaScript, an array is a data structure that allows you to store and organize multiple values. Arrays can hold elements of different data types, and they are one of the most commonly used data structures in JavaScript. 

You can declare an array using the Array constructor or using the array literal syntax []
Example:
// Using array literal syntax
const myArrayLiteral = [];

// Using Array constructor (always we have to use the keyword 'new')
const myArray = new Array();

- Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
const car1 = "Saab";
const car2 = "Volvo";
const car3 = "BMW";

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

- Creating an Array:
Using an array literal is the easiest way to create a JavaScript Array.
It is a common practice to declare arrays with the const keyword.
Example:
const cars = ["Saab", "Volvo", "BMW"];

Spaces and line breaks are not important. A declaration can span multiple lines.
Example:
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

You can also create an array, and then provide the elements.
Example:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

- Using the JavaScript Keyword new:
The following example also creates an Array, and assigns values to it.
Example:
const cars = new Array("Saab", "Volvo", "BMW");

The two examples above do exactly the same. There is no need to use new Array().
For simplicity, readability and execution speed, use the array literal method.

- Accessing Array Elements:
You access an array element by referring to the index number.
Example:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); // this will call "Saab" car, because [0] is the first element. [1] is the second element.

Note: 
Array indexes start with 0.
[0] is the first element. [1] is the second element.

- Array Length:
The length property of an array gives you the number of elements in the array.
Example:
//Array
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars.length); // the answer is 3. It is not 0 based so it will count the cars from 1, and there are 3 cars (Saab, Volvo, and BMW)

The length property is always one more than the highest array index. So wen we accessing the last element in the Array we are using - 1, not - 2.

- Accessing the Last Array Element:
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]); // the result will be Mango. if its - 2 it will be Apple. This is because the length property is always one more than the highest array index.

- Changing an Array Element:
This statement changes the value of the first element in cars:
cars[0] = "Opel"; // cars is the name of the Array, [0] is the position of the element we want to change, and "Opel" is the new element.
Example:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
Important!
We cannot replace the entire Array at once. I need to understand more about that!!!
Example:
const cars = ["Saab", "Volvo", "BMW"];
cars = cars["Opel", "Mercedes", "Audi"];

- Putting Array inside of an Array:
We can put an Array inside of an Array.
Example:
const friends = ["Bob", "Go6o", "sa6o"];
const carsAndFriends = ["Saab", "Opel", "Mercedes", friends];

Arrays in JavaScript are versatile and provide a powerful way to work with collections of data. They play a crucial role in web development, especially when dealing with lists of items or managing data in a structured format.
 */
// The Array
const friends = ["Michle", "Go6o", "Sa6o"];

// calling Michle from Array frinds
console.log(friends[0]);

// Calling Go6o from Array frinds
console.log(friends[1]);

// Calling the last element (Sa6o) in the Array frends
console.log(friends[friends.length - 1]);

// Replacing element in the Array friends
friends[2] = "Tomy";
console.log(friends);

// friends = ["Opel", "Mercedes", "Audi"]; - we cannot replace the entire Array

// Putting Array frinds inside the Array carsAndFrinds
const carsAndFriends = ["Saab", "Opel", "Mercedes", friends];

console.log(carsAndFriends);

// Creating Array for Jonas info
const firstName = "Jonas";
const jonas = [firstName, "Schmeddman", 2037 - 1991, "teacher", friends];

console.log(jonas);

// Exercise for Array
// function for calculating age
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Array storing years
const years = [1990, 1967, 2002, 2010, 2018];

// Variables storing calculation from function calcAge and parametars from Array years
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// Creating Array wich calculate years by storing function calcAge and parametars from Array years
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Exercise from ChatGTP
/*
Task: Array Manipulation

Write a JavaScript program that performs the following operations on an array of numbers:

1. Create an array of numbers (you can choose the numbers).
2. Print the original array.
3. Add a new number to the end of the array.
4. Remove the first number from the array.
5. Print the final array after these operations.
*/

// Task 1: creating an Array that is storing numbers
const randomNumbers = [1, 7, 5, 10];

// Task 2: print the Array
// console.log(randomNumbers);

// Task 3: adding number in the last position of the Array
randomNumbers[randomNumbers.length - 1] = 11;
// console.log(randomNumbers);

// Task 4: Removing first number from the Array
randomNumbers.shift(0);

console.log(randomNumbers);

// 23. Basic Array Operations (Methods)

/*
- Basic Array Methods:
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()

- Array length
The length property returns the length (size) of an array:
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

- Array toString()
The JavaScript method toString() converts an array to a string of (comma separated) array values.

Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Result:
Banana,Orange,Apple,Mango

- Array at()
ES2022 intoduced the array method at():

Examples:
Get the third element of fruits using at():

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

Get the third element of fruits using []:
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];

The at() method returns an indexed element from an array.
The at() method returns the same as [].
The at() method is supported in all modern browsers since March 2022.
Note:
Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
The at() method was introduced in ES2022 to solve this problem.

- Array join()
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Result:
Banana * Orange * Apple * Mango

-----------------------------------------

Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.
This is what popping and pushing is:
Popping items out of an array, or pushing items into an array.

- Array pop()
The pop() method removes the last element from an array.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

The pop() method returns the value that was "popped out".
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

- Array push()
The push() method adds a new element to an array (at the end).
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

The push() method returns the new array length.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

-----------------------------

Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.

- Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

The shift() method returns the value that was "shifted out".
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();

- Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

The unshift() method returns the new array length.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

------------------------

Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

- Array length
The length property provides an easy way to add a new element to an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi"; // Kiwi is add at the back as a last element.

- Array delete()
Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead.
Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

---------------------

Finding the Index of an Element:

indexOf(): Returns the index of the first occurrence of a specified element in an array. If the element is not found, it returns -1.
Example:
const fruits = ['apple', 'banana', 'orange'];
const index = fruits.indexOf('banana'); // the result is 1, because bannana is on secund position, and as we know 0 is the first posiotion in a Array

----------------------
- Array .includes()
.includes() method is used to check whether an array includes a specific element. 
It returns a boolean value:
- returns true if an array contains a specified value.
- returns false if the value is not found.
The includes() method is case sensitive, and its strict (does not covert a string into a number).
Example:
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // Expected output: true

console.log(pets.includes('at')); // Expected output: false
*/

const friends = ["Michael", "Steven", "Peter"];
// Add elements
// at the back of the Array with .push
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//at the front of the Array with .unshift
friends.unshift("John");
console.log(friends);

// Remove elements
// the last element with .pop
friends.pop();
console.log(friends);

// the first element with .shift
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// 24. Introduction to Objects #42

/*
In JavaScript, most things are objects, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. 

- Booleans can be objects (if defined with the new keyword)
- Numbers can be objects (if defined with the new keyword)
- Strings can be objects (if defined with the new keyword)
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

Overall we should use Array for moe structured datta, and Object for more 
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

// 25. Dot vs. Bracket Notation #43

/*
In JavaScript, both dot notation (.) and bracket notation ([]) are used to access and manipulate properties of objects. However, they have some differences in terms of syntax and use cases:

---------------------------------------------
- Dot Notation:

Syntax: object.property

Used when the property name is a valid identifier (starts with a letter, doesn't contain spaces or special characters except for _).
More concise and easier to read in certain cases.
Example:
const person = {
  name: 'John',
  age: 25,
  address: {
    city: 'New York',
    state: 'NY'
  }
};

console.log(person.name); // Output: John
console.log(person.address.city); // Output: New York

Pros of Dot Notation:

- Dot notation is easy to read and understand, especially for developers who are familiar with object-oriented programming.

- It provides a clean and concise syntax, making it easier to write and maintain code.

- Dot notation is faster than bracket notation, as it doesn’t require any additional processing.

Cons of Dot Notation:

- Dot notation cannot be used for properties with special characters or spaces in their names.

- It cannot be used for accessing properties dynamically.

----------------------------------------------
- Bracket Notation:

Syntax: object["property"] or object[expression]
Used when the property name is not a valid identifier, or when the property name is stored in a variable or is the result of an expression.
More flexible than dot notation.
Examples:
const person = {
  name: 'John',
  age: 25,
  address: {
    city: 'New York',
    state: 'NY'
  }
};

console.log(person['name']); // Output: John
console.log(person['address']['city']); // Output: New York

Pros of Bracket Notation:

- Bracket notation can be used for accessing properties dynamically, as the property name can be passed as a variable.

- It can be used for accessing properties with special characters or spaces in their names.

Cons of Bracket Notation:

- Bracket notation is slightly slower than dot notation, as it requires additional processing to evaluate the property name.

- It can be more verbose and harder to read, especially for developers who are not familiar with the syntax.
*/

const jonas = {
  firstName: "Jonas",
  lastName: "Shemdamann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas.lastName);
console.log(jonas["friends"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// Creating prompt
const intrestedIn = prompt(
  "What did you whant to know about Jonas? Choose between firstName, lastName, age, job, and friends."
);
console.log(jonas[intrestedIn]);

// Creating message that is shown to the user if he inputs something that does not exist
if (jonas[intrestedIn]) {
  console.log(jonas[intrestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends."
  );
}

// Adding new properties in the object
jonas.location = "Portugal";
jonas["tweeter"] = "@something";
console.log(jonas);

// Challenge
// Jonas has 3 friends, and his best friend is called Michal

console.log(
  `${jonas.firstName} has ${
    jonas["friends".lenght]
  } friends, and his best friend is called ${frinds[0]}.`
);

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
  // Using normal function expresion
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // Using this keyword in function expresion
  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },

  //   Creating this.age inside the function expresion
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // Part of the teacher solution of the chalenge
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver license`;
  },
};
// Here we calculate the age, and we have to do it only once
console.log(jonas.calcAge());

// Here we retrieve the result of the calculation that we do before. This is the most efficient solution
console.log(jonas.age);

// Chalenge
//"Jonas is 46-years old teacher, and he has a driver license."
// My solution
/* 
console.log(
  `${jonas.firstName} is ${jonas.age}-years old ${jonas.job}, and he ${
    jonas.hasDriverLicense
      ? "has a driver license."
      : "does not have a driver license."
  }`
);
*/

// Teacher solution - he creates a proparty getSummary inside of the object Jonas
console.log(jonas.getSummary());
