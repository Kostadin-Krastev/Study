"use strict";
function calculateVacationCost(days, roomType, assessment) {
  const nightCount = days - 1;
  let pricePerNight;

  // price per night based on the room
  if (roomType === "single room") {
    pricePerNight = 25.0;
  } else if (roomType === "apartment") {
    pricePerNight = 50.0;
  } else if (roomType === "president apartment") {
    pricePerNight = 100.0;
  } else {
    console.log("Invalid room type");
    return;
  }

  // Calculating initial total price
  let totalPrice = nightCount * pricePerNight;

  // Applying discounts
  if (roomType === "apartment") {
    if (days < 10) {
      totalPrice *= 0.7;
    } else if (days <= 15) {
      totalPrice *= 0.65;
    } else {
      totalPrice *= 0.5;
    }
  } else if (roomType === "president apartment") {
    if (days < 10) {
      totalPrice *= 0.9;
    } else if (days <= 15) {
      totalPrice *= 0.85;
    } else {
      totalPrice *= 0.8;
    }
  }

  // Adjust the total price
  if (assessment === "positive") {
    totalPrice *= 1.25;
  } else if (assessment === "negative") {
    totalPrice *= 0.9;
  }

  // final price
  console.log(totalPrice.toFixed(2));
}

calculateVacationCost(11, "apartment", "positive");
