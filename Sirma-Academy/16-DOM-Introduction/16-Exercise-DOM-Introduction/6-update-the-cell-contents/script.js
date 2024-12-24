/*
6. Write a JavaScript function that accepts a row, column (to identify a
particular cell) and a string to update the cell's contents.
 */

function changeContent() {
  const tableRowElement = document.querySelector('tr:nth-of-type(2)');
  const tableCellElement = tableRowElement.querySelector('td:nth-of-type(1)');
  tableCellElement.textContent = 'New Data';
}
