/*
Write a program that collects every element of an array on a given step.
The input comes as array of strings and N - the step. The collections are every element on the N-th step starting from the first one, until you
reach the end of the array. Then, print elements in a row, separated by single space.
 */

function printElementN(input, N) {
  let resultArr = [];

  for (let i = 0; i < input.length; i = i + N) {
    resultArr.push(input[i]);
  }
  console.log(resultArr.join(' '));
}

// Test data 1
printElementN(['5', '15', '31', '14', '20'], 2);

// Test data 2
printElementN(['dsa', 'asd', 'demo', 'test'], 2);

// Test data 3
printElementN(['1', '2', '3', '4', '5'], 6);
