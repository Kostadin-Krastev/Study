"use strict";
function vegetablesPrice(vegetable, day, quantity) {
  const isWorkDay =
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "thursday";

  let price;
  switch (vegetable) {
    case "tomato":
      if (isWorkDay) {
        price = 2.5;
      } else {
        price = 2.8;
      }
      break;
    case "onion":
      if (isWorkDay) {
        price = 1.2;
      } else {
        price = 1.3;
      }
    default:
      break;
  }
  const totalPrice = price * quantity;
  console.log(totalPrice.toFixed(2));
}

vegetablesPrice("tomato", "Tuesday", 2);
