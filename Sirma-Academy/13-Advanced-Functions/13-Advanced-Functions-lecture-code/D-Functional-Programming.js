// First Class Function

// * 1. Function can be assigned to a variable
const sum = function (a, b) {
  console.log(a + b);
};

// * 2. Function can be passed as an argument
function execute(operation, first, second) {
  return operation(first, second);
}

execute(sum, 4, 8);
execute((a, b) => console.log(a - b), 10, 5);
execute(
  function (a, b) {
    console.log(a * b);
  },
  10,
  5
);

// * 3. Function can be return as result from another function
function operationBuilder(operationName) {
  switch (operationName) {
    case 'divide':
      return (a, b) => a / b;
    case 'multiply':
      return (a, b) => a * b;
    case 'sqrt':
      return (a) => Math.sqrt(a);
  }
}

const sqrtOperation = operationBuilder('sqrt');
console.log(sqrtOperation(4));

// Crazy example
console.log(execute(operationBuilder('divide'), 10, 2));

/*
The brackets on 'divide' are there to:

- Ensure that 'divide' is treated as a string argument for operationBuilder.
- Allow operationBuilder to determine which operation function (like division) to return.

Why Not Remove Brackets?
If you write operationBuilder(divide), it would be interpreted as trying to use a variable named divide (which does not exist unless you've defined one). That's why you need the brackets and quotes around 'divide' to make it a string literal, which matches the expected input of operationBuilder.
 */

// High-Order Function
/*
Any function that take other functions as an argument, or contain a function, or return a function as a result is High-Order Function
 */

// Predicate function - accepts an argument and return boolean
function isPassed(grade) {
  return grade >= 3;
}
console.log(isPassed(4));

// Pure Functions - Always return the same result if the same arguments are passed.
