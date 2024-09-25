"use strict";
/*
Write a console program that reads a rating (decimal number) entered by the user and
prints "Excellent!" if the rating is 5.50 or higher.
 */
let rating = 5.501;
function checkRating(rating) {
  if (rating >= 5.5) {
    console.log("Excellent!");
  }
}

checkRating(rating);
