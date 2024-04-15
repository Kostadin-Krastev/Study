/**
 3. let, const and var:

 What is let and const variable?
 - let variable stores values that can be updated within its scope. In technical terms, this is called reassigning a value of a variable or mutate the variable;
 - const variable maintain constant values and remains the same within its scope. It cannot be changed. In technical terms, this is called an immutable variable.
 Also because const is an immutable we cannot declear empty (Undefined) const varariables.
 Example:
 let personYears = 39;
 const firstName = "Kostadin";
 const personYear; - this is not legal.

 As a recommendation, we have always used const instead of let variables. let variables we have to use when we are sure that the variable will be changed in time. The reason for this is that it is a good practice to have as little as possible mutate variables.
 */
