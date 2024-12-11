// Prototype inheritance
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

Animal.prototype.sleep = function () {
  console.log(`${this.species} ${this.name} - Zzzzzzz`);
};

function Cat(name, breed) {
  Animal.call(this, name, 'cat');

  this.breed = breed;
}

// Setting prototype of Cat to have prototype of Animal
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.play = function () {
  console.log(`${this.name} is playing`);
};

const navcho = new Cat('Navcho', 'Persian');

console.log(navcho);
navcho.sleep();
navcho.play();
