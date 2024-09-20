"use strict";
/*
For the furnishing of the office purchased 3 cabinets. One cabinet cost $n, the second was 20% cheaper than the first, and the third cost 15% more than the other two  combined. 
On the console print the total cost of the three cabinets – a real number. The output must be rounded to the third decimal point. 
 */

function furnitureCost(costFirstCabinet) {
  // Calculating the price of secund cabinet
  const costSecundCabinet = costFirstCabinet * (1 - 0.2);
  // Calculating the total price for first and secund cabinets
  const sumFirstTwoCabinets = costFirstCabinet + costSecundCabinet;
  // Calculating the price of third cabinet
  const costThirdCabinet = sumFirstTwoCabinets * (1 + 0.15);
  //   Calculating the total price
  const totalSum = sumFirstTwoCabinets + costThirdCabinet;
  //   Rounding the total cost to the third decimal point
  console.log(totalSum.toFixed(3));
}

furnitureCost(455.3);
