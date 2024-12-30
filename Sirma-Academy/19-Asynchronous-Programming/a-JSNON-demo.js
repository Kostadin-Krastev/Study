// JSON -> JavaScript Object Notation
// Universal Data exchange format: Data sent in text form
// Данни, които се запосват под формата на текст

let catObject = {
  name: 'Navcho',
  age: 9,
  color: 'yellow',
};

// Convert object to JSON
const catJSON = JSON.stringify(catObject);
console.log(catJSON);

console.log(typeof catObject);
console.log(typeof catJSON);

// Convert JSON to object
const originalCat = JSON.parse(catJSON);
console.log(originalCat);
