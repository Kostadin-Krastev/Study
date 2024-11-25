'use strict';
/*
Write a simple iterator for an object that returns each property value.
*/

const obj = {
  a: 'apple',
  b: 'banana',
  c: 'cherry',
  [Symbol.iterator]() {
    let values = Object.values(this);
    let currentIndex = 0;

    return {
      next() {
        return {
          value: values[currentIndex],
          done: currentIndex++ >= values.length,
        };
      },
    };
  },
};

for (const value of obj) {
  console.log(value);
}
