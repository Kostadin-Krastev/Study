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

  //   Using if else statement to check the day of the week, the kind of the vegetable and calculate the price
  if (inputDay === 'Saturday' || inputDay === 'Sunday') {
    if (inputVegetable === 'tomato') {
      const tomatoPrice = vegetableWeekendPrice.tomato * inputQuantity;
      console.log(tomatoPrice.toFixed(2));
    } else if (inputVegetable === 'onion') {
      const onionPrice = vegetableWeekendPrice.onion * inputQuantity;
      console.log(onionPrice.toFixed(2));
    } else if (inputVegetable === 'lettuce') {
      const lettucePrice = vegetableWeekendPrice.lettuce * inputQuantity;
      console.log(lettucePrice.toFixed(2));
    } else if (inputVegetable === 'cucumber') {
      const cucumberPrice = vegetableWeekendPrice.cucumber * inputQuantity;
      console.log(cucumberPrice.toFixed(2));
    } else if (inputVegetable === 'pepper') {
      const pepperPrice = vegetableWeekendPrice.pepper * inputQuantity;
      console.log(pepperPrice.toFixed(2));
    } else {
      console.log('Error');
    }
  } else if (inputDay !== 'Saturday' || inputDay !== 'Sunday') {
    if (inputVegetable === 'tomato') {
      const tomatoPrice = vegetableWeekPrice.tomato * inputQuantity;
      console.log(tomatoPrice.toFixed(2));
    } else if (inputVegetable === 'onion') {
      const onionPrice = vegetableWeekPrice.onion * inputQuantity;
      console.log(onionPrice.toFixed(2));
    } else if (inputVegetable === 'lettuce') {
      const lettucePrice = vegetableWeekPrice.lettuce * inputQuantity;
      console.log(lettucePrice.toFixed(2));
    } else if (inputVegetable === 'cucumber') {
      const cucumberPrice = vegetableWeekPrice.cucumber * inputQuantity;
      console.log(cucumberPrice.toFixed(2));
    } else if (inputVegetable === 'pepper') {
      const pepperPrice = vegetableWeekPrice.pepper * inputQuantity;
      console.log(pepperPrice.toFixed(2));
    } else {
      console.log('Error');
    }
  } else {
    console.log('Error');
  }
};

// Test data 1
// claculatePrice('tomato', 'Tuesday', 2);

// Test data 2
// claculatePrice('onion', 'Sunday', 3);

// Test data 3
// claculatePrice('pepper', 'Monday', 10);

// Test data 4
claculatePrice('banana', 'Friday', 5);
