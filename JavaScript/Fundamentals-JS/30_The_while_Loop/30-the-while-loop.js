"use strict";
// 30: The while Loop 049

/*
The while loop in JavaScript is used to execute a block of code repeatedly as long as a specified condition evaluates to true. Unlike the for loop, which is often used when the number of iterations is known beforehand, the while loop is generally used when the number of iterations is unknown, and the loop continues based on a condition.

Syntax of the while Loop:
while (condition) {
  // Code to be executed
}

- condition: The loop will continue to run as long as this condition evaluates to true. Once the condition becomes false, the loop will stop.
- Body: This is the block of code that will be executed for each iteration.

Basic Example:
let count = 0;

while (count < 5) {
  console.log(count);  // Output: 0, 1, 2, 3, 4
  count++;  // Increment count to eventually make the condition false
}

In this example:

- The loop runs as long as count < 5 is true.
- After each iteration, count is incremented by 1.
- Once count reaches 5, the condition becomes false, and the loop terminates.

Infinite Loop:
If the condition in a while loop never becomes false, the loop will run infinitely, which can cause the browser or the JavaScript engine to crash.

Example of an Infinite Loop:
let i = 0;

while (i >= 0) {  // This condition is always true
  console.log(i);
  i++;  // This keeps increasing forever
}
This loop will never end because i will always be greater than or equal to 0.

Example: Using while for User Input
You can use a while loop when you want to continue prompting a user until they enter a valid input.
let userInput;

while (userInput !== "exit") {
  userInput = prompt("Enter a command (type 'exit' to stop):");
  console.log("You entered:", userInput);
}

- This loop will keep asking the user for input until they type "exit", at which point the condition becomes false, and the loop stops.

The break Statement in a while Loop:
You can use the break statement to exit the loop prematurely, even if the condition is still true.

Example of Using break:
let i = 0;

while (i < 10) {
  console.log(i);  // Output: 0, 1, 2, 3
  if (i === 3) {
    break;  // Exit the loop when i is 3
  }
  i++;
}

The continue Statement in a while Loop:

The continue statement skips the current iteration of the loop and moves on to the next iteration.

Example of Using continue:
let i = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;  // Skip when i is 3
  }

  console.log(i);  // Output: 1, 2, 4, 5 (3 is skipped)
}

The do...while Loop:

The do...while loop is similar to the while loop, but it guarantees that the block of code will run at least once, even if the condition is false from the beginning.

Syntax of do...while:
do {
  // Code to be executed
} while (condition);

Example:
let count = 5;

do {
  console.log(count);  // Output: 5 (even though count is not < 5)
  count++;
} while (count < 5);

- In this example, the code inside the do block executes once before checking the condition.

Summary:

- The while loop runs as long as the given condition is true.

- Be careful with infinite loops; make sure the loop has a way to exit by making the condition false eventually.

- break can stop the loop early, and continue can skip the current iteration.

- The do...while loop is a variant that runs the code at least once before checking the condition.

- The while loop is useful when you don't know beforehand how many times you need to loop, or when the number of iterations depends on dynamic conditions.
 */

// For Loop
for (let reps = 1; reps <= 5; reps++) {
  // console.log(`Lifting weights repetition: ${reps}`);
}

// While loop
let reps = 1;
while (reps <= 10) {
  // console.log(`----------Lifting weights repetition: ${reps}`);
  reps++;
}

// Lecture exercise: roll the dice until it gets 6
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
