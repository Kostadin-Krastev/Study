'use strict';
/*
Write a JS function that receives two characters and prints on a single line all the
characters in between them according to the ASCII code.
 */

const printsASCIIRange = function (inputCharacterOne, inputCharacterTwo) {
  //Getting ASCII values of the two input characters
  const FirstASCIICharacter = inputCharacterOne.charCodeAt(0);
  const LastASCIICharacter = inputCharacterTwo.charCodeAt(0);

  //Variables that contains smallest and Biggest ASCII characters. Something like a insurance that we are going throw in the correct order when using For loop
  const firstCharacter = Math.min(FirstASCIICharacter, LastASCIICharacter);
  const lastCharacter = Math.max(FirstASCIICharacter, LastASCIICharacter);

  //   Empty variable that will store the ASCII characters from the loop
  let middleCharacters = '';
  //For loop that goes throw the characters between firstCharacter and lastCharacter
  for (let i = firstCharacter; i < lastCharacter; i++) {
    // adding characters in variable middleCharacters with space between (more below)
    middleCharacters += String.fromCharCode(i) + ' ';
  }
  // Using trim() to remove the empty space that is added after the loop (more below)
  console.log(middleCharacters.trim());
};

// Testa data 1
printsASCIIRange('a', 'd');

// Test data 2
printsASCIIRange('#', ':');

// Test data 3
printsASCIIRange('C', '#');

/*
Explanation for the string middleCharacters and I add characters in it
1. String.fromCharCode(i)
- String.fromCharCode() is a JavaScript method that takes a numeric ASCII code and returns the corresponding character.

- i in this case represents an ASCII code, which comes from the loop iterating between the ASCII values of the two input characters.

- For example, String.fromCharCode(97) would return 'a' because 97 is the ASCII code for the lowercase letter "a".

2. String.fromCharCode(i) + ' '
- String.fromCharCode(i) + ' ' converts the character (like 'a') into a string and appends a single space (' ') after it.

- This space is added so that the output format is nicely spaced, resulting in something like "a b c d " instead of "abcd".

3. result += ...
- result += ... means we’re adding (+=) each generated character and space to the existing content of result.

- Starting with result = '', each iteration appends the next character and a space to result.
 */

/*
trim()
Building the middleCharacters String:

- During each loop iteration, we add a character followed by a space to middleCharacters, so we end up with something like "a b c d ".

- This trailing space is not necessary for the final output, so we use trim() to remove it.

Applying trim():

- When we call middleCharacters.trim(), it removes the space from the end (and the beginning, if there were any).

- The final output becomes "a b c d" (without the trailing space).
 */
