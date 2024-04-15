/*
What is Value?
Value is a piece of data. It is the smallest unit of information that we have in JavaScript. Values are dividet by strings and numbers. String are typed inside quotation marks or dubble quotation marks.
Example for a string:
"Kotce"
Numbers are typed without quotation marks.

Value can be an object or a primitive value. A value is only a primitive when is not an object.
Example for object value:
let me = {
    name = "Kotce";
}

Exampe for primitive value:
let name = "Kotce";
let age = 39;
(more in lecture 2.Data types)
*/

/*
What are Variables?
Variables store values. Before assigning a variable value, we must give a name to that variable. A variable name should always describe what variable is storing. That way we can easily understand what variable is holding.
Example:
const firstName = "Kostadin"

Also, we can assign two or more values to one variable. But the values must be undefined (empty). ( I am not very sure about that. It needs to be learned more)
Example
const firstName, lastName;
2-nd example
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // this is x = y = 10

For variable names we can use only letters, _ (underscore), $ (dolar sign), and numbers (but variable names can not begin with numbers). There are rules how we have to write variables names and they are:
- every name should be written with small letter if it is one word.
- Camel case - when the name is more then one word. We write first word with small letter and then every after word with capital letter. It is a standart to write names like this in JavaScript
Example:
firstNamePerson
- Underscore _
Example:
first_name_person

They are illegal names for variables. We cannot start a name with a number, space and most importantly they cannot be a JavaScript keyword or a JavaScript reserved word such as new, if, else, var, function, etc.
Examples:
let 3years = 3;
let = 3 years = 3;
let var = 3;

We can use reserved words by adding in front of them underscore or dollar sign.
Example:
let _var = 3;
let $var= 3;

The only reserved word that can be used is name. but in some cases that can cost a problems. So better to avoid using keyword name as a name of our variable.

We call variables by using their names in console.log.
Example:
console.log(firstName)
Variables are like boxes that keep information. We say "declaring variable" when we create a variable. Variables are dividet by let and const.
*/

/**
 What is let and const variable?
 - let variable stores values that can be updated within its scope;
 - const variable maintain constant values and remains the same within its scope.
 Example:
 let personYears = 39;
 const firstName = "Kostadin";
 */
