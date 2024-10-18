// Info templates about all loops types in javascrip that I know

// Array for the loops
const personInfo = [
  'Kostadin',
  'Krastev',
  145,
  'Snowborder',
  ['Kemper', 'Burton', 'White Room'],
];

// --------------------For loop (looping the array forwards)-----------------------
/*
for (let i = 0; i < personInfo.length; i++) {
  console.log(personInfo[i]);
}
*/

// -----------------For loop (looping the array backwards)------------------
/* 
for (let i = personInfo.length - 1; i > 0; i--) {
  console.log(personInfo[i]);
}
*/

//------ES6 for of loop (in this example I only use it to go throw the array)-------------------------
/* 
for (item of personInfo) {
  console.log(item);
}
*/

// -------------For in loop - used for looping Objects-------------------
const personInfo2 = {
  name: 'Kostadin',
  lastName: 'Krastev',
  hobby: 'Snowboard',
};

for (const key in personInfo2) {
  console.log(`${key}: ${personInfo2[key]}`);
}

// ------------------While loop --------------------------
/* 
let item = 0; //it is the same method like for loop, just the index variable is made outside the loop

while (item < personInfo.length) {
  console.log(personInfo[item]);
  item++;
}
*/
