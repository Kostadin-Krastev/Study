'use strict';
const bulgaria = {
  language: 'bulgarian',
  population: 4000000,
  isIsland: false,
};

let saraWants = {
  language: 'english',
  population: 50000000,
  isIsland: false,
};

if (
  bulgaria.language === saraWants.language &&
  bulgaria.population < saraWants.population &&
  bulgaria.isIsland === saraWants.isIsland
) {
  console.log('You should live in Bulgaria');
} else {
  console.log('Choose different country');
}
