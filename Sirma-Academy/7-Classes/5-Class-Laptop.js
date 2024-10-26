'use strict';
/*
Create a class Laptop that has the following properties:  info – object that contains:
    - producer – string
    - age – number
    - brand – string
- isOn – boolean (false by default)  turnOn – a function that sets the isOn variable to true
- turnOff – a function that sets the isOn variable to false
- showInfo – a function that returns the producer, age, and brand as JSON
- quality – number (every time the laptop is turned on/off the quality
decreases by 1)  getter price – number (800 – {age * 2} + (quality * 0.5))
The constructor should receive the info as an object and the quality.
 */

class Laptop {
  isOn = false;

  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
  }

  get price() {
    const currentPrice = 800 - this.info.age * 2 + this.quality * 0.5;

    return currentPrice;
  }

  turnOn() {
    if (!this.isOn) {
      this.isOn = true;
      this.quality--;
    }
  }

  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.quality--;
    }
  }

  showInfo() {
    const printInfo = JSON.stringify(this.info);

    return printInfo;
  }
}

// Creating the object that is declared inside the class Laptop
// let info = {
//   producer: 'Asus',
//   age: 2,
//   brand: 'Zenbook',
// };

// Test data 1
// let laptop = new Laptop(info, 10);
// laptop.turnOn();
// console.log(laptop.showInfo());
// laptop.turnOff();
// console.log(laptop.quality);
// laptop.turnOn();
// console.log(laptop.isOn);
// console.log(laptop.price);

// Test data 2
let info = {
  producer: 'Lenovo',
  age: 1,
  brand: 'Legion',
};
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
laptop.turnOn();
laptop.turnOff();
console.log(laptop.isOn);
