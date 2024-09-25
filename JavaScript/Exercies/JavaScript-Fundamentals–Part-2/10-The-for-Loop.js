"use strict";
/*
There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
 */
const voters = 50;

function elections(voters) {
  for (let i = 1; i <= voters; i++) {
    console.log(
      `(for numbers ${i} to 50): Voter number ${i} is currently voting.`
    );
  }
}

elections(voters);
