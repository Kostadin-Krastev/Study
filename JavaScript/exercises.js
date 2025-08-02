'use strict';
let numNeighbours = 4;
numNeighbours = '1';
const num = Number(numNeighbours);
// numNeighbours = 0;

if (num === 1) {
  console.log('Only 1 neighbour');
} else if (num > 1) {
  console.log('More than one border');
} else {
  console.log('No borders');
}
