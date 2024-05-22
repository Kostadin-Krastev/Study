"use strict";
function calculateCost(product, city, quantity) {
  let price;

  if (city === "Sofia") {
    if (product === "tea") {
      console.log((price = 0.5));
    } else if (product === "water") {
      console.log((price = 0.8));
    } else if (product === "juice") {
      console.log((price = 1.2));
    } else if (product === "sweets") {
      console.log((price = 1.45));
    } else if (product === "chips") {
      console.log((price = 1.6));
    }
  } else if (city === "Plovdiv") {
    if (product === "tea") {
      console.log((price = 0.4));
    } else if (product === "water") {
      console.log((price = 0.7));
    } else if (product === "juice") {
      console.log((price = 1.15));
    } else if (product === "sweets") {
      console.log((price = 1.3));
    } else if (product === "chips") {
      console.log((price = 1.5));
    }
  } else if (city === "Varna") {
    if (product === "tea") {
      console.log((price = 0.45));
    } else if (product === "water") {
      console.log((price = 0.7));
    } else if (product === "juice") {
      console.log((price = 1.1));
    } else if (product === "sweets") {
      console.log((price = 1.35));
    } else if (product === "chips") {
      console.log((price = 1.55));
    }
  }

  const totalCost = price * quantity;

  console.log(totalCost.toFixed(2));
}

calculateCost("tea", "Varna", 2);
