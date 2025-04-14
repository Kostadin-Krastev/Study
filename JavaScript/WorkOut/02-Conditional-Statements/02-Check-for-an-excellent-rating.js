/*
Write a console program that reads a rating (decimal number) entered by the user and prints "Excellent!" if the rating is 5.50 or higher.
 */

let ratingNumber = 5.5;

const ratingMessage = function (ratingNumber) {
  const message = 'Excellent!';

  if (ratingNumber >= 5.5) {
    console.log(message);
  }
};

ratingMessage(ratingNumber);
