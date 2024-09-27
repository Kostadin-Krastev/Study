"use strict";
/*
Print the multiplication table for numbers 1 through 10 in the following format:
"{first multiplier} * {second multiplier} = {result}".
 */
function multiplication() {
  for (let firsMultiplier = 1; firsMultiplier <= 10; firsMultiplier++) {
    for (let secondMultiplier = 1; secondMultiplier <= 10; secondMultiplier++) {
      let result = firsMultiplier * secondMultiplier;
      console.log(`${firsMultiplier} * ${secondMultiplier} = ${result}`);
    }
  }
}

multiplication();
