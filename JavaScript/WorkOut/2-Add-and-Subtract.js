/*
You will receive 3 integers. Write a JS function sum to get the sum of the first two integers and subtract function that subtracts the third integer from the result from the Sum function. 
 */
// function that get the sum of two numbers
function sum(inputNumber1, inputNumber2) {
  return inputNumber1 + inputNumber2;
}

// function that calls the firs function and subtracts a number from the result of the function sum
function sub(inputNumber1, inputNumber2, inputNumber3) {
  const calcNumbers = sum(inputNumber1, inputNumber2);
  console.log(calcNumbers - inputNumber3);
}
sub(42, 58, 100);
