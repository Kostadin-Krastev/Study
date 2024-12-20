//5. Write a JavaScript function to add rows to a table.
function insertRow() {
  // Get table
  const tableBody = document.getElementById('sampleTable');

  // Create table row
  const newTableRow = document.createElement('tr');

  //   Count rows
  //   const rowCount = tableBody.children.length;
  const rowCount = tableBody.querySelectorAll('tr').length;

  //   Create first cells
  const newTableCellOne = document.createElement('td');
  newTableCellOne.textContent = `Row${rowCount + 1} cell1`;

  //   Create second cells
  const newTableCellTwo = document.createElement('td');
  newTableCellTwo.textContent = `Row${rowCount + 1} cell2`;

  //   Add the new cells
  newTableRow.appendChild(newTableCellOne);
  newTableRow.appendChild(newTableCellTwo);

  //   Append new row to the table
  tableBody.appendChild(newTableRow);
}
