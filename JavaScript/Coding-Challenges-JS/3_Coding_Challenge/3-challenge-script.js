/*
3. Coding Challenge:
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Calculating avarage score
const teamDolphins = (96 + 108 + 89) / 3;
const teamKoalas = (88 + 91 + 110) / 3;

/*Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
 */
if (teamDolphins > teamKoalas) {
  console.log("Team Dolphins wins");
} else if (teamDolphins < teamKoalas) {
  console.log("Team Koalas win!");
} else {
  console.log("There is no winner");
}
console.log(teamKoalas);

/**
 * 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
 */

if (teamDolphins > teamKoalas && teamDolphins >= 100) {
  console.log("Team Dolphins wins");
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
  console.log("Team Koalas Wins");
} else {
  console.log("No one wins");
}

console.log(teamDolphins);
