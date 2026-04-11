'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruscheta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterMenuInput, mainMenuInput) {
    return [this.starterMenu[starterMenuInput], this.mainMenu[mainMenuInput]];
  },
};

const array = [2, 3, 4];
// Destructuring array old way
const a = array[0];
const b = array[1];
const c = array[2];

// Destructuring array new way
const [x, y, z] = array;
// console.log(x, y, z);

// Taking first two elements from categories in Italian restaurant
const [first, second] = restaurant.categories;
// console.log(first, second);

// Taking first and third elements from categories in Italian restaurant (have to left empty space for the second element that w don't want)
const [firstEl, , thirdEl] = restaurant.categories;
// console.log(firstEl, thirdEl);

// Switching elements in array
// Example: switching first and third elements in the categories
let [main, , thirdly] = restaurant.categories;
/*
First example: switching without destructuring
const temp = main;
main = thirdly;
thirdly = temp;
console.log(main, thirdly);
*/
// Second example: switching first and third elements using destructuring
[main, thirdly] = [thirdly, main];
// console.log(main, thirdly);

// Example using order method that we create in Italian restaurant object: receiving two return values from a function
const [firstOrderItem, secondOrderItem] = restaurant.order(2, 0);
// console.log(firstOrderItem, secondOrderItem);

// Example: destructuring with nested array
// const nestedArray = [2, 4, [5, 6]];
// const [nestedA, , nestedB] = nestedArray;
// console.log(nestedA, nestedB);

// Example: destructuring inside destructuring (destructuring the nested array - takeing his two elements and the first element of his parent array)
const nestedArray = [2, 4, [5, 6]];
const [arrA, , [nestedArrA, nestedArrB]] = nestedArray;
// console.log(arrA, nestedArrA, nestedArrB);

// Example: destructuring when we don't know the length of the Array (add default values when there is no elements in the array that we destructuring - for example when the array is with two elements but we are looking for three elements)
// Here we add 1 to all elements. When the array that we destruct have value in that element the value of the array is return. When the array don't have value - 1 is return
const [itemA = 1, itemB = 1, itemC = 1] = [8, 9];
console.log(itemA, itemB, itemC); // the result will be 8, 9 , 1 [1 is the defult value that we put when the array have no element]
