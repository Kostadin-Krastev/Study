// Warning! couldn't find the solution.
/*
The wizards at Hogwarts have a secret code used to send encrypted messages across the magical world. The code replaces each letter in a message with the letter that is n places before it in the alphabet. Write a program that deciphers the message. 

● Input: 
A string s (1 ≤ |s| ≤ 100) representing the encrypted message and an integer n (1 ≤ n ≤
25) representing the shift.
 */

// Test data 1
let s = 'Uifsf!jt!b!tfdsfu"';
let n = 1;

function deciphersMessage(s, n) {
  // Empty string that will contain every character form the message. The string have empty space in order not to return undefine before printing the characters
  let decipherMessage = '';

  // Loop that go throw the 's' message and put every character in the empty variable decipherMessage
  for (let i = 0; i < s.length; i++) {
    // using variable to take the character from the 's', and then putting every character in empty variable decipherMessage
    let character = s[i];

    // Empty variable that will contain the characters after the check if is upper case or not
    let newCharacter;

    // Checking if the character is upper case and records them in variable newCharacter
    if (character >= 'A' && character <= 'Z') {
      newCharacter = String.fromCharCode(
        ((character.charCodeAt(0) - 'A'.charCodeAt(0) - n + 26) % 26) +
          'A'.charCodeAt(0)
      );
      decipherMessage += newCharacter;

      //   Checking if the character is lower case and records them in variable newCharacter
    } else if (character >= 'a' && character <= 'z') {
      newCharacter = String.fromCharCode(
        ((character.charCodeAt(0) - 'a'.charCodeAt(0) - n + 26) % 26) +
          'a'.charCodeAt(0)
      );
      decipherMessage += newCharacter;

      //   If the character is not a letter keep it as-is in character variable
    } else {
      decipherMessage += character;
    }
  }
  console.log(decipherMessage);
}

deciphersMessage(s, n);
