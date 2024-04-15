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
console.log(randomNumbers);

// Task 3: adding number in the last position of the Array
randomNumbers[randomNumbers.length - 1] = 11;
console.log(randomNumbers);

// Task 4: Removing first number from the Array
randomNumbers.shift(0);
console.log(randomNumbers);
