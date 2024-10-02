/*
Input: Two positive integers 'n' and 'm' representing the number of rows and columns.
 */

// Test data 1
let rows = 4;
let columns = 6;

// Test data 2
rows = 2;
columns = 2;

// Test data 3
rows = 3;
columns = 4;
function printRectangle(rows, columns) {
  for (let r = 1; r <= rows; r++) {
    let text = '';
    if (r !== 1 || r !== rows) {
      text += '*';
    }
    for (let c = 1; c <= columns; c++) {
      if (r === 1 || r === rows) {
        text += '*';
      } else {
        text += ' ';
      }
      if (c === columns) {
        text += '*';
      } else {
        text += ' ';
      }
    }
    console.log(text);
  }
}

printRectangle(rows, columns);
