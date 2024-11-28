// 2. Using call to Chain Constructors.
/*
Create two constructor functions. In the first constructor, use call to chain the second constructor, passing in arguments from the first constructor.
 */

function person(name) {
  this.name = name;
}

function employee(name, job) {
  person.call(this, name);
  this.job = job;
}
const emp = new employee('Alice', 'Engineer');
console.log(emp);
