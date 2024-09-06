"use strict";
/*
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */

// Task 1:
const neighbouring = ["Serbia", "Macedonia", "Greece"];

// Task 2:
neighbouring.push("Utopia");

// Task 3:
neighbouring.pop("Utopia");

// Task 4:
if (!neighbouring.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

// Task 5:
console.log(neighbouring.indexOf("Serbia"));
console.log(neighbouring.indexOf("Macedonia"));
console.log(neighbouring.indexOf("Greece"));

neighbouring[0] = "New-Serbia";
neighbouring[1] = "New-Macedonia";
neighbouring[2] = "New-Greece";

console.log(neighbouring);

// Can be done with shorter version like this:
console.log(
  (neighbouring[0] = "New-short-Serbia"),
  (neighbouring[1] = "New-short-Macedonia"),
  (neighbouring[2] = "New-short-Greece")
);
