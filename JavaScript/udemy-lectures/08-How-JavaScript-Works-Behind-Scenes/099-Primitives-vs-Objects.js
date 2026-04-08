'use strict';
// Demo code from lectures "099 Primitives vs. Objects (Primitive vs. Reference Types)" and "100 Primitives vs. Objects in Practice"

// Demo code from lecture "099 Primitives vs. Objects (Primitive vs. Reference Types)"
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);

// Demo code from lecture "100 Primitives vs. Objects in Practice"
console.log('---------------NEW LECTURE CODE----------------');

// Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Object (Reference) types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Shallow copy objects (merging first level objects) - Only works on a first level: if we have an object inside of object, the inner object will be still pointing to the same place in the HEAp memory
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], // we cannot copy this array. It will always point to the same place in the HEAP memory;
};

const jessica2Copy = Object.assign({}, jessica2);
console.log('New copy of Jessica:', jessica2Copy);

jessica2Copy.lastName = 'Davis';

// Add new member to the Jessica family - it will not work because family array is not first level object and still be pointing to the his original point in HEAP memory
jessica2Copy.family.push('Mary');
jessica2Copy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessica2Copy);
