// #5 Coding Challenge - it is incorrect

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// Task 1: calculate the average score with Arrow function
const calcAverage = (input1, input2, input3) => {
  const avgDolhins = (input1 + input2 + input3) / 3;
  const avgKoalas = (input1 + input2 + input3) / 3;

  return avgDolhins, avgKoalas;
};
console.log(calcAverage(44, 23, 71));
console.log(calcAverage(65, 54, 49));

// Task 2: determining the winner
function checkWinner(avgDolhins, avgKoalas) {
  const averageScore = calcAverage(avgDolhins, avgKoalas);
  if (avgDolhins >= 2 * avgKoalas) {
    console.log("D wins!");
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log("K wins!");
  } else console.log("It's a draw");
}

console.log(checkWinner(44, 23, 71));
console.log(checkWinner(65, 54, 49));
