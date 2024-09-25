"use strict";
/*
Write a function that accepts text and prints each letter on a new line.
 */

let text = "Hello";
text = "Bulgaria";

function printsLetters(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}

printsLetters(text);
