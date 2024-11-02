/*
During the meeting of the Order of the Phoenix, members are voting on whether to proceed with a dangerous mission against Voldemort. Each member can vote &quot;Yes,&quot; &quot;No,&quot; or &quot;Abstain.&quot; Given an array of votes, determine the decision of the Order – Yes, No, Abstain, or Tie.
 */

// Test data 1
let votes = ['Yes', 'No', 'Yes', 'Abstain', 'Yes'];

// Test data 2
votes = ['No', 'No', 'Yes'];

// Test data 3
votes = ['Yes', 'No'];

// Test data 4
votes = ['Abstain'];

// Test data 5
votes = ['No', 'No', 'Abstain', 'Abstain', 'Yes', 'Yes'];

// Test data 6
votes = ['No', 'Abstain', 'Abstain'];

// Function that receives votes and finds which of them are majority
function countVotes(votes) {
  // Strings for each vote, and they will add each time by 1 when their vote is count
  let voteYes = 0;
  let voteNo = 0;
  let voteAbstain = 0;

  //   Looping throw the array votes and using if else statement to add +1 for the respective vote
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] === 'Yes') {
      voteYes++;
    } else if (votes[i] === 'No') {
      voteNo++;
    } else {
      voteAbstain++;
    }
  }

  //  Checking If the votes are only Abstain
  if (voteAbstain === votes.length) {
    console.log('Abstain');
    return;
  }

  //   Checking Yes and No votes have a bigger numbers in their variables
  if (voteYes > voteNo) {
    console.log('Yes');
  } else if (voteNo > voteYes) {
    console.log('No');
  } else if (voteYes === voteNo) {
    console.log('Tie');
  }
}

countVotes(votes);
