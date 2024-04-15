// 9. Truthy and Falsy Values

/*
 Falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

The following table provides a complete list of JavaScript falsy values:

Value	        Type	    Description
-------------------------------------------------------------------------------------------
null	        Null	    The keyword null — the absence of any value.
-------------------------------------------------------------------------------------------
undefined	    Undefined	undefined — the primitive value.
-------------------------------------------------------------------------------------------
false	        Boolean	    The keyword false.
-------------------------------------------------------------------------------------------
NaN	            Number	    NaN — not a number.
-------------------------------------------------------------------------------------------
0	            Number	    The Number zero, also including 0.0, 0x0, etc.
-------------------------------------------------------------------------------------------
-0	            Number	    The Number negative zero, also including -0.0, -0x0, etc.
-------------------------------------------------------------------------------------------
0n	            BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
-------------------------------------------------------------------------------------------
""	            String	    Empty string value, also including '' and ``.
-------------------------------------------------------------------------------------------
document.all    Object	    The only falsy object in JavaScript is the built-in document.all.
-------------------------------------------------------------------------------------------

Example for Falsy value:
const money = 0;
if(money) {
    console.log("Don`t spend it all");
} else {
    console.log("You should get a job!");
}
Here money value is a number 0 (zero). Number 0 (zero) is a false value. There for in this if else statement number 0 will be a falsy value which is why the result of the if else statement will be the string "You should get a job!".
If we change the number 0 into 10 then the result will be true and the printed string will be "Don`t spend it all".

Another example:
const firstName;
if(firstName) {
    console.log("Nice to meet you");
} Else {
    console.log("Who are you?")
}
In this example the variable firstName is empty. There for an empty variable is a falsy value and the result in this if else statemant will be the string "Who are you?".
 */

/*
Truthy value: 
is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
*/
