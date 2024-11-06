// From lecture Functions in Sirma academy
/*
Write a function that prints the sign of an integer,
which receives as an argument:
2 - positive;
-5 - negative;
0 - zero.
 */

let integer = 2;
integer = -5;
integer = 0;

const numberSign = function (integer) {
  if (integer > 0) {
    console.log(`${integer} - positive`);
  } else if (integer < 0) {
    console.log(`${integer} - negative`);
  } else {
    console.log(`${integer} - zero`);
  }
};

numberSign(integer);
