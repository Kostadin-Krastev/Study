// 8 Type Conversion and Coercion

/*
- type conversion is when we manually convert from one type to another. They are three types that we convert - to a string, to a number, and to a boolian.
    Example for type conversion:
    const inputYear = 1991;
    console.log(inputYear + 18); - we can`t do this calculation because JavaScript sees "inputYear" as a string. Therefore it will not add 18 to 1991 as a number but will add 18 to 1991 as a string. The result will be 199118.
    The solution is to use build in Number function:
    consol.log(Number(inputYear) + 18);

    If we want to convert something in to string we use the String function.
    Example:
    consol.log(String(23)) - the number now is a string


- type coercion is when JavaScript automatically converts types for us completely hidden from us.
    Example:
    console.log("I`m " + 23 + " years old") - here the number 23 will be converted into a string and the result will be (I`m 23 years old). Always when we have an operation with addition (+) between a string and a number, the number will be converted into a string. And the opposite when we have an operation with subtraction, multiplication, and division (-, *, /) between a string and a number, the strings will be converted into a number.
    Example:
    console.log("23" - "10" - 3) - here the result will be 10 because subtraction convert stings into numbers.
    console.log("23" * "10" * 3) - here the result will be 690 because multiplication convert string into numbers.
    console.log("23" / "2") - here the result will be 11,5 because division convert string into numbres.
*/
