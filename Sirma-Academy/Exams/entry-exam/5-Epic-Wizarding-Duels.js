// Warning! couldn't find the solution
/*
During a wizarding duel, every spell has a counterspell: 
- If an opponent casts a jinx represented by /, the hero counters with a defensive charm \. 
- If an opponent casts a powerful curse represented by !, the hero counters with another powerful
curse !. 
- If an opponent uses ancient magic represented by <, the hero counters with protective magic >.
If a sequence of spells and counterspells is balanced in the correct order, the duel is considered epic.
Determine if a given sequence is epic duel.  Input: A string sequence of spells and counterspells.
 */

function isEpicDuel(spellsAttacks) {
  // array that contain every spell attack
  let spells = [];

  //   For of loop to go throw each spell in spellsAttacks
  for (let character of spellsAttacks) {
    if (character === '/' || character === '!' || character === '<') {
      // Pushing the spells into the spells array
      spells.push(character);
    } else if (character === '\\') {
      // Checking if there's a matching jinx (/) in the spells array and if there is I remove element from the array
      if (spells.pop() !== '/') {
        return 'Not Epic';
      }
    } else if (character === '!') {
      // Checking if there is a matching powerful curse (!) in the spells array and if there is I remove element from the array
      if (spells.pop() !== '!') {
        return 'Not Epic';
      }
    } else if (character === '>') {
      // Checking if there's a matching ancient magic (<) in the spells array and if there is I remove element from the array
      if (spells.pop() !== '<') {
        return 'Not Epic';
      }
    }
  }

  //   If the array is empty it has to return 'Epic', but the whole logic is a bit off, and I lost myself
  if (spells.length === 0) {
    return 'Epic';
  } else {
    return 'Not Epic';
  }
}

// Test data 1
// console.log(isEpicDuel('/////\\'));

// Test data 2
// console.log(isEpicDuel('//!!\//<!!>\\\'));

// Test data 3
// console.log(isEpicDuel('///\\'));

// Test data 4
// console.log(isEpicDuel('<!>!'));

// Test data 5
// console.log(isEpicDuel('/</!!>\\'));
