console.log('Hello from external JS');

// ID selector
const fancyParagraphElement = document.getElementById('fancy-id');
console.log(fancyParagraphElement);

// Type selector
const paragraphElements = document.getElementsByTagName('p');
console.log(paragraphElements);
console.log(paragraphElements[0]); // we can choose which to call like array elements

// Class selector
const fancyElements = document.getElementsByClassName('fancy');
console.log(fancyElements[1]); // we can choose which to call like array elements

// CSS selectors (If we have multiple identical elements with same name it will always selects and return the first one)
const singleElement = document.querySelector('.fancy'); // return only first of many elements with class name fancy
console.log(singleElement);

// Select all elements with same class name ot tag
const multipleElements = document.querySelectorAll('.fancy');
console.log(multipleElements);

const inputElement = document.querySelector('input[name=username]');
console.log(inputElement);

// Get children
const movieListElement = document.querySelector('.movie-list');
console.log(movieListElement.children);
const firstMovieElement = movieListElement.children[0]; // The Matrix
console.log(firstMovieElement);

// Get parent
console.log(firstMovieElement.parentElement);

// Search in element
const favMovie = movieListElement.querySelector('.favorite');
console.log(favMovie);

// Get favorite movie name
console.log(favMovie.textContent);

// Change movie name
favMovie.textContent = 'Batman Returns';
