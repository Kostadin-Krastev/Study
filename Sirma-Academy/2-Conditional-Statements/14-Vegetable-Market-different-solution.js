'use strict';
/*
Write a program that accepts vegetable (tomato / onion / lettuce / cucumber /
pepper), day of the week (Monday / Tuesday / Wednesday / Thursday / Friday /
Saturday / Sunday) and quantity (real number) and calculates the price according to
the prices in the tables above. 
• Print the result rounded by 2 decimal places. 
• In case of an invalid day of the week or invalid vegetable name, print "error".
 */

const claculatePrice = function (inputVegetable, inputDay, inputQuantity) {
  //   Storing vegetable prices in a object
  // Prices during the week
  const vegetableWeekPrice = {
    tomato: 2.5,
    onion: 1.2,
    lettuce: 0.85,
    cucumber: 1.45,
    pepper: 5.5,
  };

  // Prices during the weekend
  const vegetableWeekendPrice = {
    tomato: 2.8,
    onion: 1.3,
    lettuce: 0.85,
    cucumber: 1.75,
    pepper: 3.5,
  };

  //   Storing weekend days in a variable. If the variable is false that will mean that the days is not from the weekend
  const isWeekend = inputDay === 'Sunday' || inputDay === 'Sunday';

  // Storing vegetable prices in a variable depending if is weekend or not
  const priceList = isWeekend ? vegetableWeekendPrice : vegetableWeekPrice;

  //   Taking vegetable price in a variable from the input vegetable.
  const vegetablePrice = priceList[inputVegetable];

  //   Checking is the vegetable price is included in one of the objects
  if (vegetablePrice !== undefined) {
    const price = vegetablePrice * inputQuantity;
    console.log(price.toFixed(2));
  } else {
    console.log('Error');
  }
};

// Test data 1
claculatePrice('tomato', 'Tuesday', 2);

// Test data 2
// claculatePrice('onion', 'Sunday', 3);

// Test data 3
// claculatePrice('pepper', 'Monday', 10);

// Test data 4
// claculatePrice('banana', 'Friday', 5);
