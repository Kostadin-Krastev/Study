// 16. Strict Mode
/*
 Strict mode is a feature in JavaScript that was introduced in ECMAScript 5 (ES5). It is a way to opt into a restricted version of JavaScript that disallows certain error-prone features or behavior, promotes best practices, and makes it easier to write secure and maintainable code. Strict mode helps catch common coding errors and prevents the usage of some poorly designed features.

To enable strict mode, you simply include the following string at the beginning of a script or a function:
"use strict";

Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

Using strict mode is generally a good practice because it helps catch errors that might otherwise go unnoticed and enforces better coding habits. It's important to note that strict mode applies either to the entire script or to an individual function, and it's not reversible. Once strict mode is enabled, it remains in effect for the entire script or function.

When strict mode is enabled, the following changes occur:

- Variable Declaration: Variables must be declared with var, let, or const before they are used. Assigning a value to an undeclared variable, or using delete on a variable or function name, is not allowed.
// This will throw an error in strict mode
x = 10;

- Assignment Restrictions: Assigning values to read-only properties, global objects, or non-writable global variables results in an error.
// This will throw an error in strict mode
NaN = 42;

- Octal Literal: Octal literals (e.g., 0123) are not allowed.
// This will throw an error in strict mode
var num = 0123;

- Duplicate Parameter Names: Function parameter names must be unique.
// This will throw an error in strict mode
function duplicateParams(a, a) {
    // function body
}

- with Statement: The use of the with statement is not allowed.
// This will throw an error in strict mode
with (obj) {
    // code that uses properties of obj directly
}

- eval and arguments: Assigning values to eval and arguments is not allowed.
// This will throw an error in strict mode
eval = 42;

- this in Functions: In functions, the this value is undefined if the function is not called as a method or through call/apply.
function strictModeExample() {
    console.log(this); // 'undefined' in strict mode
}
strictModeExample();
*/

"use strict";
let hasDriverLicens = false;
const pastTest = true;
