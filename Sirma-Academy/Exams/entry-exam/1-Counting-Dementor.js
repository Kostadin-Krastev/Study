/*
Harry is training his Patronus Charm spell by fighting Dementors in Azkaban. Given that he fights n Dementors in the first hour and increases his count by m every subsequent hour, determine the total number of Dementors he will have fought after h hours.
Input: Three integers:

● n represents the initial count
● m represents the increase of the count.
● h represents the number of hours.
Constraints: n increases by m every hour.
 */

function fightingDementors(n, m, h) {
  // Variable that contains the number of Dementors in every hour
  let perHour = n;
  //   Variable for the dead Dementors in every hour
  let deadDementors = 0;

  // Loop that goes for every hour
  for (let i = 0; i < h; i++) {
    // Increase the number of dead Dementors that fought in the hour
    deadDementors += perHour;
    //Increasing number of Dementors for the next hour
    perHour += m;
  }

  console.log(deadDementors);
}

// Test data 1
fightingDementors(5, 2, 3);

// Test data 2
fightingDementors(7, 1, 2);

// Test data 3
fightingDementors(10, -1, 1);

// Test data 4
fightingDementors(8, -2, 3);
