"use strict";
/*
Receive an array of strings (space separated values), reverse it, and print its elements.
Swap elements. For example, the first element should be last, and the last element
should be first etc.
 */

let arrStrings = ["a", "b", "c", "d", "e"];
// Test data 2
arrStrings = ["abc", "def", "hig", "klm", "nop"];
// Test data 3
arrStrings = ["33", "123", "0", "dd"];

function reversArray(arrStrings) {
  let reverseStringArray = [];

  for (let i = arrStrings.length; i >= 0; i--) {
    reverseStringArray.push(arrStrings[i]);
  }
  console.log(reverseStringArray.join(" "));
}

reversArray(arrStrings);
