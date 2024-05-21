/**
 JavaScript has 7 primitive Data types
1. String / let firstName = "Kotce";
2. Number / let age = 39;
3. Boolean / logical type that can be only true or fals. It is used for taking desicisions / let fullAge = true;
4. Undefined / is variable that has no value yet in to store (empty value) / let age;
5. Null / very similar with Undefined;
6. Symbol / define a value that is unique and cannot be changed.
7. Bigint / It is another type of numbers. It is used for larger integers (numbers) that the Number type cannot hold.

The Object Data type
The object data type can contain:

1. An object
2. An array
3. A date
 */

/*
 In JavaScript value has the type, not the variable. For example, one variable can be a number but later can be changed into a string. This is not a problem, but in longer terms can be a cost for bugs in the code.
JavaScript has dynamic typing which means that we do not have to manually define the data type of the value stored in the variable. Instead, the data type is determined automatically.
 */

/* Boolian example
let javasriptIsFun = true;
console.log(javasriptIsFun);
*/
/**
 typeof operator - You can use them to find the data type of a JavaScript variable.
 Example:
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
 */

/* typeof operator
let javasriptIsFun = true;
console.log(typeof javasriptIsFun);
*/

/* null bug
when we use typeof to define null operator, JavaScript gives us a bug. It says that null is an object which is not true. It should return undefined.
Example:
console.log(typeof null);
*/

/*Dynamic typing
When we change the value of a variable we do not need to write again keyword let. 
Example:
let age = 39;
age = 40; 
*/

/*
Undefined (empty value)
let year;
console.log(year);
 */
