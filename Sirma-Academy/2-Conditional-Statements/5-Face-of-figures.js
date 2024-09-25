"use strict";
/*
Write a function that takes the look and dimensions of a geometric figure and calculates
its face.
The figures are of four types: square, rectangle, circle, and triangle. 
The first parameter is the type of figure (square, rectangle, circle, or triangle).  If the figure is a square, the next parameter is a number - the length of its side.  If the figure is a rectangle, the next two parameters produce two numbers - the
lengths of its sides. 
If the figure is a circle, the next parameter is a number - the radius of the circle.  If the figure is a triangle, the next two parameters produce two numbers - the
length of its side and the length of the height to it.
Round the result to 2 decimal places.
 */

function calculatingGeometricFigure(figure, area1, area2) {
  const calculateSquare = area1 * area1;
  const calculateRectangle = area1 * area2;
  const calculateCircle = Math.PI * area1 ** 2;
  const calculateTriangle = 0.5 * area1 * area2;
  switch (figure) {
    case "square":
      console.log(calculateSquare.toFixed(2));
      break;
    case "rectangle":
      console.log(calculateRectangle.toFixed(2));
      break;
    case "circle":
      console.log(calculateCircle.toFixed(2));
      break;
    case "triangle":
      console.log(calculateTriangle.toFixed(2));
      break;

    default:
      console.log("Not a geometric figure");
      break;
  }
}

calculatingGeometricFigure("circle", 10);
