/*
Write a function that accepts text (string) and calculates and prints the sum of the values
of the vowel letters according to the table below:
letter: a e i o u
value:  1 2 3 4 5
 */

function sumVowels(inputText) {
  let sumOfVowels = 0;

  for (let i = 0; i < inputText.length; i++) {
    let letter = inputText[i];

    switch (letter) {
      case 'a':
        sumOfVowels++;
        break;
      case 'e':
        sumOfVowels += 2;
        break;
      case 'i':
        sumOfVowels += 3;
        break;
      case 'o':
        sumOfVowels += 4;
        break;
      case 'u':
        sumOfVowels += 5;
        break;
    }
  }
  console.log(sumOfVowels);
}
sumVowels('hi');
