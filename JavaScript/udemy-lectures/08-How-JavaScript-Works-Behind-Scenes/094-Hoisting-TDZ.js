'use strict';
/*
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope during the compilation phase, before the code actually runs.

Important: only the declarations are hoisted, not the assignments.

1. Hoisting with var
console.log(x); 
var x = 5;
You might expect an error, but the output is: undefined

Why?

JavaScript interprets it like this:
var x;        // declaration is hoisted
console.log(x);
x = 5;        // assignment stays in place

So x exists, but it hasn't been assigned a value yet.

------------
2. Hoisting with let and const

console.log(a);
let a = 10;

This will throw an error: ReferenceError: Cannot access 'a' before initialization

Why?

let and const are technically hoisted, but they stay in something called the Temporal Dead Zone (TDZ) until the line where they are declared.

Example:
let a = 10;
console.log(a); // works

------------
3. Function Hoisting

Function Declarations (fully hoisted)

Example:
sayHello();

function sayHello() {
  console.log("Hello");
}

This works because the entire function is hoisted.

Function Expressions (not fully hoisted)

Example:
sayHello();

var sayHello = function() {
  console.log("Hello");
};

Result: TypeError: sayHello is not a function

What JavaScript sees:
var sayHello;   // hoisted

sayHello();     // undefined()

sayHello = function() {
  console.log("Hello");
};

-------------
5. Quick Summary
Type	                Hoisted	                    Initial Value
var	                    Yes	                        undefined
let	                    Yes	                        TDZ (cannot use before declaration)
const	                Yes	                        TDZ
Function declaration	Fully hoisted	            Usable immediately
Function expression	    Variable hoisted only	    var - undefined / let, const - TDZ
-------------------------- 
*/

// variables lecture example
// console.log(year);
var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// function lecture example
// console.log(addExpr(2, 2));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example for hoisting pitfall
console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
