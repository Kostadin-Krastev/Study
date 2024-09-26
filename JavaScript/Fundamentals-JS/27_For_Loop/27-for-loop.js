// 27: For Loop 046
/*
A for loop in JavaScript is a control flow statement used to repeatedly execute a block of code as long as a specified condition is true. It's commonly used when you know how many times you want to run a loop in advance.

Syntax:
for (initialization; condition; increment/decrement) {
  // Code to be executed
}

Components:
1. Initialization: This is executed before the loop starts. It usually sets up a counter variable that have to be let because it will be changed fro the loop.

Example:
let i = 0;

2. Condition: This is checked before each loop iteration. The loop runs as long as the condition is true.

Example:
i < 5;  // Loop runs while i is less than 5

3. Increment/Decrement: This is executed after each iteration. It updates the counter variable.

Example:
i++;  // Increment i by 1 after each iteration

4. Block of code: The statements inside the curly braces {} are executed each time the loop runs.

Example of a basic for loop:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
Output:
0
1
2
3
4

How it works:
1. let i = 0; initializes the loop by setting i to 0.
2. i < 5; checks the condition. If i is less than 5, the loop body executes.
3. console.log(i); prints the value of i.
4. i++ increments i by 1 after each iteration.
5. The loop continues until the condition i < 5 is no longer true (i.e., when i equals 5).
Variations:
Looping through an array:
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

- Breaking out of a loop: The break statement can be used to exit the loop early.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

- Skipping an iteration: The continue statement skips the current iteration and moves to the next one.
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;  // Skips when i is 2
  }
  console.log(i);
}

Conclusion:
The for loop is versatile and efficient for iterating over a known range, making it one of the most commonly used loops in JavaScript.
*/
