/*
Write a JavaScript function that accepts a row, column (to identify a
particular cell) and a string to update the cell's contents.
 */

const changeContent = function () {
  //  storing the table in variable
  const tableElement = document.querySelector('#myTable');

  //  counting rows and cells
  const countRows = tableElement.querySelectorAll('tr').length;
  const countCells = tableElement.querySelectorAll('td').length;
};

changeContent();
