function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return `My name is ${this.name}, and I'm ${this.age} years old.`;
  };
}

const firstPerson = new Person('Pesho', 20);
console.log(firstPerson);
const secondPerson = new Person('Gosho', 18);

console.log(firstPerson.info());
console.log(secondPerson.info());
