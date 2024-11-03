/*
The Hogwarts Library contains a vast array of magical records. Write a program that finds the first and last occurrence of a specific record in the archives. 

If the record is missing, print "Record not found."
 */

function findsMagicalRecords(inputRecord, inputSearch) {
  //   Storing first position index
  const firstPosition = inputRecord.indexOf(inputSearch);
  //   Storing last position index
  const lastPosition = inputRecord.lastIndexOf(inputSearch);

  //   Using if else statement to check if the inputRecord is in the inputRecord
  if (firstPosition === -1) {
    console.log('Record not found');
  } else {
    console.log(`First Occurrence: ${firstPosition}`);
    console.log(`Last Occurrence: ${lastPosition}`);
  }
}

// Test data 1
// findsMagicalRecords(['Harry', 'Hermione', 'Harry', 'Ron'], 'Harry');

// Test data 2
// findsMagicalRecords(['Ginny', 'Luna', 'Neville', 'Ginny'], 'Ginny');

// Test data 3
// findsMagicalRecords(['Ron', 'Hermione', 'Luna'], 'Dumbledore');

// Test data 4
findsMagicalRecords(['Dobby', 'Ron', 'Hermione', 'Harry'], 'Harry');
