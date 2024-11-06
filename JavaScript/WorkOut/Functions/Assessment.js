// From lecture Functions in Sirma academy
/*
Write a function that, given a real
number score, prints the score in
words:
• 2.00 - 2.99 - "Fail"
• 3.00 - 3.49 - "Poor"
• 3.50 - 4.49 - "Good"
• 4.50 - 5.49 - "Very good"
• 5.50 - 6.00 - "Excellent"
 */

let integer = 3.33;
integer = 4.5;
integer = 2.99;

const giveNumberScore = function (integer) {
  if (integer > 2.0 && integer <= 2.99) {
    console.log('Fail');
  } else if (integer >= 3.0 && integer <= 3.49) {
    console.log('Poor');
  } else if (integer >= 3.5 && integer <= 4.49) {
    console.log('Good');
  } else if (integer >= 4.5 && integer <= 5.49) {
    console.log('Very good');
  } else if (integer >= 5.5 && integer <= 6.0) {
    console.log('Excellent');
  }
};

giveNumberScore(integer);
