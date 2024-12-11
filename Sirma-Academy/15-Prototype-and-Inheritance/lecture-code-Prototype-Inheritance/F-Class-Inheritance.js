// Class inheritance
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  sleep() {
    console.log(`${this.species} ${this.name} - Zzzzzzzzzzz`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name, 'cat');

    this.breed = breed;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

const navcho = new Cat('Navcho', 'Persian');

console.log(navcho);
navcho.sleep();
navcho.play();
