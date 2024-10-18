'use strict';
/*
Write a class that represents a Circle. It has only one data property - its radius, and it is set through the constructor. The class needs to have getter and setter methods for
its diameter - the setter needs to calculate the radius and change it and the getter needs to use the radius to calculate the diameter and return it.

The circle also has a getter area(), which calculates and returns its area.

The diameter() and area() getters should return numbers.
 */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(input) {
    return (this.radius = input / 2);
  }

  get area() {
    const sum = Math.PI * this.radius ** 2;
    return sum;
  }
}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

// setting new diameter
c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
