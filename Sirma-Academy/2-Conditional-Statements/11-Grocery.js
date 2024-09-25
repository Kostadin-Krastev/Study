"use strict";
/*
A chain of stores opens groceries in several cities and sells at different prices according to the city:

Write a program that accepts a product (string), city (string) and quantity (decimal
number) and calculates and prints how much the corresponding quantity of the selected
product costs in the specified city.
 */

// Storing product, city and quantity in variables
let product = "tea";
product = "chips";
product = "juice";
product = "sweets";
let city = "Varna";
city = "Plovdiv";
city = "Sofia";
city = "Plovdiv";
let quantity = 2;
quantity = 1;
quantity = 6;
quantity = 1;

// Storing products prices in objects
const productPriceSofia = {
  tea: 0.5,
  water: 0.8,
  juice: 1.2,
  sweets: 1.45,
  chips: 1.6,
};

const productPricePlovdiv = {
  tea: 0.4,
  water: 0.7,
  juice: 1.15,
  sweets: 1.3,
  chips: 1.5,
};

const productPriceVarna = {
  tea: 0.45,
  water: 0.7,
  juice: 1.1,
  sweets: 1.35,
  chips: 1.55,
};

// Function expression that calculates how much the corresponding quantity of the selected product costs in the specified city
const calculateQuantityPrice = function (product, city, quantity) {
  if (city === "Sofia") {
    if (product === "tea") {
      const quantityTeaPriceSofia = quantity * productPriceSofia.tea;
      console.log(`${quantityTeaPriceSofia.toFixed(2)} лв.`);
    } else if (product === "water") {
      const quantityWaterPriceSofia = quantity * productPriceSofia.water;
      console.log(`${quantityWaterPriceSofia.toFixed(2)} лв.`);
    } else if (product === "juice") {
      const quantityJuicePriceSofia = quantity * productPriceSofia.juice;
      console.log(`${quantityJuicePriceSofia.toFixed(2)} лв.`);
    } else if (product === "sweets") {
      const quantitySweetsPriceSofia = quantity * productPriceSofia.sweets;
      console.log(`${quantitySweetsPriceSofia} лв.`);
    } else if (product === "chips") {
      const quantityChipsPriceSofia = quantity * productPriceSofia.sweets;
      console.log(`${quantityChipsPriceSofia} лв.`);
    }
  } else if (city === "Plovdiv") {
    if (product === "tea") {
      const quantityTeaPricePlovdiv = quantity * productPricePlovdiv.tea;
      console.log(`${quantityTeaPricePlovdiv.toFixed(2)} лв.`);
    } else if (product === "water") {
      const quantityWaterPricePlovdiv = quantity * productPricePlovdiv.water;
      console.log(`${quantityWaterPricePlovdiv.toFixed(2)} лв.`);
    } else if (product === "juice") {
      const quantityJuicePricePlovdiv = quantity * productPricePlovdiv.juice;
      console.log(`${quantityJuicePricePlovdiv.toFixed(2)} лв.`);
    } else if (product === "sweets") {
      const quantitySweetsPricePlovdiv = quantity * productPricePlovdiv.sweets;
      console.log(`${quantitySweetsPricePlovdiv.toFixed(2)} лв.`);
    } else if (product === "chips") {
      const quantityChipsPricePlovdiv = quantity * productPricePlovdiv.chips;
      console.log(`${quantityChipsPricePlovdiv.toFixed(2)} лв.`);
    }
  } else if (city === "Varna") {
    if (product === "tea") {
      const quantityTeaPriceVarna = quantity * productPriceVarna.tea;
      console.log(`${quantityTeaPriceVarna.toFixed(2)} лв.`);
    } else if (product === "water") {
      const quantityWaterPriceVarna = quantity * productPriceVarna.water;
      console.log(`${quantityWaterPriceVarna.toFixed(2)} лв.`);
    } else if (product === "juice") {
      const quantityJuicePriceVarna = quantity * productPriceVarna.juice;
      console.log(`${quantityJuicePriceVarna.toFixed(2)} лв.`);
    } else if (product === "sweets") {
      const quantitySweetsPriceVarna = quantity * productPriceVarna.sweets;
      console.log(`${quantitySweetsPriceVarna.toFixed(2)} лв.`);
    } else if (product === "chips") {
      const quantityChipsPriceVarna = quantity * productPriceVarna.chips;
      console.log(`${quantityChipsPriceVarna.toFixed(2)} лв.`);
    }
  } else {
    console.log("Error!");
  }
};

calculateQuantityPrice(product, city, quantity);
