"use strict";
/*
Write a function that displays on the console a building (from top to bottom), while the
following conditions are met:  On each even floor there are only offices

- On each odd floor there are only apartments

- Each apartment is indicated as follows: A{floor number}{apartment number},
apartment numbers start from 0.  Each office is indicated as follows: O{floor number}{office number}, office numbers also start at 0.

- On the top floor there are always apartments, and they are larger than the others,
so in front of their number it says 'L' instead of 'A'. If there is only one floor, then
there are only large apartments!

You accept 2 parameters - the number of floors and the number of rooms per floor.
 */
let floors = 6;
floors = 3;
floors = 4;
let rooms = 4;
rooms = 3;
rooms = 3;

function building(floors, rooms) {
  for (let f = floors; f > 0; f--) {
    let floor = "";
    for (let r = 0; r <= rooms; r++) {
      let type;
      if (f === floors) {
        type = "L";
      } else if (f % 2 === 0) {
        type = "O";
      } else {
        type = "A";
      }
      floor += `${type}${f}${r} `;
    }
    console.log(floor.trim());
  }
}
building(floors, rooms);
