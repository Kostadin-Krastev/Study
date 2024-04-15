/**
Basic Operators:
What is operator?
An operator allows us to combine or transform values. Becacly they are used to performing specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands. In JavaScript, operators are used to compare values, perform arithmetic operations, etc. 

They are many operatiors - mathematical, logical, comparison, assigning, and many more.
 */

/**
 Mathematical operators or Arithmetic operators perform arithmetic on numbers (literals or variables).
 Thye are:
+ 	(Addition)
-	(Subtraction)
*	(Multiplication)
**	(Exponentiation (ES2016))
/	(Division)
%	(Modulus (Remainder))
++	(Increment)
--	(Decrement)
 */

// Example for mathematical operatiors:
const thisYear = 2023;
const ageKotce = thisYear - 1983;
const ageShara = thisYear - 2018;
console.log(ageKotce, ageShara); // return may age, and Sara`s

console.log(ageKotce * 2, ageKotce / 2);

// Concatenation (concat) method joins two or more strings. It does not change the existing string but the return is a new string - a combination between two or more strings.

// Example for Concatenation:
const firstName = "Kostadin";
const spaceBetweenNames = " ";
const secundName = "Krastev";
console.log(firstName + spaceBetweenNames + secundName); // returns Kostadin Krastev

/*  
Assignment operators assign a value to a variable. Also, they can be used as a comparison.

Operator	Example	   Same As
=	         x = y	    x = y
+=	         x += y	    x = x + y
-=	         x -= y	    x = x - y
*=	         x *= y	    x = x * y
/=	         x /= y	    x = x / y
%=	         x %= y	    x = x % y
**=	         x **= y	x = x ** y
*/

// Example for Assignment operators
let x = 10 + 5; // 10 + 5 is done first and then the result is assign to variable x
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 (increasing the value by 1)
x--; // x = x - 1 (decreasing the value by 1)
console.log(x);

/**
 Comparison operators:
 The Comarison are used in logical statements to determine equality or difference between variables or values. They return us a boolian - logical type that can be only true or fals. It is used for taking desicisions.

 Operator	    Description	    Comparing	    Returns	
==	            equal to	    x == 8	        false	
                                x == 5	        true	
                                x == "5"	    true

===	    equal value and equal type	
                                x === 5	        true	
                                x === "5"	    false	

!=	            not equal	    x != 8	        true

!==	    not equal value or not equal type	
                                x !== 5	        false	
                                x !== "5"	    true	
                                x !== 8	        true

>	        greater than	    x > 8	        false

<	        less than	        x < 8	        true	

>=	    greater than or equal to	
                                x >= 8	        false
                                	
<=	    less than or equal to	x <= 8	        true
 */

// Example for Comparioson operators
console.log(ageKotce > ageShara);
console.log(ageShara >= 18);

console.log(thisYear - 1991 > thisYear - 2018);
