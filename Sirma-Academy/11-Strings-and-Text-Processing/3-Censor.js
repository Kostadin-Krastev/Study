'use strict';
/*
Write a function that receives a text as a first parameter and a single word as a
second. Find all occurrences of that word in the text and replace them with the
corresponding count of '*'. 
The repeat() function should take the length of the word and return that amount of stars
'*'.
 */

const replaceText = function (textInput, wordInput) {
  const censoredText = textInput.replaceAll(
    wordInput,
    '*'.repeat(wordInput.length)
  );

  console.log(censoredText);
};

// Test data 1
// replaceText('A small sentence with some words', 'small');

// Test data 2
// replaceText('Find the hidden word', 'hidden');

// Test data 3
replaceText('A small sentence with small words', 'small');
