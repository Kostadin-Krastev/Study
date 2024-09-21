"use strict";
/*
Calculate the monthly electricity bill based on the number of units consumed and the rate per unit. Additionally, a fixed charge of $10 is added to the bill.
Use the formula
Total Bill = ( Units consumed × Rate per unit ) + 10
 */

// Storing the units in variables
let numberUnitsConsumed = 150;
let ratePerUnit = 1.1;
const fixedCharge = 10;

// Using function declaration to calculate the monthly electricity bill
function calculateMonthlyElectricityBill(numberUnitsConsumed, ratePerUnit) {
  const totalBill = numberUnitsConsumed * ratePerUnit + fixedCharge;
  console.log(totalBill.toFixed(2));
}

calculateMonthlyElectricityBill(numberUnitsConsumed, ratePerUnit);
