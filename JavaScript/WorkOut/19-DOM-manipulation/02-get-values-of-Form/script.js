const getFormvalue = function (event) {
  // event function that prevent page from refreshing after pressing the submit button
  event.preventDefault();

  //storing form in a variable
  const getForm = document.querySelector('#form1');

  //storing first and last names in a variable
  const firstName = getForm.elements['fname'].value;
  const lastName = getForm.elements['lname'].value;

  console.log(firstName, lastName);
};
