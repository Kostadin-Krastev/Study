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

console.log(friends.indexOf());
