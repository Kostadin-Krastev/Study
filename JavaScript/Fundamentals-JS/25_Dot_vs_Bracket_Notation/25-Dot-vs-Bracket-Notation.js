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

const numberOfFriend = friends.length;

console.log(
  `${jonas.firstName} has ${numberOfFriend} friends, and his best friend is called ${frinds[0]}.`
);
