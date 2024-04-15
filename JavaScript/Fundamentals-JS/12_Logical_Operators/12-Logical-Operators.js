//12. Logical Operators

/*
Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	Description	         Example
-------------------------------------------
&&	and	    (x < 10 && y > 1)    is true	
-------------------------------------------
||	or	    (x == 5 || y == 5)   is false	
-------------------------------------------
!	not	    !(x == y)            is true
 */

// Examples with && and operator
/*
const hasDriverLicens = true;
const hasGoodVison = true;

console.log(hasDriverLicens && hasGoodVison); // the result will be true
*/
/*
const hasDriverLicens = true;
const hasGoodVison = false;

console.log(hasDriverLicens && hasGoodVison); // the result will be false
*/

/*
// Examples with || or operator
const hasDriverLicens = true;
const hasGoodVision = false;

console.log(hasDriverLicens || hasGoodVision); // the result will true. Here is enough for one of the variables to be true for the whole operation to be true.
*/
/*
// Examples with ! not operator
const hasDriverLicens = true;

console.log(!hasDriverLicens); // the result will be false
*/

/*
// Example with && and operator
const hasDriverLicens = true;
const hasGoodVision = false;

if (hasDriverLicens && hasGoodVision) {
  console.log("Shara is able to drive");
} else {
  console.log("Someone else should drive.");
}
// here the result will be "Someone else should drive" because hasGoodVision is false. To have "Shara is able to drive" both hasDriverLicens and hasGoodVions must be true.
*/

// Example with && and operator, and ! or operator
const hasDriverLicens = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriverLicens && hasGoodVision && !isTired) {
  console.log("Shara is able to drive.");
} else {
  console.log("Someone else should drive.");
}
