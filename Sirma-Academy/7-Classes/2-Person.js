'use strict';
/*
Write a class that represents a personal record. It has the following properties, all set from the constructor: 
- firstName
- lastName
- age
- email
And a method toString(), which prints a summary of the information. See the example
for formatting details.

The toString()method should return a string in the following format:
`{firstName} {lastName} (age: {age}, email: {email})`
 */

class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    const result = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;

    return result;
  }
}

let person = new Person('Homer', 'Simpson', 42, 'homer@yahoo.com');

console.log(person.toString());
