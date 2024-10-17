// 214 Setters and Getters

/*
In JavaScript, "setters" and "getters" are special methods that allow you to define custom behavior for reading and updating the properties of objects. They enable controlled access to an object's properties, and they provide a way to implement computed properties or validate data before it's stored.

Key Concepts:
- Getter (get): A getter allows you to access a property, but behind the scenes, it can compute or return a modified value rather than directly returning the raw property value.
- Setter (set): A setter lets you change or update a property, but you can control what happens when the value is assigned (e.g., data validation, triggering additional code).

Syntax for Getters and Setters:
- Getters and setters are defined using the get and set keywords, respectively, followed by the name of the property you want to control.
- They are used within an object or a class.

Example of Getters and Setters in Objects:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter: Computed property that returns the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter: Updates both firstName and lastName based on full name
  set fullName(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
};

console.log(person.fullName); // John Doe (getter is called)

person.fullName = 'Jane Smith'; // Setter is called
console.log(person.firstName);  // Jane
console.log(person.lastName);   // Smith

In this example:

- The getter fullName() returns the combined value of firstName and lastName.
- The setter fullName(name) allows updating firstName and lastName at once by providing a full name string.

Benefits of Getters and Setters:
1. Computed Properties: 
Getters allow you to create dynamic properties that return values derived from other properties without storing the data directly.

2. Encapsulation: 
Setters allow you to validate or sanitize input before it is assigned to a property. This encapsulation of logic ensures the internal state of the object is well-protected.

3. Consistent Interface: 
You can create properties that behave like regular object properties but have hidden complexity behind them (for example, calculations or logging).

Example with Data Validation in Setter:
const account = {
  owner: 'Alice',
  transactions: [],
  
  get balance() {
    // Calculate the balance based on the transactions array
    return this.transactions.reduce((sum, trans) => sum + trans, 0);
  },

  set deposit(amount) {
    if (amount > 0) {
      this.transactions.push(amount); // Only allow positive amounts
    } else {
      console.log('Deposit amount must be positive!');
    }
  }
};

// Using the getter to access the balance
console.log(account.balance); // Output: 0

// Using the setter to make a deposit
account.deposit = 100;
console.log(account.balance); // Output: 100

account.deposit = -50; // Deposit amount must be positive!

Here, the getter balance computes the current balance based on the transactions, while the setter deposit validates that only positive deposits are allowed.

Setters and Getters in ES6 Classes:
In ES6 classes, getters and setters work similarly to object literals, but they are defined inside the class body.

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
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe (getter is called)

person.fullName = 'Jane Smith'; // Setter is called
console.log(person.firstName);  // Jane
console.log(person.lastName);   // Smith

In the class version, the get and set methods behave the same as in object literals but are part of the class syntax.

Rules for Setters and Getters:
- Getters must not accept any arguments. They are called like properties and return a value.
- Setters accept exactly one parameter, representing the value you want to set the property to.
- Getters and setters must have the same property name.

Use Cases for Getters and Setters:
- Data Validation: Before allowing a value to be set, you can validate it within a setter.

- Computed Properties: Getters are great for when the value of a property depends on other properties, as seen with the fullName property.

- Private or Hidden Data: Getters and setters can provide controlled access to "private" properties (commonly done using closures or symbols).

Example with Hidden Data:
class Product {
  constructor(name, price) {
    this._name = name;  // Using "_" as a convention for "private" properties
    this._price = price;
  }

  get price() {
    return `$${this._price}`;
  }

  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      console.log('Invalid price');
    }
  }
}

const product = new Product('Laptop', 1000);
console.log(product.price);  // $1000

product.price = 1200;
console.log(product.price);  // $1200

product.price = -500;  // Invalid price

In this example, the _price is not directly accessible outside the class, but the getter and setter provide controlled access to it.

Conclusion:
- Getters and setters in JavaScript offer a clean and controlled way to handle object properties.

- They can be used to implement computed properties, validate input, or encapsulate the logic behind reading and writing a property.

- In classes, getters and setters provide a natural interface for defining computed or controlled properties without exposing internal details of the class.
*/

const account = {
  name: 'Jonas',
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movement);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //   Setting a property that already exists
  set fullName(nameInput) {
    if (nameInput.includes(' ')) {
      console.log((this._fullName = nameInput));
    } else {
      console.log(`${this.name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const jonas = new PersonCl('Jonas Davis', 1991);
const walter = new PersonCl('Walter White', 1965);

console.log(jonas.age);
console.log(walter._fullName);
