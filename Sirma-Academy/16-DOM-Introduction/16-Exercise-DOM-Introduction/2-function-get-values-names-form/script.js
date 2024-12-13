// Task 2
/*
Write a JavaScript function to get the values of First and Last names of the
following form.
 */
// function getFormvalue() {
//   const getFormNames = document.getElementById('form1');

//   const firstName = getFormNames.elements['fname'].value;
//   const lastName = getFormNames.elements['lname'].value;

//   console.log(firstName);
//   console.log(lastName);
// }

// Teacher solution add event function that prevent page from refreshing after pressing the submit button
function getFormvalue(event) {
  event.preventDefault();

  const firstNameElement = document.querySelector('input[name=fname]');
  const lastNameElement = document.querySelector('input[name=lname]');

  console.log(firstNameElement.value);
  console.log(lastNameElement.value);
}
