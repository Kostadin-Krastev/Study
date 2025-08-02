# JavaScript lectures

## 01. Values and Variables

### What is Value?

Value is a piece of data. It is the smallest unit of information that we have in JavaScript.

Values are dividet by strings and numbers. String are typed inside quotation marks or dubble quotation marks.

Example for a string:

<pre>
'Kostadin'
</pre>

Numbers are typed without quotation marks.

Value can be an object or a primitive value. A value is only a primitive when is not an object.

Example for object value:

<pre>
let me = {
    name = 'Kostadin;
}
</pre>

Exampe for primitive value:

<pre>
let name = "Kotce";
let age = 39;
</pre>

(more in lecture 2.Data types)

### What are Variables?

Variables store values. Before assigning a variable value, we must give a name to that variable. A variable name should always describe what variable is storing. That way we can easily understand what variable is holding.

Example:

<pre>
const firstName = "Kostadin"
</pre>

Also, we can assign two or more values to one variable. But the values must be undefined (empty). ( I am not very sure about that. It needs to be learned more)

Example:

<pre>
const firstName, lastName;
2-nd example
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // this is x = y = 10
</pre>

For variable names we can use only letters, \_ (underscore), $ (dolar sign), and numbers (but variable names can not begin with numbers). There are rules how we have to write variables names and they are:

- every name should be written with small letter if it is one word.
- Camel case - when the name is more then one word. We write first word with small letter and then every after word with capital letter. It is a standart to write names like this in JavaScript

Example:

<pre>
firstNamePerson
</pre>

- Underscore "\_" example:
<pre>
first_name_person
</pre>

They are illegal names for variables. We cannot start a name with a number, space and most importantly they cannot be a JavaScript keyword or a JavaScript reserved word such as new, if, else, var, function, etc.

Examples:

<pre>
let 3years = 3;
let = 3 years = 3;
let var = 3;
</pre>

We can use reserved words by adding in front of them underscore or dollar sign.

Example:

<pre>
let _var = 3;
let $var= 3;
</pre>

The only reserved word that can be used is "name". But in some cases that can cost a problems. So better to avoid using keyword "name" as a name of our variable.

We **call variables** by using their names in console.log.

Example:

<pre>
console.log(variableName)
</pre>

Variables are like boxes that keep information. We say "declaring variable" when we create a variable. Variables are divide by **let** and **const**.

### What is let and const variable?

- **let** let variable stores values that can be updated within its scope. In technical terms, this is called reassigning a value of a variable or mutate the variable;
- **const** variable maintain constant values and remains the same within its scope. It cannot be changed. In technical terms, this is called an immutable variable.
  Also because const is an immutable we cannot declear empty (Undefined) const varariables.

Example:

<pre>
let personYears = 39;
 const firstName = "Kostadin";
 const personYear; - this is not legal.
</pre>

As a recommendation, we have always used const instead of let variables. let variables we have to use when we are sure that the variable will be changed in time. The reason for this is that it is a good practice to have as little as possible mutate variables.

#### Dynamic typing

When we change the value of a variable we do not need to write again keyword let.

Example:

<pre>
let age = 39;
age = 40;
</pre>

#### Undefined (empty value)

<pre>
let year;
console.log(year);
</pre>

---

## 02. Data types

JavaScript has **7 primitive Data types**

1. **String** - let firstName = "Kotce";
2. **Number** - let age = 39;
3. **Boolean** - logical type that can be only true or false. It is used for taking decisions /let fullAge = true/;
4. **Undefined** - is variable that has no value yet in to store (empty value) /let age/;
5. **Null** - very similar with Undefined;
6. **Symbol** - define a value that is unique and cannot be changed.
7. **Bigint** - It is another type of numbers. It is used for larger integers (numbers) that the Number type cannot hold.

### The Object Data type

The object data type can contain:

1. **An object**
2. **An array**
3. **A date**

In JavaScript value has the type, not the variable. For example, one variable can be a number but later can be changed into a string. This is not a problem, but in longer terms can be a cost for bugs in the code.

JavaScript has dynamic typing which means that we do not have to manually define the data type of the value stored in the variable. Instead, the data type is determined automatically.

### Typeof operator

You can use them to find the data type of a JavaScript variable.

Example:

<pre>
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined"
typeof null                   // Returns "object"
</pre>

### null bug

When we use **typeof** to define **null operator**, JavaScript gives us a bug. It says that null is an object which is not true. It should return undefined.

Example:

<pre>
console.log(typeof null);
</pre>

---

## 03. Basic Operators
