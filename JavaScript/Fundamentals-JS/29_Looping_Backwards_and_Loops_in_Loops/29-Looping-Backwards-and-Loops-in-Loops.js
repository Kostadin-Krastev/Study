// 29:  Looping Backwards and Loops in Loops 048

/*
Looping Backwards in JavaScript
Looping backwards refers to iterating through an array or a range of numbers from the end to the beginning. This is useful in cases where you want to process items from the last to the first, such as when you are modifying the array while iterating over it.

Here’s how you can loop backwards using a for loop:
let arr = [10, 20, 30, 40, 50];

// Loop backwards from the end of the array to the beginning
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

Key Points:
- The loop starts at arr.length - 1, which is the last index.
- The condition i >= 0 ensures the loop runs until the first element.
- The i-- decrements i in each iteration, making the loop move backwards.

2. Loops in Loops (Nested Loops) in JavaScript
Nested loops refer to placing one loop inside another. Each time the outer loop runs one iteration, the inner loop runs completely. Nested loops are often used for processing multidimensional arrays or performing comparisons between elements of two different arrays.

Example of nested loops:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Outer loop: iterating through rows
for (let i = 0; i < matrix.length; i++) {
    // Inner loop: iterating through columns
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

Key Points:
- The outer loop iterates through the rows of the 2D array (matrix), while the inner loop iterates through the columns (or elements within each row).
- The result is that every element of the 2D array is printed row by row.

Common Use Cases:
1. Processing Grids or Matrices: Nested loops are ideal for traversing 2D arrays like matrices or tables.

2.Comparing Arrays: You can use nested loops to compare every element of one array with every element of another array.

Potential Pitfalls:
- Performance: Nested loops can lead to performance issues, especially when dealing with large arrays or complex computations, as the time complexity grows multiplicatively (e.g., O(n^2) for two nested loops).
- Readability: Code can become harder to read and maintain with deep levels of nesting, so avoid excessive nesting when possible.
*/

const jonas = [
  "Jonas",
  "Smedman",
  2037 - 1991,
  "teacher",
  ["Michal", "Peter", "Steven"],
];
//   Looping backwards
function loopingBackwards(jonas) {
  for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
  }
}
loopingBackwards(jonas);

// Loop inside a loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------Start exercise ${exercise}`);
  for (let reps = 1; reps <= 10; reps++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${reps}`);
  }
}
