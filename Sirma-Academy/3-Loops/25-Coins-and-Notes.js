/*
We have banknotes and coins of 1lv., 2lv. and 5lv. Write a program that receives number of banknotes and coins and the target amount and displays all possible ways in which the amount can be paid with the available money.

The input contains exactly 4 parameters: 
 Number of coins of 1lv. - positive integer; 
 Number of coins of 2lv. - positive integer; 
 Number of banknotes of BGN 5 - positive integer;  Sum - positive integer in the range [1... 1000];
Print all combinations of the given denominations forming the sum, formatted as
follows:
- "{1 count} * 1 lv. + {2 count} * 2 lv. + {5 count} * 5 lv. = {sum} lv."
 */

function coinsAndNotes(
  inputCointsOneLev,
  inputCointsTwoLev,
  inputBanknotesFiveLev,
  inputSum
) {
  // storing all possible counts of 1lv, 2lv, and 5lv
  let countsOneLev = [];
  let countsTwoLev = [];
  let countsFiveLev = [];

  // looping throw each number that is include in the function inputs before store them in the Array
  for (let i = 0; i <= inputCointsOneLev; i++) {
    countsOneLev.push(i);
  }

  for (let j = 0; j <= inputCointsTwoLev; j++) {
    countsTwoLev.push(j);
  }

  for (let k = 0; k <= inputBanknotesFiveLev; k++) {
    countsFiveLev.push(k);
  }

  // loop over stored values and find valid combinations
  for (oneCount of countsOneLev) {
    for (twoCount of countsTwoLev) {
      for (fiveCount of countsFiveLev) {
        if (oneCount * 1 + twoCount * 2 + fiveCount * 5 === inputSum) {
          // {1 count} * 1 lv. + {2 count} * 2 lv. + {5 count} * 5 lv. = {sum} lv.
          console.log(
            `${oneCount} * 1 lv. + ${twoCount} * 2 lv. + ${fiveCount} * 5 lv. = ${inputSum}`
          );
        }
      }
    }
  }
}

// Test data 1
coinsAndNotes(3, 2, 3, 10);
console.log('-------------------------');
// Testa data 2
coinsAndNotes(5, 3, 1, 7);
