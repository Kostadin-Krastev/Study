/*
Write a function that accepts two integers "numOne" and "numTwo". Following the described sequence, find and print in the shown format: 
∙ Sum of numbers 
∙ Difference Between Numbers
∙ Multiplication 
∙ Arithmetic mean 
 */
function actionNumbers(numOne, numTwo) {
  const sumOfNumbers = numOne + numTwo;
  const diffNumbers = Math.abs(numOne - numTwo);
  const multipliNumbers = numOne * numTwo;
  const arithmeticNum = (numOne + numTwo) / 2;

  console.log(sumOfNumbers);
  console.log(diffNumbers);
  console.log(multipliNumbers);
  console.log(arithmeticNum);
}

actionNumbers(7, 14);
