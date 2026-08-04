'use strict';
/*
Calculate the monthly electricity bill based on the number of units consumed and the rate per
unit. 
Additionally, a fixed charge of $10 is added to the bill.
Use the formula
Total Bill = ( Units consumed × Rate per unit ) + 10
*/

let unitsConsumed = 100;
unitsConsumed = 200;
unitsConsumed = 150;
let ratePerUnit = 1.0;
ratePerUnit = 1.1;

const calculateMonthlyElectricityBill = function (unitsConsumed, ratePerUnit) {
  const fixedChargeDollars = 10;
  const totalBill = unitsConsumed * ratePerUnit + fixedChargeDollars;

  console.log(totalBill.toFixed(2));
};

calculateMonthlyElectricityBill(unitsConsumed, ratePerUnit);
