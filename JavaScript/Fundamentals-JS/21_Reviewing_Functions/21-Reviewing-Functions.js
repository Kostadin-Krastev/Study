// 21. Reviewing Functions

/*
- Function declarations are functions that can be used before it's declared in the code.
- Function expresion are functions that are value stored in a variable.
- Arrow functions they are also function expresions, and are great for one-line functions. 
*/

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires after ${retirement} years`;
  } else {
    return `${firstName} is already retired`;
  }
};

console.log(yearsUntilRetirement(1991, "Jonos"));
console.log(yearsUntilRetirement(1970, "Mike"));
