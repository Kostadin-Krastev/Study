"use strict";
/*
Write a function to convert euro (EUR) to Bulgarian leva (BGN).  Format the result to 2 decimal places. 
Use a fixed rate between the euro and lev: 1 EUR = 1.95583 BGN.
 */

function euroToBgnConvertor(amountEuro) {
  const fixedRate = 1.95583;
  const calcEuroToBgn = amountEuro * fixedRate;
  //   Formatting the result to 2 decimal places
  const resultAmountBgn = calcEuroToBgn.toFixed(2);
  console.log(resultAmountBgn);
}

euroToBgnConvertor(123);
