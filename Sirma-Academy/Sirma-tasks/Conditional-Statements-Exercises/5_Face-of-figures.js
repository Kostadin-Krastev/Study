"use strict";
let side;
function calculateFigure(type, sideA, sideB) {
  if (type === "square") {
    let side = sideA * sideA;
  } else if (type === "rectangle") {
    side = sideA * sideB;
  } else if (type === "triangle") {
    side = (sideA * sideB) / 2;
  } else {
    type === "circle";
    side = Math.PI * Math.pow(sideA, 2);
  }
  console.log(side.toFixed(2));
}

calculateFigure("circle", 10);
