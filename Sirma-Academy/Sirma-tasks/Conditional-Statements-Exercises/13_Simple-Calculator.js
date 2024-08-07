"use strict";
function calculator(numberOne, numberTwo, operation) {
  if (operation === "add") {
    console.log(numberOne + numberTwo);
  } else if (operation === "subtract") {
    console.log(numberOne - numberTwo);
  } else if (operation === "divide") {
    console.log(numberOne / numberTwo);
  } else if (operation === "multiply") {
    console.log(numberOne * numberTwo);
  }
}

calculator(5, 2, "divide");
