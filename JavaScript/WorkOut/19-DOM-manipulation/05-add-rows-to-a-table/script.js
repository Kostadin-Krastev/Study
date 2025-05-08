function insertRow() {
  // Getting the table in a variable
  const tableElement = document.querySelector('#sampleTable');

  // Count rows
  const rowCount = tableElement.querySelectorAll('tr').length;

  // Insert a new row at the end of the table
  const newRow = tableElement.insertRow(-1); // -1 adds to the last position

  // Insert new cells in the row
  const cell1 = newRow.insertCell(0); // First cell
  const cell2 = newRow.insertCell(1); // Second cell

  // Add text to the new cells
  cell1.textContent = `Row${rowCount + 1} cell1`;
  cell2.textContent = `Row${rowCount + 1} cell2`;
}
