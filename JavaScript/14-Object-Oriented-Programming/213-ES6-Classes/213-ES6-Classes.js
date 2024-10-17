/*
// 213 ES6 Classes

JavaScript ES6 Classes are a syntactical sugar introduced in ECMAScript 2015 (ES6) that make it easier to create objects and work with inheritance. While JavaScript is still prototype-based, the class syntax provides a more familiar and cleaner way to define object-oriented constructs like classes, inheritance, and methods, similar to other object-oriented languages like Java, Python, and C++.

Key Features of ES6 Classes:

1. Class Declaration: 
ES6 classes are declared using the class keyword, followed by the class name. Inside the class, a constructor method is used to initialize objects, and methods are defined without the need for the function keyword.

Example:
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`Speed is now: ${this.speed}`);
    }

    brake() {
        this.speed -= 5;
        console.log(`Speed is now: ${this.speed}`);
    }
}

const car1 = new Car('Toyota', 50);
car1.accelerate(); // Speed is now: 60
car1.brake();      // Speed is now: 55

2. Constructor Method:
- The constructor() method is a special method that is automatically called when a new object instance is created using the new keyword.
- It is used to initialize object properties.
Example:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('Alice', 30);
console.log(person1.name); // Alice

3. Methods in Classes:
- In ES6 classes, methods are defined directly within the class body without the function keyword.
- These methods are automatically added to the class's prototype, meaning that all instances of the class share the same methods, leading to memory efficiency.

Example:
class Animal {
    constructor(type) {
        this.type = type;
    }

    speak() {
        console.log(`${this.type} makes a sound`);
    }
}

const dog = new Animal('Dog');
dog.speak(); // Dog makes a sound


4. Inheritance: 
ES6 classes support inheritance using the extends keyword. A subclass can inherit properties and methods from a parent class. In the subclass, the super() function is used to call the parent class's constructor and initialize the parent properties.

Example:
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Rex, the German Shepherd, barks.

5. Static Methods: 
Static methods are defined using the static keyword. These methods are called on the class itself, not on instances of the class. Static methods are often used for utility functions or functionality that doesn't relate to individual objects.

Example:
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(3, 5)); // Output: 8

In this example, the add() method is static, and it is called directly on the MathUtil class, not on an instance of the class.

6. Getters and Setters: 
ES6 classes allow defining getter and setter methods to provide controlled access to properties. Getters and setters are useful for validating or modifying how properties are accessed or assigned.

Example:
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for fullName
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe

person.fullName = 'Jane Smith';
console.log(person.firstName); // Jane
console.log(person.lastName);  // Smith

7. Class Expressions: 
Classes can also be defined as expressions, just like functions. You can assign them to a variable, or even make them anonymous.

Example: 
const Car = class {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`Speed is now: ${this.speed}`);
    }
};

const car1 = new Car('Honda', 60);
car1.accelerate(); // Speed is now: 70

8. Private Fields and Methods (ES2022): 
Starting in ES2022, JavaScript added support for private fields and methods in classes. Private fields are prefixed with a # and can only be accessed within the class. This is useful for encapsulation, ensuring that certain properties and methods cannot be accessed or modified from outside the class.

Example:
class Person {
    #age; // Private field

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    // Private method
    #getSecret() {
        return `My age is ${this.#age}`;
    }

    showSecret() {
        return this.#getSecret();
    }
}

const person = new Person('Alice', 25);
console.log(person.showSecret()); // My age is 25
// console.log(person.#age); // SyntaxError: Private field '#age' must be declared in an enclosing class

Example:
class Person {
    #age; // Private field

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    // Private method
    #getSecret() {
        return `My age is ${this.#age}`;
    }

    showSecret() {
        return this.#getSecret();
    }
}

const person = new Person('Alice', 25);
console.log(person.showSecret()); // My age is 25
// console.log(person.#age); // SyntaxError: Private field '#age' must be declared in an enclosing class

In this example, the private field #age and the private method #getSecret() are only accessible within the Person class, not from the outside.

Benefits of Using ES6 Classes
1. Cleaner Syntax: 
ES6 class syntax is more concise and readable compared to the traditional constructor function and prototype-based inheritance. It looks familiar to developers coming from other object-oriented languages.

2. Built-in Inheritance: 
Inheritance with extends and super() is easier to implement and more intuitive than manually setting the prototype in the pre-ES6 way.

3. Encapsulation with Private Fields (ES2022+): 
With the addition of private fields and methods, ES6 classes can provide better encapsulation, ensuring that internal state and behavior are hidden from external code.

4. Method Sharing through Prototypes: 
Although methods are defined within the class body, they are still shared among instances by being added to the class’s prototype, keeping memory usage efficient.


ES6 Classes vs. Constructor Functions
Even though the ES6 class syntax is easier and more modern, it's important to note that classes are just syntactical sugar over JavaScript's existing prototype-based inheritance model. Under the hood, classes still work with prototypes.

- Constructor Functions:
    - Defined using traditional function syntax.
    - Methods are manually assigned to the prototype.
    - No special keywords like class, extends, or super().

- ES6 Classes:
    - Introduced for cleaner and more familiar object-oriented syntax.
    - Supports inheritance using extends and super().
    - Encapsulates the object and methods more naturally than constructor functions.
 
 Example: Pre-ES6 vs. ES6 Class Syntax

 Pre-ES6 Constructor Function:
 function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.speed);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.speed);
};

const car1 = new Car('Ford', 60);
car1.accelerate(); // 70


ES6 Class:
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log(this.speed);
    }
}

const car1 = new Car('Ford', 60);
car1.accelerate(); // 70

Summary
- ES6 classes provide a cleaner, more readable syntax for creating objects and implementing inheritance in JavaScript.

- They support modern OOP features like inheritance via extends, encapsulation with private fields and methods, and static methods.

- While the syntax is more intuitive, JavaScript classes are still built on the prototype-based inheritance model.
*/

// Class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //   Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jesica = new PersonCl('Jesica', 1996);

jesica.calcAge();

// Creating new method for PersonCl
PersonCl.prototype.greed = function () {
  console.log(`Hey, ${this.firstName}`);
};

jesica.greed();

// Important!!!
/*
1. Classes are not hoisted. Which means that that we can't use them before they are declare 
2. Classes are first-class citizens. That means that we can pass Classes into functions and also we can return them from functions
3. The code in the body of a Class is always executed in a strict mode even if we didn't activate it.
 */
