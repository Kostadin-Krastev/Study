'use strict';
/*
1. Global Scope
    Variables declared outside any function or block live in the global scope.
    ✔ Accessible everywhere
    ⚠ Overusing globals can cause bugs and conflicts

2. Function Scope (var)
    Variables declared with var are function-scoped, not block-scoped.
    var ignores blocks like if, for, etc. It only cares about the function.

3. Block Scope (let and const)
    Variables declared with let or const are block-scoped.
    A block is anything inside { }:
        - if statements
        - loops
        - standalone blocks
        - functions

4. Scope Chain
    JavaScript uses a lexical scope model.
    This means: inner scopes can access outer scopes, but not the other way around.
    
    JS looks for variables:
        1. In the current scope
        2. Then the parent scope
        3. Then the global scope
        4. If not found → ReferenceError
    This lookup process is called the scope chain.
*/
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, you are millenial, ${firstName}`;
      //   console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT!';
    }
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';

calcAge(1991);
