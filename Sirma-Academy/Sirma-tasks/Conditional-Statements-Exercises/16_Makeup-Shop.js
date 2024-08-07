"use strict";
function calculateProfit(
  renovationCost,
  powderCount,
  lipstickCount,
  spiralCount,
  shadowsCount,
  concealerCount
) {
  // prices of the products
  const powderPrice = 2.6;
  const lipstickPrice = 3.0;
  const spiralPrice = 4.1;
  const shadowsPrice = 8.2;
  const concealerPrice = 2.0;

  // total price of the ordered products
  const totalSales =
    powderCount * powderPrice +
    lipstickCount * lipstickPrice +
    spiralCount * spiralPrice +
    shadowsCount * shadowsPrice +
    concealerCount * concealerPrice;

  // total count of products
  const totalCount =
    powderCount + lipstickCount + spiralCount + shadowsCount + concealerCount;

  // Apply discount
  let finalSales = totalSales;
  if (totalCount >= 50) {
    finalSales = totalSales * 0.75; // Apply a 25% discount
  }

  // rent
  const rent = finalSales * 0.1;
  const profit = finalSales - rent;

  // Check the profit
  if (profit >= renovationCost) {
    const remainingMoney = profit - renovationCost;
    console.log(`Yes! ${remainingMoney.toFixed(2)} BGN left.`);
  } else {
    const lackOfMoney = renovationCost - profit;
    console.log(`Not enough money! ${lackOfMoney.toFixed(2)} BGN needed.`);
  }
}

calculateProfit(40.8, 20, 25, 30, 50, 10);
