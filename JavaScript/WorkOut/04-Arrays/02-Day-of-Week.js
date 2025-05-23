/*
Write a program which receives a number and prints the corresponding name of the day of week. If the number is not a valid day, print 'Invalid day!
 */

function printDayOfWeek(inputNumber) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Invalid day!',
  ];

  if (daysOfWeek[inputNumber]) {
    console.log(daysOfWeek[inputNumber]);
  } else {
    console.log(daysOfWeek[daysOfWeek.length - 1]);
  }
}

printDayOfWeek(11);
