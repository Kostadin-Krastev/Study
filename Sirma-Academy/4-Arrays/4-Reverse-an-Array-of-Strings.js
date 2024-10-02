'use strict';
/*
Receive an array of strings (space separated values), reverse it, and print its elements.
Swap elements. For example, the first element should be last, and the last element
should be first etc.
 */

let arrStrings = ['a', 'b', 'c', 'd', 'e'];
// // Test data 2
arrStrings = ['abc', 'def', 'hig', 'klm', 'nop'];
// // Test data 3
arrStrings = ['33', '123', '0', 'dd'];

function reversArray(arrStrings) {
  for (let i = 0; i < arrStrings.length; i++) {
    // Stopping the loop from overscrolling
    if (i >= arrStrings.length) {
      break;
    }

    // Saving the first element
    let firstElement = arrStrings[i];

    // Swapping the first element
    arrStrings[i] = arrStrings[arrStrings.length - 1 - i];
    // Swapping the last element
    arrStrings[arrStrings.length - 1 - i] = firstElement;
  }

  console.log(arrStrings.join(' '));
}

reversArray(arrStrings);
