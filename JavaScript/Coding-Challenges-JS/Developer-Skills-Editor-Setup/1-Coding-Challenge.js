'use strict';
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. 
Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
 */

// Test data 1
let temperatures = [17, 21, 23];

// Testa data 2
temperatures = [12, 5, -5, 0, 4];

const printForecast = function (temperatures) {
  // empty string that contains the message
  let message = '';

  // looping thru the temperatures array and updating the empty string
  for (let i = 0; i < temperatures.length; i++) {
    // message = message + `${temperatures[i]}C in ${i + 1} days... `;
    message += `${temperatures[i]}C in ${i + 1} days... `;
  }

  console.log(`... ${message}`);
};

printForecast(temperatures);
